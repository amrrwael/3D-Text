import { useMatcapTexture, Center, Text3D, OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";

export const Experience = () => {
  const [matcapTexture] = useMatcapTexture('5E5855_C6C4CD_C89B67_8F8E98', 256);

  if (!matcapTexture) return null;

  return (
    <>
      <OrbitControls makeDefault />
      <Perf position="top-left" />

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

      <mesh>
        <torusGeometry />
        <meshMatcapMaterial matcap={matcapTexture} />
      </mesh>
    </>
  );
};
