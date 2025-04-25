/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Javier's Portofolio",
  description:
    "Software developer with a passion for technology, particularly hardware, and a strong drive to explore and innovate.",
  og: {
    title: "Javier Alcalá Portfolio",
    type: "website",
    url: "https://superstrellaa.is-a.dev/",
  },
};

//Home Page
const greeting = {
  title: "Javier Alcalá",
  logo_name: "superstrellaa",
  nickname: "superstrellaa",
  subTitle:
    "Software developer with a passion for technology, particularly hardware, and a strong drive to explore and innovate.",
  portfolio_repository:
    "https://github.com/superstrellaa/supestrellaa.github.io",
  githubProfile: "https://github.com/superstrellaa",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/superstrellaa",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "YouTube",
    link: "https://youtube.com/@superstrellaa",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:superstrellayt@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://x.com/superstrellaa_",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
];

const skills = {
  data: [
    {
      title: "Full Stack & Game Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive, dynamic websites with ReactJS, focusing on UX/UI principles.",
        "⚡ Developing immersive, cross-platform mobile applications with Flutter, React Native, and Kotlin.",
        "⚡ Backend development using Node.js, Express, and Flask for scalable solutions.",
        "⚡ Designing game mechanics and systems, leveraging Unity 3D for game development.",
        "⚡ Creating Minecraft mods and event-driven systems using Java and Fabric API.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infrastructure & DevOps",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Working with cloud platforms to design and deploy scalable applications.",
        "⚡ Managing websites and services on cloud instances, integrating databases seamlessly.",
        "⚡ Deploying AI and machine learning models to the cloud for edge device utilization.",
        "⚡ Streamlining cloud-based data workflows with GCP, AWS, and Azure integration.",
        "⚡ Automation and CI/CD pipeline setup to ensure fast, reliable deployments.",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship, and Volunteering",
  description:
    "I am an aspiring Computer Engineer with a passion for developing innovative software solutions and contributing to open-source communities. I have been involved in organizing and developing events and mods for Minecraft, and I also actively participate in programming challenges like the Olimpiadas de Ingeniería Informática at UA (University of Alicante). I am eager to expand my knowledge and experience in software development, event organization, and mod creation.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Minecraft Event Organizer & Mod Developer",
          company: "Dolphin Productions™",
          company_url: "https://dolphinproductions.studio",
          logo_path: "dolphin_logo.png",
          duration: "Jan 2025 - Present",
          location: "Elche, Alicante",
          description:
            "Leading the development of custom Minecraft mods and events, including the 'La Caza del Tesoro Volcánico - Batalla por la Isla'. This involves working with Minecraft Java, creating mods using Fabric, and managing event logistics and community engagement.",
          color: "#FF7F50",
        },
      ],
    },
    {
      title: "Competitions & Academic Experience",
      experiences: [
        {
          title: "Participant - Olimpiadas de Ingeniería Informática (UA)",
          company: "University of Alicante",
          company_url: "https://www.ua.es",
          logo_path: "ua_logo.svg",
          duration: "Jan 2025",
          location: "Alicante, Spain",
          description:
            "Participated in the competitive programming event, Olimpiadas de Ingeniería Informática, organized by the University of Alicante. Focused on problem-solving using Java and refining my skills in algorithms and data structures.",
          color: "#1E90FF",
        },
      ],
    },
    {
      title: "Volunteering",
      experiences: [
        {
          title: "Community Moderator & Developer - Minecraft Mods",
          company: "Open-Source Minecraft Communities",
          company_url: "https://www.minecraftforum.net",
          logo_path: "minecraft_logo.svg",
          duration: "Ongoing",
          location: "Remote",
          description:
            "Contributing to open-source Minecraft mods, helping develop new features, testing and reviewing contributions, and engaging with the Minecraft community to enhance the overall gaming experience.",
          color: "#228B22",
        },
      ],
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  experience,
  contactPageData,
};
