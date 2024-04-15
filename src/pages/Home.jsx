/* eslint-disable react/no-unknown-property */
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";

import Loader from "../components/Loader";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import HomeInfo from "../components/HomeInfo";
import CreditsTooltip from "../components/Credits";
import Hero from "../components/Hero";
import Hint from "../components/Hint";
// import { Stats, OrbitControls } from "@react-three/drei";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  console.log("currentStage: ", currentStage);
  const [showHint, setShowHint] = useState(true);

  const adjustIslandForScreenSize = () => {
    let screenScale = [0, 0, 0];
    let screenPosition = [1, 2, 0];
    let rotation = [0.2, 2, 0];

    // if (window.innerWidth < 768) {
    //   screenScale = [0.9, 0.9, 0.9];
    //   screenPosition = [-0.5, -0.5, 4.5];
    // } else {
    //   screenScale = [1, 1, 1];
    //   screenPosition = [-0.5, -0.5, 4.5];
    // }
    return [screenScale, screenPosition, rotation];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute bottom-[22%] left-0 right-0 z-10 flex items-center justify-center">
        <HomeInfo isVisible={currentStage} currentStage={currentStage} />
      </div>

      <div className="absolute left-0 right-0 top-[10%]  z-10 flex items-center justify-center">
        <Hint isVisible={showHint} />
      </div>

      {/* <div className=" absolute mt-10 ml-10 left-10 top-10  z-10 ">
        <Hero />
      </div> */}
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{
          near: 0.1,
          far: 1000,
        }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor={"#000000"}
            intensity={1}
          />
          <Sky isRotating={isRotating} />
          <Bird />
          <Plane
            isRotating={isRotating}
            position={[0, 0, 3.3]}
            // position={[0, 0, 3]}
            // rotation={[0, 2.5, 0]}
            rotation={[0, 1.3, 0.4]}
            scale={[0.3, 0.3, 0.3]}
          />
          <Island
            setShowHint={setShowHint}
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            currentStage={currentStage}
            setCurrentStage={setCurrentStage}
          />
        </Suspense>
        {/* <OrbitControls />
        <Stats /> */}
      </Canvas>
      <CreditsTooltip />
    </section>
  );
};

export default Home;
