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
    pg,
    re,
    fl,
    sacre,
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
      title: "Unity Developer",
      icon: backend,
    },
    {
      title: "Content Creation",
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // }, 
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
  ];
  
  const experiences = [
    {
      title: "Staff & Marketing Manager",
      company_name: "Pizza Guys Co.",
      icon: pg,
      iconBg: "#383E56",
      date: "July 2018 - Jan 2020",
      points: [
        "Participated in slightly developing the POS system.",
        "Used Spreadsheets to keep track of data; sales and current inventory.",
        "Reviewed company website to make sure it was responsive.",
      ],
    },
    {
      title: "Real Estate Agent",
      company_name: "Cheetah",
      icon: re,
      iconBg: "#E6DEDD",
      date: "August 2020 - Present",
      points: [
        "Developing and maintaining relationships that have to do with Real Estate.",
        "Managed a team, built team website, and handle the entire team's transaction.",
        "Implementing responsive design for team website.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Freelance",
      icon: fl,
      iconBg: "#383E56",
      date: "Jan 2023 - Present",
      points: [
        "Develop commissioned web applications using Javascript and its analogous frameworks.",
        "Colaboration with Designers as well as clients to deliver correct product.",
        "Ensure the commissioned websites have responsive designs suitable for smaller devices.",
      ],
    },
  ];
  
  const testimonials = [
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
  ];
  
  const projects = [
    {
      name: "Sac Real Estate Group",
      description:
        "A landing page with contact form for Sac Real Estate Group. Team page which features smooth animations to display each member's name and socials.",
      tags: [
        {
          name: "jquery",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "html",
          color: "pink-text-gradient",
        },
      ],
      image: sacre,
      source_code_link: "https://sacrealestate.ca/",
    },
    // {
    //   name: "Trip Guide",
    //   description:
    //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "supabase",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };