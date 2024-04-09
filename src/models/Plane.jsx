import { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import planeModel from "../assets/3d/cartoon_plane.glb";

const Plane = (props) => {
  const { isRotating } = props;
  const ref = useRef();
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

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
