import { calculateAspectRatio, PerspectiveCamera } from '@react-three/drei';
// import { HackerRoom } from "../components/HackerRoom"
import { Suspense } from 'react';
import { HackerRoom } from '../components/HackerRoom';
import CanvasLoader from '../components/CanvasLoader';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants';
import Target from '../components/Target';
import ReactLogo from '../components/ReactLogo';
import Cube from '../components/Cube';
import Rings from '../components/Rings';
import Button from '../components/Button';

function Hero() {
  // const x = useControls('HackerRoom',{
  //   // positionX:{
  //   //   value:2.5,
  //   //   min:-10,
  //   //   max:10,
  //   // },
  //   // positionY:{
  //   //   value:2.5,
  //   //   min:-10,
  //   //   max:10
  //   // },
  //   // positionZ:{
  //   //   value:2.5,
  //   //   min:-10,
  //   //   max:10
  //   // },
  //   // rotationX:{
  //   //   value:0,
  //   //   min:-10,
  //   //   max:10,
  //   // },
  //   // rotationY:{
  //   //   value:0,
  //   //   min:-10,
  //   //   max:10
  //   // },
  //   // rotationZ:{
  //   //   value:0,
  //   //   min:-10,
  //   //   max:10
  //   // },
  //   // scale:{
  //   //   value:1,
  //   //   min:0.1,
  //   //   max:10
  //   // }
  // })
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isTablet = useMediaQuery({ minWidth: 768, maxwidth: 1024 });
  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full   mx-auto flex flex-col sm:mt-36 c-space gap-3">
        <p className="  sm:text-3xl text-[15px] font-medium text-white text-center font-generalsans">
          Hi, I am Harry<span className="wavy-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          {' '}
          Building Full stack Apps,
        </p>
      </div>
      <div className="w-full h-full absolute inset-0">
        {/* <Leva/> */}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}></Suspense>
          <PerspectiveCamera makeDefault position={[0, 0, 20]} />
          <HackerRoom
            //  scale={0.05}
            position={sizes.deskPosition}
            rotation={[0, -Math.PI, 0]}
            scale={sizes.deskScale}
          />
          <group>
            <Target position={sizes.targetPosition} />
            <ReactLogo position={sizes.reactLogoPosition} />
            <Cube position={sizes.cubePosition} />
            <Rings position={sizes.ringPosition} />
          </group>
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 10]} intensity={0.5} />
        </Canvas>
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#contact" className="w-fit">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-90"
          />
        </a>
      </div>
    </section>
  );
}

export default Hero;
