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
  carrent,
  jobit,
  tripguide,
  threejs,
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
]

export { services, technologies, experiences, testimonials, projects }
