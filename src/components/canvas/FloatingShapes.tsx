"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function FloatingDiamond() {
  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y = t * 0.5;
    meshRef.current.rotation.x = t * 0.3;
    meshRef.current.position.y = Math.sin(t * 0.8) * 0.15;
  });
  return (
    <mesh ref={meshRef}>
      <octahedronGeometry args={[1.4, 0]} />
      <meshStandardMaterial
        color="#cfb584"
        metalness={0.8}
        roughness={0.2}
        emissive="#6b4e1a"
        emissiveIntensity={0.3}
        wireframe={false}
      />
    </mesh>
  );
}

function FloatingOrb({ color = "#7c3aed", position = [0, 0, 0] as [number, number, number] }) {
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
        metalness={0.6}
        roughness={0.3}
        emissive={color}
        emissiveIntensity={0.15}
      />
    </mesh>
  );
}

export function CardCanvas3D({ color }: { color: string }) {
  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[2, 2, 2]} intensity={1} />
      <pointLight position={[-2, -2, -2]} intensity={0.5} color={color} />
      <FloatingOrb color={color} />
    </Canvas>
  );
}

export function HeroCanvas3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[3, 3, 3]} intensity={1.5} color="#cfb584" />
      <pointLight position={[-3, -3, 0]} intensity={0.8} color="#7c3aed" />
      <FloatingDiamond />
    </Canvas>
  );
}
