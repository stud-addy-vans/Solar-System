import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const JupiterMoons = () => {
  const ioRef = useRef();
  const europaRef = useRef();
  const ganymedeRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // Io
    ioRef.current.position.x = Math.sin(t * 1.2) * 1.5 + 14;
    ioRef.current.position.z = Math.cos(t * 1.2) * 1.5;

    // Europa
    europaRef.current.position.x = Math.sin(t * 0.9) * 2 + 14;
    europaRef.current.position.z = Math.cos(t * 0.9) * 2;

    // Ganymede
    ganymedeRef.current.position.x = Math.sin(t * 0.6) * 2.5 + 14;
    ganymedeRef.current.position.z = Math.cos(t * 0.6) * 2.5;
  });

  return (
    <>
      <mesh ref={ioRef}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="gray" />
      </mesh>
      <mesh ref={europaRef}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial color="lightgray" />
      </mesh>
      <mesh ref={ganymedeRef}>
        <sphereGeometry args={[0.14, 16, 16]} />
        <meshStandardMaterial color="white" />
      </mesh>
    </>
  );
};

export default JupiterMoons;
