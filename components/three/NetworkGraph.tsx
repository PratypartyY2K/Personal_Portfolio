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
const NODE_SEED = 7331;
const EDGE_SEED = 1123;

export function NetworkGraph() {
  const groupRef = useRef<THREE.Group>(null);

  const nodes = useMemo<Node[]>(() => generateNodes(NODE_SEED), []);

  const edges = useMemo(() => generateEdges(nodes, EDGE_SEED), [nodes]);

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

function mulberry32(seed: number) {
  let t = seed;
  return () => {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function generateNodes(seed: number): Node[] {
  const rand = mulberry32(seed);
  return Array.from({ length: NODE_COUNT }, () => ({
    position: [
      (rand() - 0.5) * 10,
      (rand() - 0.5) * 5,
      (rand() - 0.5) * 4,
    ] as [number, number, number],
  }));
}

function generateEdges(nodes: Node[], seed: number): Array<[Node, Node]> {
  const rand = mulberry32(seed);
  const result: Array<[Node, Node]> = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      if (rand() < CONNECTION_CHANCE) {
        result.push([nodes[i], nodes[j]]);
      }
    }
  }
  return result;
}
