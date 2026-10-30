import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import aimockinterviewlogo from './assets/work_logo/mockINterview_logo.jpg';
import assessmentrecommenderlogo from './assets/work_logo/assessment_recommender.png';

//Some  more as per m skills...........
import djangologo from './assets/tech_logo/Django.png';

// Experience Section Logo's

// Education Section Logo's
import iiitdmj1logo from './assets/education_logo/iiitdmj_logo.png';
import mhalogo from './assets/education_logo/dav_logo.jpg';

// Project Section Logo's
// (RentConnect removed)
import movieticket from './assets/work_logo/movieticket.png';
import soarsoclogo from './assets/work_logo/soar_soc.png';
import sentilstream from './assets/work_logo/sentilstream.png';
import nextflowlogo from './assets/work_logo/nextflow.png';
import pathfindinglogo from './assets/work_logo/pathfinding_visualizer.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      //    { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
      { name: 'Django', logo: djangologo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      //  { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      //  { name: 'Figma', logo: figmaLogo },
      //  { name: 'AWS', logo: awslogo },

    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: null, // add a logo file here when available
    role: "Software Development Engineer Intern",
    company: "AiLernova",
    location: "Remote",
    type: "Internship",
    date: "June 2026 - Present",
    desc: "Shipped an AI tutor on Anthropic's Claude API for multi-turn tutoring, grounding responses in a pgvector RAG pipeline over a concept knowledge graph to reduce hallucinations. Developed REST APIs on a Node.js, Express, Prisma and PostgreSQL backend powering MCQ practice, auto-graded tests and a parent dashboard, secured with JWT authentication.",
    skills: ["Node JS", "Express JS", "Prisma", "PostgreSQL", "pgvector", "Claude API", "RAG", "JWT"],
  },
];

export const education = [
  {
    id: 0,
    img: iiitdmj1logo,
    school: "IIITDM Jabalpur",
    date: "August 2022 - 2026",
    grade: "B.Tech, 2026",
    //  grade: "8.4 CPI",
    desc: "I graduated with a Bachelor's degree in Computer Science and Engineering (B.Tech.) from Indian Institute of Information Technology Design and Manufacturing Jabalpur. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at IITDMJ allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "B.Tech - Computer Science and Engineering",
  },
  {
    id: 1,
    img: mhalogo,
    school: "DAV PUBLIC SCHOOL DUDHICHUA,SINGRAULI",
    date: "MARCH 2021",
    grade: "91%",
    desc: "I completed my class 12 education from DAV Dudhichua, Singrauli under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM).",
    degree: "CBSE(XII) - PCM",
  },
  {
    id: 2,
    img: mhalogo,
    school: "DAV PUBLIC SCHOOL DUDHICHUA,SINGRAULI",
    date: "March 2019",
    grade: "94.8",
    desc: "I completed my class 10 education from DAV Dudhichua, Singrauli, under the CBSE board.",
    degree: "CBSE(X) - Science",
  },
];

// Hero proof tiles — edit these as numbers change.
export const heroStats = [
  { label: "DSA problems", value: "500+" },
  { label: "Projects shipped", value: "7" },
  { label: "B.Tech CSE", value: "2026" },
];

export const contactEmail = "pathakarpita867@gmail.com";

export const codingProfiles = [
  { name: "LeetCode", url: "https://leetcode.com/u/Arpita_34/" },
  { name: "CodeChef", url: "https://www.codechef.com/users/arpita2025" },
  { name: "GitHub", url: "https://github.com/Arpita34" },
];

export const resumeUrl =
 
