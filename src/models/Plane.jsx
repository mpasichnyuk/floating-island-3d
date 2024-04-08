import { useGLTF } from "@react-three/drei";
import planeModel from "../assets/3d/cartoon_plane.glb";

const Plane = (props) => {
  const { isRotating } = props;
  const { scene, animations } = useGLTF(planeModel);

  return (
      <mesh {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
