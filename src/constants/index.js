import {
    mobile,
    backend,
    creator,
    web,
    javascript,

    mongodb,

    docker,

    factoorya,
      indexer,
    carrent,
    jobit,
    tripguide,

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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs. // It is under consruction right now! ",
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
      image: tripguide,
      source_code_link: "https://github.com/walid885/ImageSlider",
    },
    {
      name: "Netflix clone",
      description:
        "A simple Project, based on a youtube totrial in order to practise my knowledge in web developement, cloning the website of streaming service, Netflix.",
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
      image: tripguide,
      source_code_link: "https://github.com/walid885/NetflixClone",
    },
    {
      name: "Academic Project: Pendu",
      description:
        "An academic project, developed in order to simulate the game of Hangman, and have a deeper understanding for the tree datastrecture. We were asked to implement the tree DS in the game.",
      tags: [
        {
          name: "C",
          color: "blue-text-gradient",
        },
        {
          name: "Data structures",
          color: "green-text-gradient",
        },
        {
          name: "Algorithms",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/TorjmenOussama01/pendu",
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
      image: tripguide,
      source_code_link: "https://github.com/Iheb-Aouini/Compilation_sql_parser",
    },
  ];
  
  export { services, technologies, experiences, /*testimonials,*/ projects };
  