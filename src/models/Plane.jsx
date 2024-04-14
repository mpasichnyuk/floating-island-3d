import { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import planeModel from "../assets/3d/cartoon_plane.glb";
import { useFrame } from "@react-three/fiber";
const FLYING_ROTATION = [1, 1.3, 0.4];
const DEFAULT_ROTATION = [0, 1.3, 0.4];

const Plane = (props) => {
  const { isRotating } = props;
  const planeRef = useRef();
  const { scene, animations } = useGLTF(planeModel);
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    actions["Main"].play();
    // if (isRotating) {
    //   actions["Main"].play();
    // } else {
    //   actions["Main"].stop();
    // }

    return () => {
      // second;
    };
  }, [actions, isRotating]);

  // this useFrame makes it slowly float up and down
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    const amplitude = 0.02;
    const frequency = 1.5;

    // Calculate the new vertical position using a sine wave
    const verticalPosition = Math.sin(elapsedTime * frequency) * amplitude;
    planeRef.current.position.y = verticalPosition;
  });

  // Update the rotation in each frame
  // useFrame(() => {
  //   if (isRotating) {
  //     // Rotate towards the target rotation
  //     planeRef.current.rotation.set(
  //       ...planeRef.current.rotation.lerp(FLYING_ROTATION, 0.1)
  //     );
  //   } else {
  //     // Rotate back to the default rotation
  //     planeRef.current.rotation.set(
  //       ...planeRef.current.rotation.lerp(DEFAULT_ROTATION, 0.1)
  //     );
  //   }
  // });

  return (
    <mesh {...props} ref={planeRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
