export interface Experience {
  company: string;
  period: string;
  role: string;
  description: string;
  technologies: string[];
  link: string;
}

export const experiences: Experience[] = [
  {
    company: "Knowmad Mood",
    period: "June 2023 - Present",
    role: "Frontend Tech Lead",
    description:
      "Knowmad is a software solutions company. Responsible for leading the Frontend Team, choosing technologies, designing architectures, enforcing best practices, and supporting teammates.",
    link: "https://knowmadmood.com",
    technologies: [
      "Angular",
      "Angular Material",
      "Typescript",
      "Javascript",
      "Sass",
      "Nx",
      "NodeJS",
      "Ionic",
      "Capacitor",
      "Jest",
      "Cypress",
      "Testing Library",
      "OpenCode",
      "Gemini",
      "Antigravity",
      "Claude",
      "Codex",
      "Bun",
      "Docker",
      "Jenkins",
    ],
  },
  {
    company: "Fortris",
    period: "Oct 2021 - June 2023",
    role: "Senior Frontend Developer",
    description:
      "Crypto asset management system. Responsible for development, maintainability, and deployment of the single page app and BFF server app.",
    link: "https://fortris.io",
    technologies: [
      "Angular",
      "Angular Material",
      "Typescript",
      "Sass",
      "Nx",
      "NodeJS",
      "Express",
      "NestJS",
      "GraphQL",
      "Jest",
      "Cypress",
    ],
  },
  {
    company: "Shapelets",
    period: "May 2019 - Oct 2021",
    role: "Frontend Developer",
    description:
      "Data science tools platform. Responsible for development and deployment of a single page app with dazzling data visualizations and dashboards.",
    link: "https://shapelets.io",
    technologies: [
      "React",
      "AntDesign",
      "Mobx",
      "Axios",
      "Apache ECharts",
      "Vega",
      "Typescript",
      "Less",
      "Nx",
      "Jest",
      "Testing Library",
    ],
  },
  {
    company: "Sombradoble",
    period: "Sept 2016 - Apr 2019",
    role: "Frontend Developer",
    description:
      "Consultancy agency specialized in the scientific sector. Responsible for gathering requirements, development, and deployment of single-page apps, progressive web apps, and hybrid mobile apps.",
    link: "https://sombradoble.com",
    technologies: [
      "Angular",
      "Angular Material",
      "Ionic",
      "Typescript",
      "NodeJS",
      "Express",
      "Loopback",
      "MongoDB",
      "SQLServer",
      "Jest",
      "Cypress",
    ],
  },
  {
    company: "NoWait",
    period: "2015 - 2017",
    role: "Founder",
    description:
      "Startup that developed noesperescolas.com, a platform for managing copyshops' orders in a quick and secure way.",
    link: "https://www.uma.es/facultadmarketing/noticias/no-wait-start-creada-por-alumnos-del-grado-en-marketing-en-el-foro-ser-emprendedor/",
    technologies: [
      "Html",
      "Css",
      "Javascript",
      "NodeJS",
      "ExpressJS",
      "EJS",
      "MongoDB",
    ],
  },
];
