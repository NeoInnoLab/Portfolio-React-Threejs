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
    title: "Frontend Engineer",
    icon: phone,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "Web App Developer",
    icon: notebook,
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
    company_name: "GoerTech Inc. - Top 1 Go Chess Startup in Taiwan ",
    icon: goer,
    iconBg: "white",
    date: "August 2020 - August 2022",
    points: [
      "Built the Hybrid App from scratch with responsive UI using JavaScript (Vue.js), HTML, and CSS.",
      "Developed the official website, allowing clients to browse courses and make payments.",
      "Reduced time to render the app by 70% by optimizing code, resources, and plugins.",
      "Implemented Jest and Mocha unit testing to achieve 90% code coverage.",
      "Developed 30+ reusable components and interactive features with RESTful APIs.",
    ],
    company_url: "https://goer.live/",
  },
  {
    title: "Backend Developer",
    company_name: "SUNY Buffalo - CSMS Lab",
    icon: ub,
    iconBg: "#015BBB",
    date: "March 2023 - Current",
    points: [
      "Built a Cloud-based ML Service by AWS and OpenStack for the autonomous robots.",
      "Deployed Python Flask with Docker in cloud environments for efficient, scalable deployment.",
      "Created Swagger API documentation for users and teams.",
      "Collaborated seamlessly with a remote experimentalist group.",
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
    name: "HeiJiaJia Go Chess Classroom Web App",
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
    name: "HeiJiaJia Go Chess Classroom Official Website",
    description:
      "Website serves as a guide for users interested in the HeiJiaJia Go Chess Classroom App. It offers detailed information about the app's features and benefits, allowing users to make informed decisions",
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
