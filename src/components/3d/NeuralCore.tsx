"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import * as THREE from "three";

/**
 * Original, procedural 3D scene — no external model files, no licensed assets.
 * A neural core: glowing inner sphere, wireframe shell, orbiting nodes,
 * and a star/particle field. Mouse movement gently tilts the whole group.
 */
function Core() {
  const group = useRef<THREE.Group>(null);
  const shell = useRef<THREE.Mesh>(null);
  const ring = useRef<THREE.Mesh>(null);

  const nodes = useMemo(() => {
    // 8 nodes on two tilted orbits, positions fixed at build time.
    const positions: [number, number, number][] = [];
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const radius = i % 2 === 0 ? 2.4 : 2.9;
      positions.push([
        Math.cos(angle) * radius,
        Math.sin(angle) * radius * 0.45,
        Math.sin(angle) * 0.8,
      ]);
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (!group.current) return;
    // Gentle idle rotation + mouse-follow tilt (pointer is -1..1).
    group.current.rotation.y += delta * 0.15;
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      state.pointer.y * 0.25,
      0.05
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      state.pointer.x * -0.15,
      0.05
    );
    if (shell.current) shell.current.rotation.y -= delta * 0.1;
    if (ring.current) ring.current.rotation.z += delta * 0.2;
  });

  return (
    <group ref={group}>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={60} color="#38bdf8" />
      <pointLight position={[-5, -3, 3]} intensity={40} color="#7c3aed" />

      {/* Glowing core */}
      <mesh>
        <sphereGeometry args={[0.9, 32, 32]} />
        <meshStandardMaterial color="#1e1b4b" emissive="#7c3aed" emissiveIntensity={1.2} roughness={0.3} />
      </mesh>

      {/* Wireframe shell */}
      <mesh ref={shell}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshBasicMaterial color="#38bdf8" wireframe transparent opacity={0.55} />
      </mesh>

      {/* Tilted orbit ring */}
      <mesh ref={ring} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.4, 0.015, 8, 100]} />
        <meshBasicMaterial color="#06b6d4" transparent opacity={0.8} />
      </mesh>

      {/* Orbiting technology nodes */}
      {nodes.map((position, i) => (
        <mesh key={i} position={position}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial
            color="#0ea5e9"
            emissive={i % 2 === 0 ? "#38bdf8" : "#a78bfa"}
            emissiveIntensity={2}
          />
        </mesh>
      ))}

      <Stars radius={8} depth={30} count={1200} factor={3} saturation={0} fade speed={0.5} />
    </group>
  );
}

export default function NeuralCore() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 6], fov: 50 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      aria-label="Interactive 3D AI neural core"
    >
      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8}>
        <Core />
      </Float>
    </Canvas>
  );
}
