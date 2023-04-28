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
  drupal,
  wordpress,
  onzeheureonze,
  co2m,
  hlp,
  webrelief,
  threejs,
  mmdev,
  arlux,
  thanatopraxie,
  didsign,
  jemefaislabelle,
  grrranit,
  negopret,
  marionnettes,
  pavillonsBelvil,
  laboutiquedeslunetiers,
  veneracreation,
} from "../assets"

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
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
]

const services = [
  {
    title: "Full Stack development",
    icon: web,
  },
  {
    title: "DevOps",
    icon: mobile,
  },
  {
    title: "UI / UX Design",
    icon: backend,
  },
  {
    title: "Creative coding",
    icon: creator,
  },
]

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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },/*
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },*/
  {
    name: "drupal",
    icon: drupal,
  },
  {
    name: "wordpress",
    icon: wordpress,
  },
]

const experiences = [
  {
    title: "Managing Director",
    company_name: "11h11 Design & Communication",
    icon: onzeheureonze,
    iconBg: "#000000",
    date: "2022 - Today",
    points: [
      "Website and mobile app development and deployment",
      "UI/UX Design",
      "Cyber security",
      "Web server administration",
      "SEO / SEA",
      "Project and team management",
      "Price quotations, specifications drafting, planning",
      "Business strategy",
    ],
  },
  {
    title: "Freelance",
    company_name: "Maxime Mettey / CO2M WebDesign & Communication",
    icon: co2m,
    iconBg: "#000000",
    date: "2015 - Today",
    points: [
      "Web & mobile full stack development, maintenance, and deployment",
      "Print and digital design",
      "UI/UX design",
      "Web server administration",
      "Computer repair and assistance",
      "Custom development",
      "Creative coding"
    ],
  },
  {
    title: "Project Manager & Full stack Developer",
    company_name: "HLP Services",
    icon: hlp,
    iconBg: "#ffffff",
    date: "2014 - 2021",
    points: [
      "Maintenance, development and deployment of an innotive Saas cloud platform",
      "Research & Development on a complex mobile app",
      "Cyber Security",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products",
      "Full stack development : ExtJS, PHP, HTML, CSS, Javascript, Angular / TypeScript, VBA.net, NodeJS",
      "Price quotations, specifications drafting, help desk",
      "Project and team management",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "WebRelief",
    icon: webrelief,
    iconBg: "#ffffff",
    date: "2012 - 2014",
    points: [
      "Full stack development : PHP, HTML, CSS, JavaScript",
      "CMS / Frameworks : Prestashop, Drupal, Wordpress, Symfony",
      "REST APIs & Webservices development",
      "Collaborating with the desginers team",
      "Implementing responsive design and ensuring cross-browser compatibility",
    ],
  },
]

const testimonials = [
  {
    testimonial:
      "Maxime has always listened to our needs and brought good solutions to every problem in no time.",
    name: "Etienne",
    designation: "",
    company: "",
    // image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Maxime is serious about his job. I recommend.",
    name: "Laurent Fluri",
    designation: "CEO",
    company: "Taxi Fluri",
    // image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "---",
    name: "Laurent Donge",
    designation: "CEO",
    company: "11h11 Design & Communication",
    // image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
]

const projects = [
  {
    name: "My own website",
    description:
      "First concrete project using React, Tailwind and ThreeJS. I wanted to challenge myself with new technologies. Made in two days.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "responsive",
        color: "orange-text-gradient",
      },
    ],
    image: mmdev,
    source_code_link: "https://github.com/MaximeMettey/my-3d-portfolio",
  },
  {
    name: "Arlux",
    description:
      "One of the most famous electrical company in the region of Belfort needed a new website. Thierry asked for a fresh and animated design, along with a back-office to add and change the content if necessary. This one is a Wordpress website, with a full custom theme developped from scratch !",
    tags: [
      {
        name: "wordpress",
        color: "orange-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "creativeui",
        color: "green-text-gradient",
      },
      {
        name: "customtheme",
        color: "pink-text-gradient",
      },
    ],
    image: arlux,
    source_code_link: "",
    project_link: "https://www.arlux-sarl.fr",
  },
  {
    name: "Thanatopraxie",
    description:
      "Claire, embalming teacher, wanted to develop a quiz app for her students. I thought it was better to go with a Progressive Web App, so her students could use it on every device. With its approach and fun design, this project won a \"Digital Award\" in 2022 !",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "pwa",
        color: "green-text-gradient",
      },
      {
        name: "webpack",
        color: "pink-text-gradient",
      },
      {
        name: "award",
        color: "orange-text-gradient",
      },
      {
        name: "customtheme",
        color: "green-text-gradient",
      },
    ],
    image: thanatopraxie,
    source_code_link: "",
    project_link: "https://www.thanatopraxie.pro/",
  },
  {
    name: "Grrranit - National Scene",
    description:
      "Grrranit, the emblematic french national theater, trusted us multiple times to develop new versions of their website. This one is the latest, with a scalable design fully customizable by the customer. In collaboration with 11h11 agency, the biggest challenge here was to develop a light structural disorder on the season page, with some diagonal lines, and keep this working on every device. Mission accomplished !",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "pwa",
        color: "green-text-gradient",
      },
      {
        name: "webpack",
        color: "pink-text-gradient",
      },
      {
        name: "customtheme",
        color: "green-text-gradient",
      },
    ],
    image: grrranit,
    source_code_link: "",
    project_link: "https://www.thanatopraxie.pro/",
  },
  {
    name: "Didsign - Car sculpture",
    description:
      "Do you know Porsche ? A sure thing is, Didier does know Porsche ! Producing hand-carved phenomenal cars, you have to show it to the world with a good-looking website. Let's do it entirely full-screen, no-scroll, and you get didsign.fr !",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "webpack",
        color: "green-text-gradient",
      },
      {
        name: "customtheme",
        color: "pink-text-gradient",
      },
      {
        name: "noscroll",
        color: "green-text-gradient",
      },
    ],
    image: didsign,
    source_code_link: "",
    project_link: "https://www.didsign.fr/",
  },
  {
    name: "Venera Creation",
    description:
      "Christine is a real artist, she has a great design sensibility. A classic e-shop website ? Not for her. Getting inspired from her creations, let's make a bending template e-shop website !",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "webpack",
        color: "green-text-gradient",
      },
      {
        name: "customtheme",
        color: "pink-text-gradient",
      },
      {
        name: "complexui",
        color: "green-text-gradient",
      },
    ],
    image: veneracreation,
    source_code_link: "",
    project_link: "https://www.veneracreation.fr/",
  },
]

export { services, technologies, experiences, testimonials, projects }
