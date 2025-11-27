"use client";

import { useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

type Node = {
  position: [number, number, number];
};

const NODE_COUNT = 26;
const CONNECTION_CHANCE = 0.18;

export function NetworkGraph() {
  const groupRef = useRef<THREE.Group>(null);

  // Generate node positions just once
  const nodes = useMemo<Node[]>(() => {
    const arr: Node[] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      arr.push({
        position: [
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 5,
          (Math.random() - 0.5) * 4,
        ],
      });
    }
    return arr;
  }, []);

  // Precompute simple edges between nearby nodes
  const edges = useMemo(
    () => {
      const result: Array<[Node, Node]> = [];
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          if (Math.random() < CONNECTION_CHANCE) {
            result.push([nodes[i], nodes[j]]);
          }
        }
      }
      return result;
    },
    [nodes]
  );

  // Slow breathing rotation
  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.08;
    groupRef.current.rotation.x = Math.sin(t * 0.15) * 0.1;
  });

  return (
    <group ref={groupRef}>
      {/* Nodes */}
      {nodes.map((node, idx) => (
        <mesh key={idx} position={node.position}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#22d3ee"
            emissiveIntensity={1.2}
            roughness={0.3}
            metalness={0.2}
          />
        </mesh>
      ))}

      {/* Connections */}
      {edges.map(([a, b], idx) => (
        <Line
          key={idx}
          points={[a.position, b.position]}
          color="#1d4ed8"
          opacity={0.4}
          transparent
          lineWidth={1}
        />
      ))}
    </group>
  );
}
