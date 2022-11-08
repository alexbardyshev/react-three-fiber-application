export default function Experience (  ) {
    return (
    <>
        <mesh rotation-y={ Math.PI * 0.23 } position-x={ 2 } scale={ 1.5 }>
            <boxGeometry />
            <meshBasicMaterial color='mediumpurple' wireframe />
        </mesh>
    </>
  )
}
