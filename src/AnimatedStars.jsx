import { Stars } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const AnimatedStars = () => {
    const starRef = useRef()

    useFrame(() => {
        starRef.current.rotation.x += 0.0001
        starRef.current.rotation.y += 0.0001
        starRef.current.rotation.z += 0.0001
    })
    return <Stars ref={starRef} />
}

export default AnimatedStars