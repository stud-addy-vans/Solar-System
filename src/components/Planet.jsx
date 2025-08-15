import { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

const Planet = ({ name, texture, radius, distance, orbitalPeriod }) => {
  const planetRef = useRef();
  const ringRef = useRef();
  const { camera } = useThree();

  const map = useTexture(texture);
  const ringMap = useTexture("/assets/textures/saturn-ring.png");

  const [hovered, setHovered] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const clickedPositionRef = useRef(null);
  const defaultCamPos = useRef(camera.position.clone());

  useFrame(() => {
    const time = Date.now();
    const angle =
      ((time / 1000) % orbitalPeriod) * ((2 * Math.PI) / orbitalPeriod);

    const x = Math.cos(angle) * distance;
    const z = Math.sin(angle) * distance;

    planetRef.current.position.set(x, 0, z);
    planetRef.current.rotation.y += 0.01;

    if (ringRef.current) {
      ringRef.current.position.set(x, 0, z);
    }

    if (clickedPositionRef.current) {
      const target = clickedPositionRef.current.clone();
      const desiredCamPos = target.clone().add(new THREE.Vector3(4, 2, 4));
      camera.position.lerp(desiredCamPos, 0.05);
      camera.lookAt(target);
    }
  });

  const handleClick = () => {
    if (isZoomed) {
      // Reset to default view
      clickedPositionRef.current = null;
      camera.position.copy(defaultCamPos.current);
      camera.lookAt(0, 0, 0);
      setIsZoomed(false);
    } else {
      // Zoom in on the planet
      clickedPositionRef.current = planetRef.current.position.clone();
      setIsZoomed(true);
    }
  };

  return (
    <>
      <mesh
        ref={planetRef}
        onClick={handleClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[radius, 32, 32]} />
        <meshStandardMaterial
          map={map}
          emissive={hovered ? "yellow" : "black"}
          emissiveIntensity={hovered ? 0.5 : 0}
          toneMapped={false}
        />
      </mesh>

      {name === "Saturn" && (
        <mesh ref={ringRef} rotation={[1.6, 0, 0.5]}>
          <ringGeometry args={[radius * 1.3, radius * 2.4, 128]} />
          <meshPhongMaterial
            map={ringMap}
            transparent
            side={THREE.DoubleSide}
            depthWrite={false}
            opacity={0.85}
          />
        </mesh>
      )}
    </>
  );
};

export default Planet;
