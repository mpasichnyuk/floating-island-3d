import { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import planeModel from "../assets/3d/cartoon_plane.glb";
import { act } from "react-dom/test-utils";

const Plane = (props) => {
  const { isRotating } = props;
  console.log('isRotating: ', isRotating);
  const ref = useRef();
  const { scene, animations } = useGLTF(planeModel);
  console.log("animations: ", animations);
  console.log("scene: ", scene);
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
