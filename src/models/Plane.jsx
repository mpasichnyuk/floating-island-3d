import { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import planeModel from "../assets/3d/cartoon_plane.glb";
import { useFrame } from "@react-three/fiber";
const Plane = (props) => {
  const { isRotating } = props;
  const planeRef = useRef();
  const { scene, animations } = useGLTF(planeModel);
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (isRotating) {
      actions["Main"].play();
    } else {
      actions["Main"].stop();
    }

    return () => {
      // second;
    };
  }, [actions, isRotating]);

  useFrame(({ clock, camera }) => {
    const elapsedTime = clock.getElapsedTime();
    const radius = 4; // Adjust this value to control the radius of the circular motion
    const speed = 0.2; // Adjust this value to control the speed of the circular motion

    // // Calculate the new position using polar coordinates
    // const angle = elapsedTime * speed + 3;
    // const x = Math.cos(angle) * radius;
    // const z = Math.sin(angle) * radius;

    // // Update the position and rotation of the plane
    // planeRef.current.position.x = x;
    // planeRef.current.position.z = z;

    // // Calculate the direction of movement
    // const dx = Math.cos(angle + Math.PI / 2);
    // const dz = Math.sin(angle + Math.PI / 2);

    // // Calculate the rotation needed to point the plane in the direction of movement
    // const rotationY = Math.atan2(dz, dx);

    // planeRef.current.rotation.y = rotationY;

    // // Optionally, you can add a small oscillation to the y position
    // planeRef.current.position.y = Math.sin(elapsedTime * 2) * 0.2;
  });

  return (
    <mesh {...props} ref={planeRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
