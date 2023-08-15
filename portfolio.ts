import emoji from 'react-easy-emoji';
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
  name: 'Curosity Intech',
  title: 'Welcome to Curosity Intech',
  description:
    "Where Innovation Meets Implementation. We're a dynamic tech company dedicated to crafting extraordinary software solutions for businesses like yours. Join us on this exciting journey of innovation and let's build the future together!",
  resumeLink:
    'https://docs.google.com/document/d/1_4RIfbyt4FFHW_bNplnoINQr01neTu7XDeeUlT_2O_k/edit?usp=sharing',
};

export const openSource = {
  githubUserName: '1hanzla100',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  linkedin: 'https://www.linkedin.com/in/adityak16/',
  github: 'https://github.com/adityak16',
  twitter: 'https://twitter.com/iamsrivastava1',
};

export const skillsSection: SkillsSectionType = {
  title: 'What We do',
  subTitle:
    'We are the technology provider for startups and entrepreneurs. Build a great team with empathy, transparency, and peer comfort.',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Building responsive applications'),
        emoji(
          '⚡ We build mobile apps of any complexities for different use cases.'
        ),
        emoji(
          '⚡ We will help you transform your ideas into products from the very first ideation process to deployment and maintenance.'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          iconifyTag: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          iconifyTag: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Django',
          iconifyTag: 'vscode-icons:file-type-django',
        },
        {
          skillName: 'Redux',
          iconifyTag: 'logos:redux',
        },
        {
          skillName: 'React Native',
          iconifyTag: 'tabler:brand-react-native',
        },
        {
          skillName: 'React Native',
          iconifyTag: 'skill-icons:java-light',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji('⚡ Hosting and maintaining websites'),
        emoji('⚡ Building CI/CD pipelines for automated testing & deployment'),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          iconifyTag: 'logos:aws',
        },
        {
          skillName: 'Azure',
          iconifyTag: 'logos:microsoft-azure',
        },

        {
          skillName: 'PostgreSQL',
          iconifyTag: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          iconifyTag: 'akar-icons:github-fill',
        },

        {
          skillName: 'Github Actions',
          iconifyTag: 'logos:github-actions',
        },
        {
          skillName: 'Cloudinary',
          iconifyTag: 'logos:cloudinary',
        },
        {
          skillName: 'Sentry',
          iconifyTag: 'logos:sentry-icon',
        },
      ],
    },
    // {
    //   title: 'Blockchain',
    //   lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
    //   skills: [
    //     emoji(
    //       '⚡ Experience in developing Smart Contract using Solidity & Ethereum'
    //     ),
    //     emoji(
    //       '⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura'
    //     ),
    //     emoji(
    //       '⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles'
    //     ),
    //     emoji('⚡ Developing NFT Smart Contracts using ERC-721 Token Standard'),
    //     emoji(
    //       '⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS'
    //     ),
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: 'Ethereum',
    //       iconifyTag: 'logos:ethereum',
    //     },
    //     {
    //       skillName: 'Solidity',
    //       iconifyTag: 'logos:solidity',
    //     },
    //     {
    //       skillName: 'Web3js',
    //       iconifyTag: 'logos:web3js',
    //     },
    //     {
    //       skillName: 'Metamask',
    //       iconifyTag: 'logos:metamask-icon',
    //     },
    //     {
    //       skillName: 'Ganache',
    //       iconifyTag: 'logos:ganache-icon',
    //     },
    //   ],
    // },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '80',
  },
  {
    Stack: 'Programming',
    progressPercentage: '90',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Harvard University',
    subHeader: 'Master of Science in Computer Science',
    duration: 'September 2017 - April 2019',
    desc: 'Participated in the research of XXX and published 3 papers.',
    grade: 'Grade A',
    descBullets: [
      'Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Frontend Developer',
    company: 'Duseca Software',
    companyLogo: '/img/icons/common/dusecaSoftware.jpg',
    date: 'Apr 2022 – Jun 2022',
    desc: 'I worked as frontend web developer to design web based admin dashboards for mulitple apps using Django, Bootstrap, jQuery, Chart.js and some other libraries.',
  },
  {
    role: 'API Engineer',
    company: 'Duseca Software',
    companyLogo: '/img/icons/common/dusecaSoftware.jpg',
    date: 'Jan 2022 – Mar 2022',
    desc: 'I worked as API Engineer on a Kale App. Kale is a community platform for the creation of social reviews based on verified transactions. I built Fully Optimized and High Performance RESTful APIs using Django, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions, Integrated Sentry for monitoring Django Server and deployed the API on Heroku Server.',
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Bleed-AI',
    companyLogo: '/img/icons/common/bleedAI.jpg',
    date: 'Sept 2021 - Oct 2021',
    desc: 'Worked as django web developer to create a website in which I integrated computer vision AI model (built by the team of BleedAI) to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.',
  },
  {
    role: 'Backend Developer',
    company: 'Wapidu',
    companyLogo: '/img/icons/common/wapidu.jpg',
    date: 'Sept 2021',
    desc: 'Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.',
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Car Dealership and Subscription App',
    desc: 'The app enables car dealerships to launch their vehicle subscription service, providing their customers with an alternative to traditional car ownership. customers can apply a subscription model to any vehicle, which includes the cost of registration, insurance, servicing, maintenance, roadside assistance, and depreciation',
  },
  {
    name: 'Parcel Monitoring and Printing Mobile App',
    desc: 'A mobile app designed to facilitate courier and parcel pickup for customers from the comfort of their smartphones so that they can track their goods and collect them at their convenience',
  },
  {
    name: 'Social App for Community & Families',
    desc: 'A mobile application that has been designed to assist families and communities throughout the world to manage their lives and relationships in a safe, secure, and private environment online',
  },
  {
    name: 'Social Media Marketing For Business',
    desc: 'The app combines the social media platforms of a user to determine their influence on social media. It allows the User to post a picture of the product on his social media. The app measures the impact of the post and the final value of that post is determined and the client can claim a discount or benefit on his next purchase',
  },
  {
    name: 'Repair and Maintenance App',
    desc: 'An application that provides where a user raises a requirement related to maintenance or reparation or any other service. Google map integration to find people in a range along with a Chat platform to fix deals',
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'Rohit Kumar Gupta',
    profilePic: '/img/icons/common/dev1.jpg',
  },
  {
    name: 'Aditya Kumar',
    profilePic: '/img/icons/common/dev2.jpg',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Curiosity Intech',
  description: 'Where Innovation Meets Implementation',
  author: 'Curiosity Intech',
  keywords: [
    'Curiosity',
    'Curiosity Intech',
    'Tech Solutions',
    'Custom Software',
    'Client Projects',
    'Tech Solutions Provider',
    'Agile Development',
    'Software Innovation',
  ],
};
