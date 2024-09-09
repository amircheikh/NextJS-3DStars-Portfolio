import { StaticImageData } from 'next/image';
import nestLogo from './images/nest-logo.png';
import orandaLogo from './images/oranda-logo.png';

export interface IExperience {
  title: string;
  companyName: string;
  companyImage: StaticImageData;
  date: string;
  points: string[];
}

export const experienceData: IExperience[] = [
  {
    title: 'Fullstack Developer Intern',
    companyName: 'Nest Wallet',
    companyImage: nestLogo,
    date: 'Jan 2024 - Aug 2024',
    points: [
      'Developed fullstack features using React Native for the frontend and Go/GraphQL for the backend',
      'Enhanced user experience by adding animations and custom sound effects, gamifying key features',
      'Improved app performance and stability by identifying and resolving critical issues',
      'Created marketing videos for their Twitter, including 3D animations built with Blender',
      'Collaborated with a remote team across Canada and the U.S., communicating daily via Slack and in morning standups',
    ],
  },

  {
    title: 'Software Developer Intern',
    companyName: 'Oranda',
    companyImage: orandaLogo,
    date: 'Dec 2022 - Apr 2023',
    points: [
      'Developed backend of their AI NFT generator product',
      'Made the experience seamless with FastAPI',
      'Worked heavily with Stable Diffusion image generation',
      'Built the SQL database to store crucial data for the product',
      'Worked with Google Cloud Compute to store files and host database',
    ],
  },
];
