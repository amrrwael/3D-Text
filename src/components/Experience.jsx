import { useMatcapTexture, Center, Text3D, OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useState } from "react";

export const Experience = () => {


  const [ torusGeometry, setTorusGeometry] = useState()
  const [matcapTexture] = useMatcapTexture('5E5855_C6C4CD_C89B67_8F8E98', 256);


  return (
    <>
      <OrbitControls makeDefault />
      <Perf position="top-left" />

      <torusGeometry ref={setTorusGeometry}/>
      
      <Center>
        <Text3D
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
          This is
          <meshMatcapMaterial matcap={matcapTexture} />
        </Text3D>
      </Center>

    {[...Array(100)].map((value, index) => 
    <mesh
        key={index}
        geometry={torusGeometry}
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
        >
        <meshMatcapMaterial matcap={matcapTexture} />
    </mesh>
    )}
      
    </>
  );
};
