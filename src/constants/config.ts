type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: 'Subham Kawdal — Portfolio',
    fullName: 'Subham Kawdal',
    email: 'subhamkawdal7777@gmail.com',
  },
  hero: {
    name: 'Subham Kawdal',
    p: ['Turning coffee into code,', 'I build digital dreams from front to back! ☕💻'],
  },
  contact: {
    p: 'Get in touch',
    h2: 'Contact.',
    form: {
      name: {
        span: 'Your Name',
        placeholder: "What's your name?",
      },
      email: { span: 'Your Email', placeholder: "What's your email?" },
      message: {
        span: 'Your Message',
        placeholder: 'What do you want to say?',
      },
    },
  },
  sections: {
    about: {
      p: 'Introduction',
      h2: 'Overview.',
      content: `I'm a skilled full stack developer with startup experience🚀🦾, adept in both frontend and backend technologies. My toolkit includes Java, Spring Boot, JavaScript, React, Node.js, MongoDB, SQL databases, and PostgreSQL 🏈. I'm a quick learner and thrive on collaborating with clients to craft efficient, scalable, and user-friendly solutions that tackle real-world problems. Let's turn your ideas into reality!🎯`,
    },
    experience: {
      p: "The Road I've Travelled",
      h2: 'Journey so far.⛵',
    },
    feedbacks: {
      p: 'Check Github for more Projects.🔧',
      h2: 'Subham-kawdal-Github↗️',
    },
    works: {
      p: 'My work',
      h2: 'Projects.🧩💻📱',
      content: `Following projects showcases my skills and experience through
    real-world examples of my work.`,
    },
  },
};
