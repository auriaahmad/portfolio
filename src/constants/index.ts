import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

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
  starbucks,
  tesla,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Full Stack Web Developer",
    icon: mobile,
  },
  {
    title: "Front End Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Microcontroller Software Scripting",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
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

const experiences: TExperience[] = [
  {
    title: "MERN Stack Developer",
    companyName: "Grace Automation & Engineering Services",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Apr 2021 - Present",
    points: [
      "Developing and maintaining web applications using MERN Stack and other related technologies.",
      "Collaborating with stackholders and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Freelancing",
    companyName: "UpWork",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Apr 2019 - Present",
    points: [
      "Offereing scaleable cloud native web application solutions",
      "Offering automation skills in low code, no code automation platforms Zapier, and Integromat. Automating your day to day tasks",
      "Offereing microcontroller programming in Pyhton and C++ for RasberryPi and Arduino",
      "Offering data scrapping using Selenium"
    ],
  },
  // {
  //   title: "Web Developer",
  //   companyName: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   companyName: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "M. Auria Ahmad is a great asset to our team, consistently delivering our expectations. He is detail oriented and do things upto mark.",
    name: "Raza Khalid",
    designation: "CEO",
    company: "Grace Automation",
    image: "https://media.licdn.com/dms/image/D4D03AQFkcVL8_uobgA/profile-displayphoto-shrink_400_400/0/1711208657565?e=1723075200&v=beta&t=gwyx-qQ7WEwuT9Xf65yciF7fcSmtaBPEE1qnm4VMrPE",
  },
  {
    testimonial:
      "Orya is a fantastic talent! He is thorough and will not rest until the job is completed successfully. I highly recommend him for detailed and complex projects!",
    name: "Eliot Adams",
    designation: "CEO",
    company: "Light Beam",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Muhammad was a real pleasure to work with. He provided adequate advice around the development and automation of our marketing bot and its running really well.",
    name: "Luis Botsio",
    designation: "Talent Acquisition Partner",
    company: "LBO Group",
    image: "https://media.licdn.com/dms/image/C5603AQENbSgE3taQvw/profile-displayphoto-shrink_400_400/0/1520867472418?e=1723075200&v=beta&t=Vz__Co0_EU_ApRNJDKDyfU5NN8kV47LOBbcWhUqioBc",
  },
];

const projects: TProject[] = [
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
    sourceCodeLink: "https://github.com/",
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
    sourceCodeLink: "https://github.com/",
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
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
