'use client';

import { Space } from '@/components/canvas/space';
import { View } from '@/components/canvas/View';
import { AboutPanel } from '@/components/panel/about/panel';
import { ExperiencePanel } from '@/components/panel/experience/panel';
import { ProjectsPanel } from '@/components/panel/projects/panel';
import { CameraMovementContextProvider } from '@/components/provider/camera';
import { Html, Hud } from '@react-three/drei';
import { Suspense, useState } from 'react';

export default function Page() {
  const [showAbout, setShowAbout] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  return (
    <div className='w-full flex h-full bg-black overflow-hidden'>
      <View className='h-full w-full overflow-hidden'>
        <CameraMovementContextProvider>
          <Suspense
            fallback={
              <Html fullscreen>
                <div className='flex h-full w-full flex-col items-center justify-center text-textprimary bg-black'>
                  loading...
                </div>
              </Html>
            }
          >
            <Space
              onClickAbout={() => setShowAbout(true)}
              onClickExperience={() => setShowExperience(true)}
              onClickProjects={() => setShowProjects(true)}
            />
          </Suspense>
          <Hud>
            {showAbout && <AboutPanel onClose={() => setShowAbout(false)} />}
            {showExperience && <ExperiencePanel onClose={() => setShowExperience(false)} />}
            {showProjects && <ProjectsPanel onClose={() => setShowProjects(false)} />}
          </Hud>
        </CameraMovementContextProvider>
      </View>
    </div>
  );
}
