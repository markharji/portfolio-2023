import {
  frontend,
  backend,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  docker,
  postgresql,
  graphql,
  cloud,
  angular,
  vue,
  aws,
  resman,
  canapii,
  flyfreely,
  google,
  engie,
  resmanLogo,
  canapiiLogo,
  redAsiaLogo,
  googleLogo,
  scribe,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Cloud Technologies",
    icon: cloud,
  },
  {
    title: "Software Prototyping",
    icon: prototyping,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Vue",
    icon: vue,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "graphql",
    icon: graphql,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Amazon Web Services",
    icon: aws,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "ResMan",
    icon: resmanLogo,
    iconBg: "#333333",
    date: "Nov 2021 - Present",
  },
  {
    title: "Software Engineer",
    company_name: "Canapii",
    icon: canapiiLogo,
    iconBg: "#333333",
    date: "Aug 2021 - Nov 2021",
  },
  {
    title: "Software Engineer",
    company_name: "Red Asia Engineering",
    icon: redAsiaLogo,
    iconBg: "#333333",
    date: "Jan 2021 - Aug 2021",
  },
  {
    title: "Software Engineer",
    company_name: "Concentrix: Google Account",
    icon: googleLogo,
    iconBg: "#333333",
    date: "August 2020 - Jan 2021",
  },
  {
    title: "Full Stack Developer",
    company_name: "Scribe Team",
    icon: scribe,
    iconBg: "#333333",
    date: "April 2016 - March 2018",
  },
];

const projects = [
  {
    id: "project-1",
    name: "ResMan",
    description:
      "A real estate management systems that manage real estates in the United States.",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "vuetify",
        color: "pink-text-gradient",
      },
    ],
    image: resman,
    repo: "https://www.myresman.com/",
    demo: "https://www.myresman.com/",
  },
  {
    id: "project-2",
    name: "Canapii",
    description:
      "An Event Management system that provides platform for virtual and hybrid meetings.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "aws",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: canapii,
    repo: "https://www.myresman.com/",
    demo: "https://www.myresman.com/",
  },
  {
    id: "project-3",
    name: "Fly Freely",
    description:
      "A platform that provides planning and organising drone operations",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: flyfreely,
    repo: "https://flyfreely.io/",
    demo: "https://flyfreely.io/",
  },
  {
    id: "project-4",
    name: "Engie Impact",
    description: `Internal tools for engie impact suchs energy game, energy cost and analysis.`,
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "aws",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: engie,
    repo: "https://www.theimpactengine.com/",
    demo: "https://www.theimpactengine.com/",
  },
  {
    id: "project-5",
    name: "Concentrix",
    description:
      "Google Internal tools for concentrix google account such as TITO system, categorizer and etc.",
    tags: [
      {
        name: "Google script",
        color: "blue-text-gradient",
      },
      {
        name: "angular",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: google,
    repo: "https://www.google.com/",
    demo: "https://www.google.com/",
  },
];

export { services, technologies, experiences, projects };
