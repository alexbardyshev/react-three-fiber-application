export default function Experience (  ) {
    return (
    <>
        <mesh rotation-y={ Math.PI * 0.23 } position-x={ 2 } scale={ 1.5 }>
            <boxGeometry scale={ 1.5 } />
            <meshBasicMaterial color='mediumpurple' />
        </mesh>
        <mesh position-x={ -2 } scale={ 1 }>
            <sphereGeometry />
            <meshBasicMaterial color='orange'/>
        </mesh>
        <mesh rotation-x={Math.PI / 2} position-y={ -2 } scale={ 10 }>
            <planeGeometry />
            <meshBasicMaterial color='greenyellow' wireframe />
        </mesh>
    </>
  )
}
