import { useThree, extend, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

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
        <group ref={ cubeRef }>
            <mesh rotation-y={ Math.PI * 0.23 } position-x={ 2 } scale={ 1.5 }>
                <boxGeometry scale={ 1.5 } />
                <meshBasicMaterial color='mediumpurple' />
            </mesh>

            <mesh position-x={ -2 } scale={ 1 }>
                <sphereGeometry />
                <meshBasicMaterial color='orange'/>
            </mesh>
        </group>

        <mesh rotation-x={Math.PI / 2} position-y={ -2 } scale={ 10 }>
            <planeGeometry />
            <meshBasicMaterial color='greenyellow' wireframe />
        </mesh>
    </>
  )
}
