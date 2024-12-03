
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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    coeur,
    finsa,
    insa,
    occ,
    tp,
    udea,
    ende,
    graf,
    python,
    java,
    c,
    mario
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
      title: "Hardware Design",
      icon: web,
    },
    {
      title: "Data science",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Networks & Cybersecurity",
      icon: creator,
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
      name: "c",
      icon: c,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "grafana",
      icon: graf,
    },
    {
      name: "java",
      icon: java,
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
      name: "python",
      icon: python,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Internship \"Intelligence artificielle formulation\"",
      company_name: "L‘Occitane en provence",
      icon: occ,
      iconBg: "#383E56",
      date: "Feb 2024 - Aug 2024",
      points: [
        "Development of AI tools for predictive analysis of the stability of cosmetic formulations based on laboratory tests.",
        "Design and implementation of a high-performance classifier.",
        "Automation of the reading of complex raw material reports, optimizing analysis time."
      ],
    },
    {
      title: "Internship Data Scientist",
      company_name: "Start-up Coeur-net",
      icon: coeur,
      iconBg: "#E6DEDD",
      date: "May 2023 - Sep 2023",
      points: [
        "Analysis of biometric signals for individual identification using Grafana, InfluxDB, and Docker.",
        "Signal processing pipeline for classification using machine learning models in Python."
      ],
    },
    {
      title: "Master’s Degree (M2) Cybersecurity",
      company_name: "INSA Centre-Val-de-Loire",
      icon: insa,
      iconBg: "#E6DEDD",
      date: "Sep 2022 - Sep 2024",
      points: [
        "With courses in development and artificial intelligence."
      ],
    },
    {
      title: "English-Spanish Interpreter",
      company_name: "Teleperformance",
      icon: tp,
      iconBg: "#383E56",
      date: "Jun 2020 - Jun 2022",
      points: [
        "Call center interpreter in medical, banking, and insurance contexts in the U.S."
      ],
    },
    {
      title: "Bachelor in Computer Science",
      company_name: "Universidad de Antioquia",
      icon: udea,
      iconBg: "#E6DEDD",
      date: "Jan 2017 - Oct 2022",
      points: [
        "Focused on development and physics."
      ],
    },
    {
      title: "Stock Manager",
      company_name: "Fundiciones Industriales S.A.",
      icon: finsa,
      iconBg: "#E6DEDD",
      date: "Nov 2015 - Dec 2016",
      points: [
        "Managed inventory in a steel foundry using Office and databases to organize production scheduling."
      ],
    },
    {
      title: "Commercial Pilot",
      company_name: "Los Halcones-Endeavour Flight Training",
      icon: ende,
      iconBg: "#E6DEDD",
      date: "Jan 2011 - Oct 2015",
      points: [
        "Colombian commercial pilot single-engine-land with instrument rating.",
        "FAA private pilot single-engine-land with instrument rating."
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "Daniel is someone who you can contact when you need to understand concepts of computer science.",
      name: "Mario Andres triana",
      designation: "Student of computer science",
      company: "INSA CVL ",
      image: "https://media.licdn.com/dms/image/v2/D4D35AQGXNL1vvDvstg/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1730211271159?e=1733864400&v=beta&t=ebW4Fm_Jh2eJudswE4PIYhpzoUNcrJUcZ2B6hTh0Z3E",
    },
    {
      testimonial:
        "Driven , determined , he taught me a lot of things about France as a new comer",
      name: "Oscar Rojas",
      designation: "Student ,Industrial risks INSA cvl ",
      company: "INSA CVL ",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQHVwg5n1ns73g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729196545978?e=1738800000&v=beta&t=tl5Xcvm2IxmVj10zubJSJacOI3FEviHUuREjDU3BbPc",
    },
    {
      testimonial:
        "My human is pretty neat i mean ..WOOF WOOF!",
      name: "Cleopatra",
      designation: "Pet",
      company: "home",
      image: "https://scontent-cdg4-1.xx.fbcdn.net/v/t39.30808-6/365920208_1738467296624569_9074143001909607490_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=eyk2KCbcPKsQ7kNvgGW8nYe&_nc_zt=23&_nc_ht=scontent-cdg4-1.xx&_nc_gid=AAwBzZsEDQUGnQ9rfEiK-at&oh=00_AYBFrnqmTF_2fNfVR5fiv3xMwQLt1aXMtOqUQzv3K1Pv_A&oe=67554BA4",
    },
  ];
  
  const projects = [
    {
      name: "Online Book store",
      description:
        "Web-based platform that allows users to search and buy books from various editors, providing a convenient and efficient solution for centralizing book shopping needs.",
      tags: [
        {
          name: "Spring",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb client",
          color: "green-text-gradient",
        },
        {
          name: "Java",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/dans300/Libraire-composant-logiciels.git",
    },
    {
      name: "Application shopping cart",
      description:
        "A web application in the style of Ubereats ,to place orders of product ,simulating a shopping cart and having the capacity to create other types too.The back and the front run independently from one another",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Mongodb ",
          color: "green-text-gradient",
        },
        {
          name: "Node.js",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/toto101230/projet_web_avance/",
    },
    {
      name: "WORK IN PROGRESS",
      description:
        "WORK IN PROGRESS , more projects comming soon ",
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
      source_code_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  