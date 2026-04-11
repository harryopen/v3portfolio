import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Target(props) {
  const targetRef = useRef();

  const { scene } = useGLTF(
    "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
  );

  useGSAP(() => {
    if (!targetRef.current) return;

    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
      <primitive object={scene} />
    </mesh>
  );
}

export default Target;
