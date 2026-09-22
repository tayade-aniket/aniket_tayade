"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// ─── Neural Network Scene ────────────────────────────────────────────────────

interface NodeData {
  position: [number, number, number];
  phase: number;
  speed: number;
  radius: number;
  isHub: boolean;
}

function NeuralNetwork() {
  const groupRef = useRef<THREE.Group>(null!);
  const linesRef = useRef<THREE.LineSegments>(null!);
  const nodesRef = useRef<THREE.InstancedMesh>(null!);

  // Generate node positions once
  const nodes = useMemo<NodeData[]>(() => {
    const data: NodeData[] = [];
    const rng = (min: number, max: number) => Math.random() * (max - min) + min;

    // 5 large "hub" nodes — gold colored
    for (let i = 0; i < 5; i++) {
      data.push({
        position: [rng(-2.5, 2.5), rng(-2, 2), rng(-1.5, 1.5)],
        phase: rng(0, Math.PI * 2),
        speed: rng(0.3, 0.6),
        radius: rng(0.12, 0.18),
        isHub: true,
      });
    }
    // 35 smaller peripheral nodes — slate/indigo
    for (let i = 0; i < 35; i++) {
      data.push({
        position: [rng(-3.2, 3.2), rng(-2.5, 2.5), rng(-2, 2)],
        phase: rng(0, Math.PI * 2),
        speed: rng(0.2, 0.5),
        radius: rng(0.04, 0.09),
        isHub: false,
      });
    }
    return data;
  }, []);

  // Build edges between nearby nodes
  const { linePositions, lineColors } = useMemo(() => {
    const positions: number[] = [];
    const colors: number[] = [];
    const CONNECTION_DIST = 2.2;

    const goldColor = new THREE.Color("#B8860B");
    const slateColor = new THREE.Color("#64748B");

    for (let a = 0; a < nodes.length; a++) {
      for (let b = a + 1; b < nodes.length; b++) {
        const pa = nodes[a].position;
        const pb = nodes[b].position;
        const dx = pa[0] - pb[0];
        const dy = pa[1] - pb[1];
        const dz = pa[2] - pb[2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < CONNECTION_DIST) {
          positions.push(...pa, ...pb);
          const col = nodes[a].isHub || nodes[b].isHub ? goldColor : slateColor;
          colors.push(col.r, col.g, col.b, col.r, col.g, col.b);
        }
      }
    }
    return {
      linePositions: new Float32Array(positions),
      lineColors: new Float32Array(colors),
    };
  }, [nodes]);

  // Dummy object for InstancedMesh transforms
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const matrix = useMemo(() => new THREE.Matrix4(), []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // Slow global rotation of the whole network
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.08;
      groupRef.current.rotation.x = Math.sin(t * 0.05) * 0.15;
    }

    // Animate each node's position (breathing drift) + update instanced mesh
    if (nodesRef.current) {
      nodes.forEach((node, i) => {
        const px = node.position[0] + Math.sin(t * node.speed + node.phase) * 0.15;
        const py = node.position[1] + Math.cos(t * node.speed * 0.7 + node.phase) * 0.12;
        const pz = node.position[2] + Math.sin(t * node.speed * 0.5 + node.phase * 1.3) * 0.1;
        const pulse = node.isHub
          ? 1 + Math.sin(t * 1.5 + node.phase) * 0.15
          : 1 + Math.sin(t * 2 + node.phase) * 0.08;
        const s = node.radius * pulse;

        dummy.position.set(px, py, pz);
        dummy.scale.setScalar(s);
        dummy.updateMatrix();
        matrix.copy(dummy.matrix);
        nodesRef.current.setMatrixAt(i, matrix);
      });
      nodesRef.current.instanceMatrix.needsUpdate = true;
    }

    // Animate line opacity via material
    if (linesRef.current) {
      const mat = linesRef.current.material as THREE.LineBasicMaterial;
      mat.opacity = 0.25 + Math.sin(t * 0.4) * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Connection edges */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3] as unknown as never}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[lineColors, 3] as unknown as never}
          />
        </bufferGeometry>
        <lineBasicMaterial
          vertexColors
          transparent
          opacity={0.28}
          linewidth={1}
        />
      </lineSegments>

      {/* Node spheres — hub nodes */}
      <instancedMesh ref={nodesRef} args={[undefined, undefined, nodes.length]}>
        <sphereGeometry args={[1, 14, 14]} />
        <meshStandardMaterial
          color="#B8860B"
          metalness={0.3}
          roughness={0.4}
          emissive="#B8860B"
          emissiveIntensity={0.4}
        />
      </instancedMesh>
    </group>
  );
}

// ─── Exports ─────────────────────────────────────────────────────────────────

export function NeuralNetCanvas3D() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 52 }} gl={{ alpha: true }}>
      <ambientLight intensity={1.2} />
      <directionalLight position={[4, 4, 4]} intensity={1.0} color="#B8860B" />
      <pointLight position={[-4, -3, 2]} intensity={0.6} color="#64748B" />
      <pointLight position={[3, -2, -3]} intensity={0.4} color="#B8860B" />
      <NeuralNetwork />
    </Canvas>
  );
}

// ─── Card canvas (About section role cards) ────────────────────────────────

function FloatingOrb({ color = "#B8860B", position = [0, 0, 0] as [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y = t * 0.6;
    meshRef.current.position.y = position[1] + Math.sin(t * 1.2) * 0.1;
  });
  return (
    <mesh ref={meshRef} position={position}>
      <icosahedronGeometry args={[0.7, 1]} />
      <meshStandardMaterial
        color={color}
        metalness={0.2}
        roughness={0.5}
        emissive={color}
        emissiveIntensity={0.1}
      />
    </mesh>
  );
}

export function CardCanvas3D({ color }: { color: string }) {
  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 45 }} gl={{ alpha: true }}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[2, 2, 2]} intensity={1.2} />
      <pointLight position={[-2, -2, -2]} intensity={0.5} color={color} />
      <FloatingOrb color={color} />
    </Canvas>
  );
}
