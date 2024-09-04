import { BaseButton } from '@/components/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { Panel } from '..';
import { IProject, projectsData } from './data';

export function ProjectsPanel(props: { onClose: VoidFunction }) {
  const { onClose } = props;
  return (
    <Panel title='Projects' onClose={onClose}>
      <div className='w-[85vw] md:w-[40vw] flex flex-col px-2 py-2 space-y-7 overflow-y-scroll scrollbar-hide'>
        {projectsData.map((project) => (
          <Project project={project} />
        ))}
      </div>
    </Panel>
  );
}

function Project(props: { project: IProject }) {
  const { name, description, images, links } = props.project;

  return (
    <div className='w-full flex flex-col bg-panel/20 px-3 py-3 rounded-2xl'>
      <Image className='rounded-2xl' src={images[0] /*TEMP ARRAY UNITL CAROUSEL*/} alt={''} />

      <div className='flex flex-row space-x-6 mt-6'>
        {links.map((link) => (
          <BaseButton onClick={() => window.open(link.url, '_blank', 'noopener,noreferrer')}>
            <FontAwesomeIcon href={link.url} icon={link.icon} size='2x' color='white' />
          </BaseButton>
        ))}
      </div>
      <div className='mt-4 text-textprimary text-3xl font-bold'>{name}</div>
      <div className='mt-2 text-panel text-xl  font-semibold'>{description}</div>
    </div>
  );
}