import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import SolarSystem from "./scenes/solar/SolarSystem";
import { Suspense } from "react";

const MainContainer = ({ realistic }) => {
  return (
    <Canvas camera={{ position: [0, 20, 80], fov: 65 }}>
      <color attach="background" args={["black"]} />
      <ambientLight intensity={1.5} />
      <pointLight position={[0, 0, 0]} intensity={2} />
      <Stars radius={100} depth={50} count={5000} factor={4} fade />
      <Suspense fallback={null}>
        <SolarSystem realistic={realistic} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default MainContainer;
