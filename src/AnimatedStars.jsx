import { Stars } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const AnimatedStars = () => {
  const starsRef = useRef();

  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.0002;
      starsRef.current.rotation.x += 0.00005;
    }
  });

  return (
    <Stars
      ref={starsRef}
      radius={100}        // How far the stars spread
      depth={50}          // Star depth
      count={10000}       // How many stars
      factor={4}          // Star size factor
      saturation={0}
      fade
      speed={1}
    />
  );
};

export default AnimatedStars;
