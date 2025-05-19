import { AmbientLight, DirectionalLight } from "three";

export const Lights = () => {
  return (
    <>
      <primitive object={new AmbientLight(0xffffff, 0.5)} data-oid="ssk_wu5" />
      <primitive
        object={new DirectionalLight(0xffffff, 1)}
        position={[10, 10, 5]}
        castShadow
        shadow-mapSize={[1024, 1024]}
        data-oid="9:ub:xl"
      />
    </>
  );
};
