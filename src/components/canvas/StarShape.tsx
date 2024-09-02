import { PointMaterial, Points } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import image from './image.png';
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

//TODO: Needs to be exported?
function convertImageToVertices(imageSrc: string, threshold = 128) {
  return new Promise<Float32Array>((resolve) => {
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, img.width, img.height);
      const data = imageData.data;

      const vertices = [];
      for (let y = 0; y < img.height; y++) {
        for (let x = 0; x < img.width; x++) {
          const index = (y * img.width + x) * 4;
          const alpha = data[index + 3]; // Alpha value

          if (alpha > threshold) {
            const xPos = x / img.width - 0.5; // Normalize to -0.5 to 0.5 range
            const yPos = y / img.height - 0.5; // Normalize to -0.5 to 0.5 range
            vertices.push(xPos, -yPos, 0); // Add vertex at z = 0
          }
        }
      }
      resolve(new Float32Array(vertices));
    };
  });
}

export function StarShape(props: {}) {
  const size = 0.004; //TODO: Do we need to pass this in?

  const shapeRef = useRef<THREE.Points>();

  const materialRef = useRef<THREE.PointsMaterial>();

  const [points, setPoints] = useState<Float32Array>();

  useEffect(() => {
    const loadImage = async () => {
      //TODO: Pass in image into component
      convertImageToVertices(image.src).then((vertices) => {
        setPoints(vertices);
      });
    };
    loadImage();
  }, []);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    const twinkleFactor = size + 0.001 * Math.sin(time * 2); // Adjust amplitude and frequency here

    shapeRef.current.rotation.x = Math.sin(time) / 3;
    shapeRef.current.rotation.y = Math.sin(time * 0.5) / 10;
    shapeRef.current.rotation.z = Math.sin(time) / 10;

    materialRef.current.size = twinkleFactor;
  });

  return (
    //TODO: Pass in position.
    <group position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <Points ref={shapeRef} positions={points} stride={3} frustumCulled>
        <PointMaterial
          ref={materialRef}
          transparent
          color='#f272c8'
          size={size}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}
