import {
  mobile,
  backend,
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
  starbucks,
  threejs,
  something,
  thomasharry,
  courier
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Scripts and Utilities",
    icon: backend,
  }
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
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Gadg Academia",
    icon: starbucks,
    iconBg: "#383E56",
    date: "October 2021 - April 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Godwin proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "SomethingCoin",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Godwin does.",
    name: "Chris Brown",
    designation: "COO",
    company: "Thomas Harry Lawfirm",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    name: "Courier website with tracking number",
    description:
      "A courier website developed using ReactJS is a cutting-edge digital platform that streamlines the process of sending and receiving packages. This website offers a seamless and intuitive user experience, thanks to the power of ReactJS, a popular JavaScript library for building dynamic web applications.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
    ],
    image: courier,
    source_code_link: "https://github.com/godwinide/something.git",
  },
  {
    name: "SomehtingCoin Blockchain Website",
    description:
      "SomethingCoin is a cryptocurrency presale platform designed to provide a secure and user-friendly environment for individuals to participate in presales of new cryptocurrency tokens. The website serves as a bridge between blockchain technology and end-users, offering a seamless experience for token enthusiasts and investors.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "EthersJS",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: something,
    source_code_link: "https://github.com/godwinide/something.git",
  },
  {
    name: "Thomas Harry Law Firm",
    description:
      "Landing page for Thomas Harry, a distinguished law firm dedicated to providing expert legal services tailored to your unique needs. Our website, meticulously crafted using HTML, CSS, and JavaScript, serves as a gateway to our world of legal excellence and commitment to justice.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: thomasharry,
    source_code_link: "https://github.com/godwinide/something.git",
  }
];

export { services, technologies, experiences, testimonials, projects };
