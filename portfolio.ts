import emoji from 'react-easy-emoji';
import Feedbacks from './containers/Feedbacks';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Ali Ramazani',
  title: "Hi all, I'm Ali",
  description:
    "I'm an aspiring full-stack developer currently studying Computer Science at Berea College. I enjoy building dynamic, creative projects. My ambition encompasses forging great user experiences with focus on user-centered design",
  resumeLink:
    'https://docs.google.com/document/d/1_4RIfbyt4FFHW_bNplnoINQr01neTu7XDeeUlT_2O_k/edit?usp=sharing',
};

export const openSource = {
  githubUserName: 'ramazanima',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://1hanzla100.github.io/',
  linkedin: 'https://www.linkedin.com/in/ramazanima/',
  github: 'https://github.com/ramazanima',
  instagram: 'https://www.instagram.com/ramazani.ila',
};

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Berea College',
    subHeader: 'Bachelor of Arts  in Computer Science',
    duration: 'August 2022 - May 2026',
    desc: '• Software Design & Implementation • Data Structures & Algorithms • Intro to Autonomous Systems • Human-Centered Computing • Web Development • Calculus I • Discrete Mathematics',
    grade: 'GPA 3.7',
    // descBullets: [
    //   'Got onto Dean List',
    //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    // ],
  },
];

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle:
    'PASSIONATE FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassName: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassName: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassName: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          fontAwesomeClassName: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          fontAwesomeClassName: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Python',
          fontAwesomeClassName: 'logos:python',
        },
        {
          skillName: 'Django',
          fontAwesomeClassName: 'vscode-icons:file-type-django',
        },

        {
          skillName: 'Redux',
          fontAwesomeClassName: 'logos:redux',
        },
        {
          skillName: 'NPM',
          fontAwesomeClassName: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          fontAwesomeClassName: 'logos:yarn',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        // emoji(
        //   '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        // ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          fontAwesomeClassName: 'logos:aws',
        },
        {
          skillName: 'Azure',
          fontAwesomeClassName: 'logos:microsoft-azure',
        },
        // {
        //   skillName: 'Heroku',
        //   fontAwesomeClassName: 'logos:heroku-icon',
        // },
        // {
        //   skillName: 'PostgreSQL',
        //   fontAwesomeClassName: 'logos:postgresql',
        // },
        {
          skillName: 'Github',
          fontAwesomeClassName: 'akar-icons:github-fill',
        },
        // {
        //   skillName: 'Docker',
        //   fontAwesomeClassName: 'logos:docker-icon',
        // },
        // {
        //   skillName: 'Github Actions',
        //   fontAwesomeClassName: 'logos:github-actions',
        // },
        // {
        //   skillName: 'Cloudinary',
        //   fontAwesomeClassName: 'logos:cloudinary',
        // },
        // {
        //   skillName: 'Nginx',
        //   fontAwesomeClassName: 'logos:nginx',
        // },
        // {
        //   skillName: 'Sentry',
        //   fontAwesomeClassName: 'logos:sentry-icon',
        // },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '70',
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Undergraduate Teaching Assistant',
    company: 'Berea College',
    companyLogo:
      'https://kycompact.org/wp-content/uploads/sites/53/2017/09/berea-college-logo-1024x984.png',
    date: 'August 2023 – December 2023',
    desc: 'I will be serving as a TA for 226 (Software Design and Implementation).',
  },
  {
    role: 'Undergraduate Robotics Machine Learning Research Intern',
    company: 'Purdue University',
    companyLogo:
      'https://logowik.com/content/uploads/images/purdue-university4128.logowik.com.webp',
    date: 'Apr 2022 – Jun 2022',
    desc: 'I worked as frontend web developer to design web based admin dashboards for mulitple apps using Django, Bootstrap, jQuery, Chart.js and some other libraries.',
  },
  {
    role: 'Teaching Assistant',
    company: 'Berea College',
    companyLogo:
      'https://kycompact.org/wp-content/uploads/sites/53/2017/09/berea-college-logo-1024x984.png',
    date: 'August 2022 – December 2022',
    desc: 'I worked as a Teaching Assistant for class 265 (Electricity and Electronics). I helped students gain a deeper understanding of topics intorduced in lecture, admnistered and graded daily quizzes and proctored Midterms.',
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  // {
  //   role: 'Full Stack Developer',
  //   company: 'Bleed-AI',
  //   companyLogo: '/img/icons/common/bleedAI.jpg',
  //   date: 'Sept 2021 - Oct 2021',
  //   desc: 'Worked as django web developer to create a website in which I integrated computer vision AI model (built by the team of BleedAI) to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.',
  // },
  {
    role: 'Software Engineering Intern',
    company: 'Center of Business Administration',
    companyLogo:
      'data:image/jpeg;base64,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W37c17bTdeZ9H6v4PDTNMTo2RxguNw6mkYQTJGRv2XFtnrVoijIRf4up5bf3cR82jkskri8NMclTO923bkkp+DGznutfTaL1MRpiYYpxTxSse17gAS6QkEXafAV0BE7uIWMqJW1f992Ss2F1jq0T/u2iMTcHICczmvbZkb222hru+vdZOjmG1EUs0s+Rpl4PvWG7XuaCHS2sLF2zZ0KhRTkmN1pOOTm0W68yGptFqmMufnzPmiq2TBzrhvCElhZs8Jy3uv1TaNVJa0yhgdw1LmaHE5WQsLCcxG0m+5W6KO7RkeMqvZ9vO/t9jn1PofPHCY2htzTvZ8a/fGcP/DKAv1iOiE8lQ6cBmb4cyVpvvjAAdfZvuBsV+ijuolvj613K+m/rb2IurwGrNO+FrY3CWapcQ51i3hH3jka4De3fZbiPDpRVRykhzWUTonOvtc8uYb2+wreIrZKMLryatm1+pAwaK1EcD4WBrfhFPEyaxHx2yd8d3hjJ/wDdqzYtHJo4zC12dgroZoy5wLi0Frnk2G++b9FYoo7tGWWMqSve20ksQwSodO+eMMJFRTyxtLsucRRlpaSAbG5WAdEpvg8UYI4SOGpJId8WWRzHsym267d6vER00yI4urFK37ZWNdgFI6CkhhfbPHExrrbRcAA2XhbJFdZlY88pNtvaeUREKhERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREB//Z',
    date: 'December 2021 - January 2022',
    desc: 'Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.',
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Daily Journal',
    desc: 'Daily Journal is a dynamic blogging platform powered by Node.js and Express. It incorporates EJS templating for flexible and intuitive content rendering, while leveraging the robustness of MongoDB and Mongoose for seamless data storage and retrieval.',
    github: 'https://github.com/ramazanima/daily_journal',
  },
  {
    name: 'Lab Assistant',
    desc: 'Lab Assistant is a Python and SQLite desktop application for electronics students at Berea College, enabling efficient tool localization, visual assistance, and seamless lab management. .',
    github: 'https://github.com/ramazanima/Lab_Assistant22',
  },
  {
    name: 'Fashionify',
    desc: 'Utilizing Machine Learning techniques, this program effectively classifies clothing articles based on the Fashion MNIST dataset, enabling automated and accurate organization of fashion items for enhanced decision-making and personalized style',
    github: 'https://github.com/ramazanima/classify_clothing_articles',
  },
  {
    name: 'Mangata-Gallo',
    desc: "Mangata-Gallo is a captivating fiction jewelry store front-end project designed for Meta's HTML and CSS in Depth Course in the Meta's Front End Professional Certificate series. It utilizes color theory and visual effects for engaging themes. The animated promotional banner captures user attention, revealing daily offers upon article hover.",
    github: 'https://github.com/ramazanima/Mangata-Gallo',
  },
  {
    name: 'To-Do-List',
    desc: 'This is a todolist web application created using Node.js, Express, and MongoDB.',
    github: 'https://github.com/ramazanima/ToDoList',
  },
  {
    name: 'BitsBitsGo',
    desc: 'BitsBitsGo is a Newsletter application utilizing MailChimp API to seamlessly set up signup feature. Users provide their first name, last name, and email to subscribe. The application handles subscriptions through MailChimp. Success and failure pages dynamically load based on signup outcome..',
    github: 'https://github.com/ramazanima/BitsBitsGo',
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'Zaki Ayoubi',
    feedback:
      'Ali is a driven and passionate computer science student who possesses a deep interest in artificial intelligence and robotics. Ali is a dedicated learner who consistently demonstrates a thirst for knowledge and an eagerness to explore new technologies and programming concepts. His passion for the field is evident in his impressive academic record and his participation in various extracurricular activities related to computer science. With his determination and enthusiasm, I am confident that Ali will excel in any future endeavors and make valuable contributions to the field of computer science.',
  },
  {
    name: 'Bishal Timalsina',
    feedback:
      'Ali and I have worked on several group projects. He consistently delivers clean, high-quality code, excels in problem-solving, and actively supports the team. His analytical thinking, attention to detail, and time management skills make him a valuable asset.',
  },
];

// export const feedbacks: FeedbackType[] = [
//   {
//     name: 'John Smith',
//     feedback:
//       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
//   },
//   {
//     name: 'John Smith',
//     feedback:
//       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
//   },
// ];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Ali Ramazani',
  description:
    'A passionate Full Stack Web Developer and Blockchain Developer.',
  author: 'Ali Ramazani',
  image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
  url: 'ramazanima.me',
  keywords: [
    'Ali',
    'Ali Ramazani',
    '@ramazanima.me',
    'ramazanima.me',
    'Portfolio',
    'Ali Portfolio ',
    'Ali Ramazani Portfolio',
  ],
};
