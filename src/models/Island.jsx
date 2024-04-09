/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: hellitra (https://sketchfab.com/hellitra)
License: CC-BY-NC-ND-4.0 (http://creativecommons.org/licenses/by-nc-nd/4.0/)
Source: https://sketchfab.com/3d-models/boatrestaurant-c02032f8a7ee4c538e1f76e8f20a6c1b
Title: Boatrestaurant
*/

import { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { Box3, Vector3 } from "three";
import { useFrame, useThree } from "@react-three/fiber";
import islandScene from "../assets/3d/boatrestaurant.glb";
import { a } from "@react-spring/three";

const Island = ({ isRotating, setIsRotating, setCurrentStage, ...props }) => {
  // const { isRotating, setIsRotating } = props;
  const islandRef = useRef();
  const { nodes, materials } = useGLTF(islandScene);
  const { gl, viewport } = useThree();
  const lastX = useRef(0);
  const rotationSpeed = useRef(0.1);
  const dampingFactor = 0.9;

  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    console.log("clientX: ", clientX);

    lastX.current = clientX;
  };
  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  };

  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;

      const delta = (clientX - lastX.current) / viewport.width;
      console.log("delta: ", delta);

      islandRef.current.rotation.y += delta * 0.01 * Math.PI;

      lastX.current = clientX;

      rotationSpeed.current = delta * 0.01 * Math.PI;
      console.log("rotationSpeed.current: ", rotationSpeed.current);
      console.log("delta: ", delta);
    }
  };

  const handleKeyDown = (e) => {
    console.log("keydown!");
    if (e.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true);

      islandRef.current.rotation.y += 0.005 * Math.PI;
      rotationSpeed.current = 0.07;
    } else if (e.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true);

      islandRef.current.rotation.y -= 0.005 * Math.PI;
      rotationSpeed.current = -0.07;
    }
  };

  const handleKeyUp = (e) => {
    console.log("key up!");
    console.log(islandRef.current.rotation.y);

    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      setIsRotating(false);
    }
  };

  const centerOffsetMesh = (mesh) => {
    var center = new THREE.Vector3();
    mesh.geometry.computeBoundingBox();
    mesh.geometry.boundingBox.getCenter(center);
    mesh.geometry.center();
    mesh.position.copy(center);
  };

  useEffect(() => {
    centerOffsetMesh(nodes.boat_restaurant_tutto_0);
    centerOffsetMesh(nodes.boat_restaurant_rete1_0);

    const canvas = gl.domElement;
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

  useFrame(() => {
    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;

      if (Math.abs(rotationSpeed.current) < 0.01) {
        rotationSpeed.current = 0;
      }
      islandRef.current.rotation.y += rotationSpeed.current;
    } else {
      const rotation = islandRef.current.rotation.y;
      /**
       * Normalize the rotation value to ensure it stays within the range [0, 2 * Math.PI].
       * The goal is to ensure that the rotation value remains within a specific range to
       * prevent potential issues with very large or negative rotation values.
       *  Here's a step-by-step explanation of what this code does:
       *  1. rotation % (2 * Math.PI) calculates the remainder of the rotation value when divided
       *     by 2 * Math.PI. This essentially wraps the rotation value around once it reaches a
       *     full circle (360 degrees) so that it stays within the range of 0 to 2 * Math.PI.
       *  2. (rotation % (2 * Math.PI)) + 2 * Math.PI adds 2 * Math.PI to the result from step 1.
       *     This is done to ensure that the value remains positive and within the range of
       *     0 to 2 * Math.PI even if it was negative after the modulo operation in step 1.
       *  3. Finally, ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) applies another
       *     modulo operation to the value obtained in step 2. This step guarantees that the value
       *     always stays within the range of 0 to 2 * Math.PI, which is equivalent to a full
       *     circle in radians.
       */
      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      // Set the current stage based on the island's orientation
      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
    }
  });

  // useFrame(({ clock }) => {
  //   const mesh = islandRef.current;
  //   if (mesh) {
  //     // Find the object's bounding box
  //     const box = new Box3().setFromObject(mesh);

  //     // Calculate the center of the bounding box
  //     const center = new Vector3();
  //     box.getCenter(center);

  //     // Set the object's position to the center of its bounding box
  //     mesh.position.copy(center);

  //     // Invert the object's rotation to keep its orientation
  //     mesh.rotation.set(0, 0, 0);

  //     // Adjust the object's geometry to match the new pivot point
  //     mesh.geometry.applyMatrix4(
  //       new THREE.Matrix4().makeTranslation(-center.x, -center.y, -center.z)
  //     );

  //     // Rotate the object around its center
  //     mesh.rotation.x += 0.01 * clock.getDelta();
  //     mesh.rotation.y += 0.01 * clock.getDelta();
  //   }
  // });

  return (
    <a.group ref={islandRef}>
      <group scale={0.01}>
        <mesh
          geometry={nodes.boat_restaurant_tutto_0.geometry}
          material={materials.tutto}
        />
        <mesh
          geometry={nodes.boat_restaurant_rete1_0.geometry}
          material={materials.rete1}
        />
      </group>
    </a.group>
  );
};

export default Island;
