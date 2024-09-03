import { StarShape } from '@/components/canvas/StarShape';
import { PerspectiveCamera } from '@react-three/drei';
import { Suspense, useMemo, useRef, useState } from 'react';

import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Euler, MathUtils, Vector3 } from 'three';
import image1 from './star-image-templates/image-1.png';
import image2 from './star-image-templates/image-2.png';
import image3 from './star-image-templates/image-3.png';
import image4 from './star-image-templates/image-4.png';

export function Space() {
  const cameraRef = useRef<THREE.PerspectiveCamera>();

  const cameraDefaultPos = useMemo(() => new Vector3(0, 0, 4), []); //TODO: If you don't provide position passing into Camera, it creates a cool effect. Use this if you want!
  const cameraDefaultRotation = useMemo(() => new Euler(0, 0, 0), []);
  const cameraDefaultSpeed = useMemo(() => 0.05, []);

  const [targetPosition, setTargetPosition] = useState(cameraDefaultPos);
  const [targetRotation, setTargetRotation] = useState(cameraDefaultRotation);

  const [cameraSpeed, setCameraSpeed] = useState(cameraDefaultSpeed);

  useFrame(() => {
    if (!cameraRef.current) return;
    cameraRef.current.position.lerp(targetPosition, cameraSpeed);
    cameraRef.current.rotation.z = MathUtils.lerp(cameraRef.current.rotation.z, targetRotation.z, cameraSpeed);
  });

  const handleZoomCamera = (to: Vector3) => {
    const finalPos = new Vector3(to.x, to.y, to.z + 3);

    setCameraSpeed(0.02);
    setTargetRotation(new Euler(0, 0, -0.2));
    setTargetPosition(new Vector3(0, 0, 8));

    setTimeout(() => {
      setCameraSpeed(cameraDefaultSpeed);
      setTargetPosition(finalPos);
      setTargetRotation(cameraDefaultRotation);
    }, 150);
  };

  const handleResetCamera = () => {
    setCameraSpeed(cameraDefaultSpeed);
    setTargetPosition(cameraDefaultPos);
    setTargetRotation(cameraDefaultRotation);
  };

  return (
    <Suspense fallback={null}>
      {/* TODO: Loading state */}
      <PerspectiveCamera ref={cameraRef} makeDefault position={cameraDefaultPos} rotation={cameraDefaultRotation} />
      <StarShape image={image1} position={[-3, 0, -1]} text='About' onClick={handleZoomCamera} />
      <StarShape image={image2} position={[0, 1, -1]} text='Experience' onClick={handleZoomCamera} />
      <StarShape image={image3} position={[3, 0, -1]} text='Projects' onClick={handleZoomCamera} />
      <StarShape image={image4} position={[0, -1.5, -1]} text='Resume' onClick={handleZoomCamera} />

      <ambientLight />
    </Suspense>
  );
}
