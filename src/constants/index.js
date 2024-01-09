import {
  backend,
  creator,
  vr,
  semiconductor,
  phone,
  notebook,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  python,
  vue,
  nextjs,
  flask,
  unity,
  redux,
  csharp,
  docker,
  bootstrap,
  goer,
  ub,
  summarizer,
  portfolio,
  heijiajia,
  official,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web App Developer",
    icon: notebook,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: phone,
  },
  // {
  //   title: "UX/UI Designer",
  //   icon: creator,
  // },
  // {
  //   title: "VR Game Developer",
  //   icon: vr,
  // },
  // {
  //   title: "Material Science Researcher",
  //   icon: semiconductor,
  // },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Next JS", icon: nextjs },
  { name: "Vue JS", icon: vue },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Bootstrap", icon: bootstrap },
  { name: "Three JS", icon: threejs },
  // { name: "python", icon: python },
  // { name: "docker", icon: docker },
  // { name: 'flask', icon: flask },
  // { name: 'csharp', icon: csharp },
  // {name: 'Node JS',icon: nodejs},
  // {name: 'git',icon: git},
  // {name: 'MongoDB',icon: mongodb},
  // {name: 'figma',icon: figma},
];

const experiences = [
  {
    title: "Vue.js Developer",
    company_name: "Goer Live - Largest Go game Education AI Start-up Company",
    icon: goer,
    iconBg: "white",
    date: "August 2020 - August 2022",
    points: [
      "Developed and successfully published of an AI web application using Vue.js and BootStrap UI/UX design.",
      "Collaborated with cross-functional teams including designers, product managers, and marketing teams to ensure an efficient, error-free application.",
      "Implemented responsive design and ensuring cross-browser compatibility.",
      "Participated in code reviews and providing constructive feedback to other developers.",
    ],
    company_url: "https://goer.live/",
  },
  {
    title: "Backend Developer",
    company_name:
      "UB CSMS Lab - The Computational and Statistical Material Science Lab",
    icon: ub,
    iconBg: "#015BBB",
    date: "March 2023 - Current",
    points: [
      "Established an AI cloud service for autonomous robot systems using Python Flask, AWS and OpenStack.",
      "Collaborated with a remote experimentalist group to execute a closed-loop autonomous experimental campaign.",
      "Developed and tested new AI methods to drive autonomous platforms.",
      "Hosted specialized computational resources for general use.",
    ],
    company_url:
      "https://engineering.buffalo.edu/materials-design-innovation/research/facilities.html",
  },
];

const testimonials = [
  {
    testimonial: "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
];

const projects = [
  {
    name: "SummarAIzer",
    description:
      "SummarAIzer is an open-source article summarizer powered by OpenAI GPT-3.5. It simplifies lengthy articles by generating clear and concise summaries. Users can utilize SummarAIzer by simply pasting the article URL into the application.",
    tags: [
      {
        name: "react",
        color: "cyan-text-gradient",
      },
      {
        name: "reduxtoolkit",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "red-text-gradient",
      },
    ],
    image: summarizer,
    source_code: true,
    source_code_link: "https://github.com/NeoInnoLab/SummarAIzer",
    website_link: "https://main--luminous-heliotrope-8bacf5.netlify.app/",
  },
  // {
  //   name: "Portfolio",
  //   description:
  //     "Portfolio is a web application that showcases my projects and skills. It is built with React and Three.js.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "cyan-text-gradient",
  //     },
  //     {
  //       name: "vite",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "threejs",
  //       color: "red-text-gradient",
  //     },
  //   ],
  //   image: portfolio,
  //   source_code: true,
  //   source_code_link: "https://github.com/NeoInnoLab/Portfolio-React-Threejs",
  //   website_link: "https://peaceful-valkyrie-19097f.netlify.app/",
  // },
  {
    name: "App - HeiJiaJia Go Game Classroom",
    description:
      "Web application that enables users to learn the game of Go from the beginner level, watch videos of HeiJiaJia - the world champion Go player, and practice their strategies by playing against AI opponents.",
    tags: [
      {
        name: "vue",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "purple-text-gradient",
      },
      {
        name: "hybridApp",
        color: "orange-text-gradient",
      },
    ],
    image: heijiajia,
    source_code: false,
    source_code_link: "",
    website_link:
      "https://app.heijiajia.com.tw/?_branch_match_id=1165116466618771656&utm_medium=marketing&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz0jNzMpMBCLdknK9xIICvZzMvGz94AzjRNMUd6OAzCQAHigR8CkAAAA%3D#/login",
  },
  {
    name: "Official Website - HeiJiaJia Go Game Classroom",
    description:
      "Website serves as a guide for users interested in the HeiJiaJia Go Game Classroom App. It offers detailed information about the app's features and benefits, allowing users to make informed decisions",
    tags: [
      {
        name: "vue",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "jest",
        color: "yellow-text-gradient",
      },
    ],
    image: official,
    source_code: false,
    source_code_link: "",
    website_link: "https://www.heijiajia.com.tw/",
  },
];

export { services, technologies, experiences, testimonials, projects };
