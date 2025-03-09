import React from "react";
import msstatsImg from "@/public/msstats.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import ionlogo from "@/public/ion.png";
import maitlogo from "@/public/mait.png";
import nulogo from "@/public/nu.png";
import techmojologo from "@/public/techmojo.png";
import quantumImg from "@/public/Quantum.png";
import emptyShelfImg from "@/public/empty.png";
import webImg from "@/public/Web.png";
import tripit from "@/public/TripIt.png";
import finvest from "@/public/Finvest.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Work Experience",
    hash: "#workexperience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  }
] as const;

export const experiencesData = [
  {
    title: "B.Tech: Computer Science Engineering",
    location: "New Delhi, INDIA",
    description:
      "Graduated from Maharaja Agrasen Institute of Technology, with major project on Using C++ for ML Algorithms, and minor project on leveraging Quantum Computing for decryption. ",
    // icon: React.createElement(LuGraduationCap),
    icon: maitlogo,
    date: "2015 - 2019",
  },
  {
    title: "Software Developer : SDE 1",
    location: "Noida, INDIA",
    description:
      "Worked as a Software Developer, rotating in teams in Fixed Income Domain, developing Front and Back-office Trading solutions and providing client support.",
    icon: ionlogo,
    date: "2019 - 2022",
  },
  {
    title: "Senior Software Developer : SDE 2",
    location: "Hyderabad, INDIA",
    description:
      "Worked on designing microservices from scratch on Golang, and became the primary SME of the feature. Integrated third party APIs and oversaw go-live to European markets.",
    // icon: React.createElement(CgWorkAlt),
    icon: techmojologo,
    date: "2022 - 2023",
  },
  {
    title: "Master's of Science: Northeastern University",
    location: "Boston, MA",
    description:
      "Been a TA since May 2024. Selected for Fall'24 Research Apprenticeship program. Also working as a Research Developer towards my Master's Thesis project on MS-based protemoics, continued from my apprenticeship.",
    // icon: React.createElement(FaUniversity),
    icon: nulogo,
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "MSStats - open source tool for proteomics",
    description:
      "Developed and maintained a benchmarking framework for an open-source proteomics library.",
    tags: ["R", "CI/CD", "HPC","Github Actions"],
    imageUrl: msstatsImg,
    githubUrl: "https://github.com/Vitek-Lab/MSstats",
  },
  {
    title: "Detecting next Financial Crash using Quantum Circuits",
    description:
      "Designed a Quantum circuit to predict Financial Crashes on Betti Numbers and Betty Curves.",
    tags: ["Qiskit", "IBMQ", "QBraid"],
    imageUrl: quantumImg,
    githubUrl: "https://github.com/anshuman-raina/2025-Moodys",
  },
  {
    title: "Kambaz - Online Learning Tool",
    description:
      "Created a Learning Management System using MERN stack.",
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
    imageUrl: webImg,
    githubUrl: "https://github.com/anshuman-raina/2025-Moodys",
  },
  {
    title: "Empty Shelf Detection",
    description:
      "Built a deep-learning system to detect empty shelves in retail stores.",
    tags: ["Python", "TensorFlow", "OpenCV", "FastAPI", "React"],
    imageUrl: emptyShelfImg,
    githubUrl: "https://github.com/anshuman-raina/FAI_Fall24",
  },
  {
    title: "Collab Travel Planner",
    description:
      "Implemented a collaborative travel planning tool to enable users to create, share, and optimize itineraries.",
    tags: ["Streamlit", "Flask", "PostGreSQL", "MongoDB"],
    imageUrl: tripit,
    githubUrl: "https://github.com/anshuman-raina/Travel-Itinerary-Planner",
  },
  {
    title: "Finvest - Financial Learning platform",
    description:
      "Created a stock investing simulator using MVC on core JAVA using JUnit and TDD.",
    tags: ["Java", "Swing GUI", "JUnit", "Design Patterns"],
    imageUrl: finvest,
    githubUrl: "https://github.khoury.northeastern.edu/anshumanraina/pdp_assignment",
  },
  
] as const;

export const skillsData = [
  "Java", "Go (Golang)", "Python", "R", "C#", "C++", "JavaScript", "TypeScript", 
  "SQL", "Objective-C", "Kotlin", "Groovy", "Matlab", "Hibernate", "Guice", "gRPC", 
  "Robot Framework", "RESTful APIs", "Kafka", "Salesforce API", "React", "RabbitMQ", 
  "Scala", "Flask", "Spring", "Spring Boot", "Node.js", "Angular", "GORM", "Zookeeper", 
  "Express.js", "FastAPI", "Git", "Docker", "Kubernetes", "Maven", "JIRA", "Jenkins", 
  "Power BI", "GCP", "AWS", "GitHub Actions", "High Performance Cluster (HPC)", 
  "Oracle", "MySQL", "MongoDB", "Linux (Ubuntu, CentOS)", "Elasticsearch", "Prometheus", 
  "Grafana"
] as const;
