"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles({ count = 3000 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null!);

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const gold = new THREE.Color("#cfb584");
    const white = new THREE.Color("#ffffff");

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // positions
      pos[i3] = (Math.random() - 0.5) * 20;
      pos[i3 + 1] = (Math.random() - 0.5) * 20;
      pos[i3 + 2] = (Math.random() - 0.5) * 10;

      // colors
      const mixed = gold.clone().lerp(white, Math.random());
      col[i3] = mixed.r;
      col[i3 + 1] = mixed.g;
      col[i3 + 2] = mixed.b;
    }

    return { positions: pos, colors: col };
  }, [count]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.y = t * 0.04;
      mesh.current.rotation.x = Math.sin(t * 0.02) * 0.1;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        {/* ✅ FIXED: using args (REQUIRED for production build) */}
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3] as unknown as any}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3] as unknown as any}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export default function ParticleBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Particles />
      </Canvas>
    </div>
  );
}