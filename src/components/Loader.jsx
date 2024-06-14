import { Html } from "@react-three/drei";
import Spinner from "../assets/my-icons/gear-spinner.svg";

const Loader = () => {
  return (
    <Html center>
      <div
        className="flex justify-center items-center"
        style={{ width: "100px", height: "100px" }}
      >
        <img src={Spinner} alt="Loading..." />
      </div>
    </Html>
  );
};

export default Loader;
