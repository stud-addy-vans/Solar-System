import { useLoader } from "@react-three/fiber";
import { TextureLoader, AdditiveBlending } from "three";
import { useRef } from "react";
import * as THREE from "three";

const Sun = () => {
  const texture = useLoader(TextureLoader, "/assets/textures/sun.jpg");
  const glowTexture = useLoader(TextureLoader, "/assets/textures/sun-glow.png"); // Add this glow texture

  const glowMaterial = new THREE.SpriteMaterial({
    map: glowTexture,
    color: 0xffaa33,
    transparent: true,
    blending: AdditiveBlending,
  });

  const spriteRef = useRef();

  return (
    <>
      {/* Actual Sun */}
      <mesh>
        <sphereGeometry args={[2.5, 64, 64]} />
        <meshStandardMaterial
          map={texture}
          emissive={"#ffaa00"}
          emissiveIntensity={1}
          emissiveMap={texture}
        />
      </mesh>

      {/* Sun Glow Sprite */}
      <sprite ref={spriteRef} material={glowMaterial} scale={[8, 8, 1]} />

      {/* Light Source */}
      <pointLight color={"#ffaa00"} intensity={5} distance={100} />
    </>
  );
};

export default Sun;
