import { AmbientLight, DirectionalLight } from "three";

export const Lights = () => {
  return (
    <>
      <primitive object={new AmbientLight(0xffffff, 0.5)} />
      <primitive
        object={new DirectionalLight(0xffffff, 1)}
        position={[10, 10, 5]}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
    </>
  );
};
