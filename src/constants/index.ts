import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from '../types';

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  dit,
  shopify,
  carrent,
  blogapp,
  newssite,
  ecommerce,
  jobit,
  tripguide,
  lifafa,
  threejs,
} from '../assets';

export const navLinks: TNavLink[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services: TService[] = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Full Stack Developer',
    icon: mobile,
  },
  {
    title: 'React Developer',
    icon: backend,
  },
  {
    title: 'Tech Enthusiast',
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  // {
  //   name: 'TypeScript',
  //   icon: typescript,
  // },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: 'Full Stack Developer',
    companyName: 'Lifafa Tech Services',
    icon: lifafa,
    iconBg: '#383E56',
    date: 'January 2023 - December 2023',
    points: [
      'Worked at Lifafa Tech Services Pvt Ltd for one year as a Full Stack Developer.',
      'Utilized Java with Spring Boot for backend development and React for frontend.',
      'Employed Docker, Bitbucket, and Graylog to enhance development processes.',
      'Leveraged Slack for efficient team communication and collaboration.',
      'Developed scalable solutions, gaining expertise in various modern tools and technologies.',
    ],
  },
  {
    title: 'B-Tech Computer Science and Engineering',
    companyName: 'Dit',
    icon: dit,
    iconBg: '#E6DEDD',
    date: 'July 2019 - June 2023',
    points: [
      'BTech in Computer Science and Engineering from DIT University, Dehra Dun.',
      'Gained comprehensive knowledge in programming languages, software development, and computer systems.',
      'Engaged in various projects and internships, enhancing practical skills and real-world problem-solving abilities.',
    ],
  },
  // {
  //   title: 'Web Developer',
  //   companyName: 'Shopify',
  //   icon: shopify,
  //   iconBg: '#383E56',
  //   date: 'Jan 2022 - Jan 2023',
  //   points: [
  //     'Developing and maintaining web applications using React.js and other related technologies.',
  //     'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
  //     'Implementing responsive design and ensuring cross-browser compatibility.',
  //     'Participating in code reviews and providing constructive feedback to other developers.',
  //   ],
  // },
  // {
  //   title: 'Full stack Developer',
  //   companyName: 'Meta',
  //   icon: meta,
  //   iconBg: '#E6DEDD',
  //   date: 'Jan 2023 - Present',
  //   points: [
  //     'Developing and maintaining web applications using React.js and other related technologies.',
  //     'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
  //     'Implementing responsive design and ensuring cross-browser compatibility.',
  //     'Participating in code reviews and providing constructive feedback to other developers.',
  //   ],
  // },
];

const testimonials: TTestimonial[] = [];

const projects: TProject[] = [
  {
    name: 'ECommerce Site',
    description:
      'I developed a full-featured ecommerce website using React, Redux, Node.js, Express, MongoDB, Cloudinary, and Render. It includes user authentication, product search, and secure payment integration, ensuring a seamless user experience.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'node',
        color: 'pink-text-gradient',
      },
    ],
    image: ecommerce,
    sourceCodeLink: 'https://github.com/Subham-Kawdal-Github/Ecommerce-website/tree/master',
    websiteLink: 'https://ecommerce-website-1-5tau.onrender.com/auth/login',
  },
  {
    name: 'Blog app',
    description:
      'I developed a blog app using React, Redux, and Vercel. It features user authentication, CRUD operations, and efficient media handling, ensuring a seamless and engaging user experience.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: blogapp,
    sourceCodeLink: 'https://github.com/Subham-Kawdal-Github/react-appwrite-blog',
    websiteLink: 'https://react-appwrite-blog-subham-kawdals-projects.vercel.app/',
  },
  {
    name: 'News Site',
    description:
      'Built a dynamic news hub with JavaScript, Node.js, Express, and MongoDB. Includes secure user sign-in, sleek article management, and a responsive design, turning headlines into an engaging digital experience. 📰✨',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: newssite,
    sourceCodeLink: 'https://subham-kawdal-github.github.io/News-Site-Snapshots/',
    websiteLink: '',
  },
];

export { services, technologies, experiences, testimonials, projects };
