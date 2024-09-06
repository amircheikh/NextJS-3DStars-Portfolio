import Image from 'next/image';
import { Panel } from '..';
import { experienceData, IExperience } from './data';

export function ExperiencePanel(props: { onClose: VoidFunction }) {
  const { onClose } = props;
  return (
    <Panel title='Experience' onClose={onClose}>
      <div className='w-[85vw] md:w-[30vw] flex flex-col px-2 py-2 space-y-7 overflow-y-scroll scrollbar-hide'>
        {experienceData.map((project) => (
          <Experience project={project} />
        ))}
      </div>
    </Panel>
  );
}

function Experience(props: { project: IExperience }) {
  const { title, companyName, companyImage, date, points } = props.project;

  return (
    <div className='w-full flex flex-col bg-panel/20 px-3 py-3 rounded-2xl'>
      <div className='flex flex-row space-x-4 justify-center items-center'>
        <Image className='rounded-2xl' height={64} src={companyImage} alt={''} />
        <div className='text-textprimary text-3xl font-bold'>{companyName}</div>
      </div>

      <div className='text-2xl md:text-3xl mt-6 text-textprimary font-bold'>{title}</div>
      <div className='mt-0.5 text-textsecondary text-lg  font-semibold'>{date}</div>

      <div className='flex flex-col mt-3 space-y-2'>
        {points.map((point) => (
          <div className='flex flex-row space-x-3 items-center'>
            <div className='rounded-full h-2 w-2 bg-panel' />
            <div className='text-panel font-semibold text-lg'>{point}</div>
          </div>
        ))}
      </div>
    </div>
  );
}