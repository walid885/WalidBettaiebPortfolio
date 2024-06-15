import {
    mobile,
    backend,
    creator,
    web,
    javascript,

    mongodb,
    noteapp,

    docker,
sql,
    factoorya,
      indexer,
    carrent,
    jobit,
    tripguide,
    slider,
weightConverter,
    c,
    cpp,
    python,

    elastic,
    
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
      title: "Embedded systems Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Blogger",
      icon: creator,
    },
  ];
  
  const technologies = [

    {
      name: "C",
      icon: c,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "Python",
      icon: python,
    },

    {
      name: "JavaScript",
      icon: javascript,
    },

    {
      name: "docker",
      icon: docker,
    },

    {
      name: "Elastic Search",
      icon: elastic,
    },

    {
      name: "MongoDB",
      icon: mongodb,
    },


  ];
  
  const experiences = [
    {
      title: "Internship - Full stack Web Developer ",
      company_name: "Factoorya",
      icon: factoorya,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developed an electrical energy monitoring system.",
        "Implemented RabbitMQ for communication between sensors and the server.",
        "Visualized data in charts and calculated metric values such as bills and carbon footprint.",
        "Implemented Docker for the microservice architecture.",
      ],
    },
    /*
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    */
  ];
  
 /* const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];*/
  
  const projects = [
    {
      name: "Car Rent - Under developement",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs. ",
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
      name: "Academic Project: File indexer ",
      description:
        " This is a File Indexer based on python, NLTK library and Tiknter for GUI . It was developed in my Second year in my licence degree in Higher institute of Computer science Mahdia.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "NLTK",
          color: "green-text-gradient",
        },
        {
          name: "Tiknter",
          color: "pink-text-gradient",
        },
      ],
      image: indexer,
      source_code_link: "https://github.com/walid885/FileIndexer",
    },
    {
      name: "Image slider ",
      description:
        "A simple Personal Project based on a tutorial , In order to learn and practise my knoweldege in Web Developement",
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
      image: slider,
      source_code_link: "https://walid885.github.io/ImageSlider",
    },
    {
      name: "weightConverter",
      description:
        "A simple Project, based on a youtube totrial in order to practise my knowledge in web developement, Creating a small calculator in order to convert the weight from pounds to Kg.",
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
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: weightConverter,
      source_code_link: "https://walid885.github.io/Weight-Converter",
    },
    {
      name: "Note App",
      description:
        "A personal project, based on a youtube tutorial, creating a simple webpage for creating and adding some notes , as well having the ability to delete that note.",
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
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: noteapp,
      source_code_link: "https://walid885.github.io/NoteApp",
    },
    {
      name: "Academic Project: SQL Parser",
      description:
        "An Academic Project, Developed in  C language in order to create an SQL Parser and verifier of the syntaxe, as well the semantics of an SQL Query.",
      tags: [
        {
          name: "C",
          color: "blue-text-gradient",
        },
        {
          name: "Bison",
          color: "green-text-gradient",
        },
        {
          name: "Lex",
          color: "pink-text-gradient",
        },
      ],
      image: sql,
      source_code_link: "https://github.com/Iheb-Aouini/Compilation_sql_parser",
    },
  ];
  
  export { services, technologies, experiences, /*testimonials,*/ projects };
  