"https://www.linkedin.com/safety/go?url=https%3A%2F%2Fdrive.google.com%2Ffile%2Fd%2F1oFyWahl1EZHsEq6szoOisI-h5azw2Fnb%2Fview&trk=flagship-messaging-web&messageThreadUrn=urn%3Ali%3AmessagingThread%3A2-NjRhMDlmNDctNDFjZS00OWMxLTkyMzEtZmQ3YzFlMGE0MTBjXzEwMA%3D%3D"
export const projects = [
  {
    id: 0,
    featured: true,
    title: "SentinelStream",
    description:
      "Built a scalable video platform enabling users to upload, process, and stream videos with real-time progress updates. Integrated AWS-based AI content analysis to detect sensitive content and automatically flag videos as safe or restricted. Implemented role-based access control to securely manage video permissions across user roles.",
    image: sentilstream,
    tags: ["React", "MongoDB", "Express.js", "Node.js",],
    github: "https://github.com/Arpita34/SentinelStream",
    webapp: "https://drive.google.com/file/d/1-ApksnRWzGdpqtXXvmy1CHf1AAOyeHxW/view?usp=sharing",
  },
  {
    id: 1,
    featured: true,
    title: "Full Stack AI Mock Interview Application",
    description:
      "a full-stack, AI-powered mock interview system designed to help users practice technical and behavioral interviews with real-time, adaptive feedback.The platform simulates a realistic interview environment where users answer questions, and the system instantly analyzes their responses using advanced AI models. The goal is to improve user preparation, boost confidence, and offer personalized guidance,similar to what a real interviewer would provide.",
    image: aimockinterviewlogo,
    tags: [" Next.js", "React", "Drizzle ORM", "Clerk", "OpenRouter API"],
    github: "https://github.com/Arpita34/AI-interview-mocker",
    webapp: "https://ai-interview-mocker-gules.vercel.app",
  },
  {
    id: 2,
    featured: true,
    title: "SHL Assessment Recommender",
    description:
      "An AI-powered conversational assistant that helps hiring managers find the right psychometric assessments from SHL's catalog of 400+ tests. Uses a hybrid RAG pipeline (FAISS + BM25 with Reciprocal Rank Fusion) and Llama 3.3-70b to understand role requirements and return grounded shortlists with real product links. Features hallucination guarding, prompt injection defense, and multi-turn conversation support.",
    image: assessmentrecommenderlogo,
    tags: ["FastAPI", "Python", "FAISS", "BM25", "Groq", "LLM", "Docker", "Render"],
    github: "https://github.com/Arpita34/Recommender",
    webapp: "https://shl-assessment-recommender-ymj4.onrender.com/",
  },
  {
    id: 6,
    featured: true,
    title: "SOAR SOC Assistant",
    description:
      "A full-stack Security Operations Center platform where a Llama LLM automates incident triage, severity scoring and threat-intelligence enrichment across 9 dashboards, cutting manual triage effort by about 50%. A context-aware chatbot grounds on live incident data and runs agentic actions such as IP investigation and report generation over a Flask REST API with Firebase role-based access. A scikit-learn intrusion-detection model flags anomalies, and n8n webhooks automate real-time response like IP blocking and escalation.",
    image: soarsoclogo,
    tags: ["React", "Flask", "Groq API", "Llama 3.1", "Firebase Auth", "scikit-learn", "n8n"],
    github: "https://github.com/Arpita34/SOAR-Soc-Asistant",
    webapp: "https://soar-soc-asistant.vercel.app",
  },
  {
    id: 3,
    title: " Movie Ticket Booking System",
    description:
      "Movie Ticket Booking System is a full-stack web application that enables users to browse movies, select seats, and book tickets seamlessly while providing admins with tools to efficiently manage content and bookings.",
    image: movieticket,
    tags: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Stripe", "Clerk"],
    github: "https://github.com/Arpita34/MovieTicketBooking",
    //   webapp: "https://drive.google.com/drive/folders/1OMyOBnFBUL93rHz5LOG9UtARw98rwC4S",
  },
  {
    id: 4,
    featured: true,
    title: "NextFlow",
    description:
      "A visual workflow automation platform for building and executing media processing pipelines through a drag-and-drop node-based editor. Supports image/video uploads, frame extraction, cropping, and LLM-powered AI processing with full execution history and per-node audit trails. Background tasks run via Trigger.dev for reliable async execution.",
    image: nextflowlogo,
    tags: ["Next.js", "React Flow", "Prisma", "PostgreSQL", "Trigger.dev", "Clerk", "TypeScript"],
    github: "https://github.com/Arpita34/NextFlow",
    webapp: "https://drive.google.com/file/d/1KzBemPNLSmyhx8BBHUNVfHBQKL81y1kX/view?usp=sharing",
  },
  {
    id: 5,
    title: "Pathfinding Algorithm Visualizer",
    description:
      "An interactive visualizer demonstrating BFS, DFS, Dijkstra's, and A* pathfinding algorithms with step-by-step visual traversal. Migrated to Vite for 40% faster build times and optimized rendering performance by 30% through efficient React state management and memoization techniques.",
    image: pathfindinglogo,
    tags: ["React.js", "TypeScript", "JavaScript", "Vite"],
    github: "https://github.com/Arpita34/PathFinder",
  },
  // {
  //   id: 5,
  //   title: "Fuison (Institute ERP Portal)",
  //   description:
  //     "The Hostel Management System automates room allocation and fee management for institutional hostels, replacing manual workflows with a streamlined web-based solution. It enhances administrative efficiency, improves data handling, and ensures accuracy in operations.",
  //   image: fusionlogo,
  //   tags: ["JavaScript","React.js","Python","Django","PostgresSQL"],
  //   github: "https://github.com/tushar66sharma/FusionBackendWork_Myrepo",
  //   webapp: "http://fusion.iiitdmj.ac.in:8000/dashboard",
  // },

];  
