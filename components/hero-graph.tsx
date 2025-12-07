"use client";

import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const NetworkGraph = dynamic(
  () => import("./three/NetworkGraph").then((mod) => mod.NetworkGraph),
  {
    ssr: false,
    loading: () => null,
  }
);

export function HeroGraph() {
  return (
    <Canvas
      className="pointer-events-none"
      camera={{ position: [0, 0, 14], fov: 45 }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 6, 8]} intensity={1.2} />
      <NetworkGraph />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.4}
      />
    </Canvas>
  );
}
