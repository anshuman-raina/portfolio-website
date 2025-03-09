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
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
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
      "Developed and maintained a benchmarking framework for this open-source proteomics library. Automated performance validation across datasets using GitHub Actions, improving statistical accuracy and reproducibility.",
    tags: ["R", "CI/CD", "High Performance Computing(HPC)","Github Actions"],
    imageUrl: msstatsImg,
  },
  {
    title: "Detecting next Financial Crash using Quantum Circuits",
    description:
      "Developed a Quantum circuit which predicts Financial Crashes based on theory of Betti Numbers and Laplacian of Betty Curves.",
    tags: ["Python", "Qiskit", "IBMQ", "QBraid"],
    imageUrl: quantumImg,
  },
  {
    title: "Kambaz - Online Learning Tool",
    description:
      " Developed a full stack Learning Management System using MERN stack, enabling role-based access for faculty and students to manage courses, modules, assignments, quizzes, and enrollments with seamless CRUD operations.",
    tags: ["React", "Express.js", "Node.js", "Redux"],
    imageUrl: webImg,
  },
  {
    title: "Empty Shelf Detection",
    description:
      "Built a deep-learning-based system to detect empty shelves in retail stores. Integrated with inventory management systems to provide real-time stock alerts",
    tags: ["Python", "TensorFlow", "OpenCV", "FastAPI", "React"],
    imageUrl: emptyShelfImg,
  },
  {
    title: "Collab Travel Planner",
    description:
      "Designed a collaborative travel planning tool that enables users to create, share, and optimize itineraries, activities, adventures and accomodations.",
    tags: ["Streamlit", "Flask", "PostGreSQL", "MongoDB"],
    imageUrl: tripit,
  },
  {
    title: "Finvest - Financial Learning platform",
    description:
      "Developed a stock investing simulator with high-performance, maintainable code using MVC framework, following a test-driven development (TDD) approach and ensuring robust unit testing with JUnit.",
    tags: ["Java", "Swing GUI", "JUnit", "Design Patterns"],
    imageUrl: finvest,
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
