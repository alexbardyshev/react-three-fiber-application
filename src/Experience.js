import { useThree, extend, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import CustomObject from "./CustomObject.js";

extend({ OrbitControls });

export default function Experience (  ) {
    const { camera, gl } = useThree();
    const cubeRef = useRef();

    useFrame((state, delta) => {
        cubeRef.current.rotation.x += delta;
        cubeRef.current.rotation.y += delta;
    })

    return (
    <>
        <orbitControls args={[camera, gl.domElement]} />

        <directionalLight position={[1, 2, 3]} intensity={1} />
        <ambientLight intensity={0.2} />

        <group ref={ cubeRef }>
            <mesh rotation-y={ Math.PI * 0.23 } position-x={ 2 } scale={ 1.5 }>
                <boxGeometry scale={ 1.5 } />
                <meshStandardMaterial color='mediumpurple' />
            </mesh>

            <mesh position-x={ -2 } scale={ 1 }>
                <sphereGeometry />
                <meshStandardMaterial color='orange'/>
            </mesh>
        </group>

        <mesh position-y={ -2 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color='greenyellow' />
        </mesh>

        <CustomObject />
    </>
  )
}
