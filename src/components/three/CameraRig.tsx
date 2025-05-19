"use client";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { useScrollRatio } from "@/hooks/useScrollRatio";
import * as THREE from "three";

export const CameraRig = () => {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const scrollRatio = useScrollRatio();

  useFrame(() => {
    if (!cameraRef.current) return;

    // スクロールに応じてカメラの位置を更新
    const targetZ = -scrollRatio * 100; // スクロール量に応じてZ軸を移動
    cameraRef.current.position.z = THREE.MathUtils.lerp(
      cameraRef.current.position.z,
      targetZ,
      0.1,
    );
  });

  return (
    <PerspectiveCamera
      ref={cameraRef}
      makeDefault
      position={[0, 0, 5]}
      fov={75}
      near={0.1}
      far={1000}
      data-oid="b6frsyc"
    />
  );
};
