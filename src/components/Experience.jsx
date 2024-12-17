import { useMatcapTexture, Center, Text3D, OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useRef, useEffect } from "react"
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'


const torusGeometry = new THREE.TorusGeometry
const material = new THREE.MeshMatcapMaterial

export const Experience = () => {


  const donutsGroup = useRef()

  const [matcapTexture] = useMatcapTexture('5E5855_C6C4CD_C89B67_8F8E98', 256);

  useEffect(() =>
  {
    matcapTexture.encoding = THREE.sRGBEncoding
    matcapTexture.needsUpdate = true

    material.matcap = matcapTexture
    material.needsUpdate = true
  }, [])

  useFrame((state, delta) => {
    for(const donut of donutsGroup.current.children)
    {
      donut.rotation.y += delta * 0.2
    }
  })

  return (
    <>
      <OrbitControls makeDefault />
      <Perf position="top-left" />

      {/* <torusGeometry ref={setTorusGeometry}/>
      <meshMatcapMaterial ref={SetMaterial} matcap={matcapTexture} /> */}

      
      <Center>
        <Text3D
        material={ material }
          font={"./fonts/Merriweather_Sans_Italic.json"}
          size={0.75}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          Hello World
        </Text3D>
      </Center>

  <group ref={ donutsGroup }>
    {[...Array(100)].map((value, index) => 
    <mesh
        key={index}
        geometry={torusGeometry}
        material={ material }
        position={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
        ]}
        scale={ 0.2 + Math.random() * 0.2}
        rotation={[
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            0
        ]}
        />
    
    )}
      </group>
    </>
  );
};
