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
    points: ['Very good person', 'Did lots of spearheading', 'moe odeh moe odhe modeh dehsfhuijsiufdshiufedshuihu'],
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
