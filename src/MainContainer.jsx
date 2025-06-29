import { useHelper } from "@react-three/drei"
import AnimatedStars from "./AnimatedStars"
import { OrbitControls } from "@react-three/drei"
import { useRef } from "react"
import Earth from "./Earth"
import * as THREE from 'three'

const MainContainer = () => {
    const directionalLightRef = useRef()
    const directionalLightRefTwo = useRef()
    useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1, 'hotpink')
    useHelper(directionalLightRefTwo, THREE.DirectionalLightHelper, 1, 'hotpink')
    return (
        <>
            <color attach='background' args={['black']} />
            <OrbitControls />
            <AnimatedStars />
            {/* <directionalLight
                ref={directionalLightRef}
                position={[0, 0, 10]}
                intensity={1}
                color={0xff0000}
            />
            <directionalLight ref={directionalLightRefTwo} position={[0, 0, -10]}/> */}
            <ambientLight />
            
            <Earth displacementScale={0.1}/>
        </>
    )
}

export default MainContainer