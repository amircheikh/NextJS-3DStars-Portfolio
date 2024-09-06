import { ILinkWithIcon } from '@/types';
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

export interface IAbout {
  name: string;
  links: ILinkWithIcon[];
  description: string;
}

export const aboutData: IAbout = {
  name: 'Amir Cheikh',
  links: [
    { icon: faGithub, url: 'https://github.com/amircheikh' },
    { icon: faLinkedin, url: 'https://www.linkedin.com/in/amircheikh/' },
    { icon: faYoutube, url: 'https://www.youtube.com/channel/UCa7KC1wRWu-IS4OblRrBMVg' },
  ],
  description: `Hi, I'm Amir—a computer science student passionate about crafting unique experiences for like-minded individuals. I built this website entirely from scratch and made it available as a template for anyone looking to create their own web portfolio. I'm always on the lookout for new opportunities to learn, grow, and create experiences that leave a lasting impression. Feel free to explore my site and see what catches your eye! Don't hesitate to reach out through LinkedIn if you'd like to connect.`,
};
