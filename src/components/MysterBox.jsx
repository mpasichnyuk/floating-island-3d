/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: planetvfx (https://sketchfab.com/planetvfx)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/mario-mystery-box-47acb57e775e43bb99160dbee168af3c
Title: Mario Mystery Box
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import mysteryBox from "../assets/3d/mario_mystery_box.glb";
const SLOW_ROTATION_SPEED = 0.01;
const FAST_ROTATION_SPEED = 0.1;

const SLOW_FREQ = 1.2;
const FAST_FREQ = 0.05;

const MysteryBox = (props) => {
  const { fastRotation } = props;
  const boxRef = useRef();

  // this make box slowly rotate around y axis
  useFrame(() => {
    if (boxRef.current) {
      boxRef.current.rotation.y += SLOW_ROTATION_SPEED;
    }
  });

  // this useFrame makes slowly float up and down
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    const amplitude = 0.05;
    const frequency = 1.2;

    // Calculate the new vertical position using a sine wave
    const verticalPosition = Math.sin(elapsedTime * frequency) * amplitude;

    boxRef.current.position.y = verticalPosition;
  });

  const { nodes, materials } = useGLTF(mysteryBox);
  return (
    <group {...props} ref={boxRef}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.086}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.pasted__VRayMtl1SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.pasted__VRayMtl5SG}
        />
      </group>
    </group>
  );
};

export default MysteryBox;
