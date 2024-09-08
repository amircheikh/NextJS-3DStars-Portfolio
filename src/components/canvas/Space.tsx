import { PerspectiveCamera } from '@react-three/drei';
import { useEffect, useRef } from 'react';

import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { MathUtils, Vector3 } from 'three';
import useSound from 'use-sound';
import ambience from '../../sounds/ambience.mp3';
import { useCameraMovement } from '../provider/camera';
import { FaceSquare } from './face';
import { StarBackground } from './star-background';
import image1 from './star-image-templates/image-1.png';
import image2 from './star-image-templates/image-2.png';
import image3 from './star-image-templates/image-3.png';
import image4 from './star-image-templates/image-4.png';

import { StarShape } from './star-shape';

interface SpaceProps {
  onClickAbout: VoidFunction;
  onClickExperience: VoidFunction;
  onClickProjects: VoidFunction;
}

export function Space(props: SpaceProps) {
  const { onClickAbout, onClickExperience, onClickProjects } = props;

  const [playAmbience, ambienceData] = useSound(ambience, { loop: true });

  const cameraRef = useRef<THREE.PerspectiveCamera>();

  const { cameraDefaultPos, cameraDefaultRotation, targetPosition, targetRotation, cameraSpeed, handleZoomCamera } =
    useCameraMovement();

  useFrame((_, delta) => {
    if (!cameraRef.current) return;
    cameraRef.current.position.lerp(targetPosition, cameraSpeed * delta);

    cameraRef.current.rotation.x = MathUtils.lerp(cameraRef.current.rotation.x, targetRotation.x, cameraSpeed * delta);
    cameraRef.current.rotation.y = MathUtils.lerp(cameraRef.current.rotation.y, targetRotation.y, cameraSpeed * delta);
    cameraRef.current.rotation.z = MathUtils.lerp(cameraRef.current.rotation.z, targetRotation.z, cameraSpeed * delta);
  });

  useEffect(() => {
    //We must check if ambienceData is defined before playing. This will check if audio has been loaded or not
    if (ambienceData) playAmbience();
  }, [ambienceData]);

  const handleClickAbout = (position: Vector3) => {
    handleZoomCamera(position);
    onClickAbout();
  };

  const handleClickProjects = (position: Vector3) => {
    handleZoomCamera(position);
    onClickProjects();
  };

  const handleClickExperience = (position: Vector3) => {
    handleZoomCamera(position);
    onClickExperience();
  };

  return (
    <group>
      <PerspectiveCamera ref={cameraRef} makeDefault position={cameraDefaultPos} rotation={cameraDefaultRotation} />
      <ambientLight intensity={0.5} />

      <StarBackground />
      <FaceSquare position={[0, 0, -2]} />
      <StarShape image={image1} position={[-3, 0, -1]} text='About' onClick={handleClickAbout} />
      <StarShape image={image2} position={[0, 1.5, -1]} text='Experience' onClick={handleClickExperience} />
      <StarShape image={image3} position={[3, 0, -1]} text='Projects' onClick={handleClickProjects} />
      <StarShape image={image4} position={[0, -1.5, -1]} text='Resume' onClick={handleZoomCamera} />
    </group>
  );
}
