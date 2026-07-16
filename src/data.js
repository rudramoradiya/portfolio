import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools11 from "/assets/tools/figma.png";
import Tools14 from "/assets/tools/html.png";
import Tools15 from "/assets/tools/css.png";
import Tools16 from "/assets/tools/ts.png";
import Tools18 from "/assets/tools/vite.png";
import Tools19 from "/assets/tools/mysql.png";

// New Data Science & Full-Stack Additions
import Tools20 from "/assets/tools/python.svg";
import Tools21 from "/assets/tools/fastapi.svg";
import Tools22 from "/assets/tools/mongodb-icon-dark.svg";
import Tools23 from "/assets/tools/scikit-learn.svg";
import Tools24 from "/assets/tools/expressjs_dark.svg";
import Tools25 from "/assets/tools/powerbi-svgrepo-com.svg";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Frontend Library",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Full-Stack Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "CSS Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools20,
    nama: "Python",
    ket: "Programming Language",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "JavaScript",
    ket: "Programming Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools16,
    nama: "TypeScript",
    ket: "Programming Language",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools7,
    nama: "Node JS",
    ket: "JavaScript Runtime",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools24,
    nama: "Express.js",
    ket: "Backend Framework",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools21,
    nama: "FastAPI",
    ket: "Backend Framework",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools22,
    nama: "MongoDB",
    ket: "NoSQL Database",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools19,
    nama: "MySQL",
    ket: "Relational Database",
    dad: "1200",
  },
  {
    id: 13,
    gambar: Tools23,
    nama: "Scikit-Learn",
    ket: "Machine Learning",
    dad: "1300",
  },
  {
    id: 14,
    gambar: Tools25,
    nama: "Power BI",
    ket: "Data Analytics",
    dad: "1400",
  },
  {
    id: 15,
    gambar: Tools8,
    nama: "GitHub",
    ket: "Version Control",
    dad: "1500",
  },
  {
    id: 16,
    gambar: Tools11,
    nama: "Figma",
    ket: "UI/UX Design App",
    dad: "1600",
  },
  {
    id: 17,
    gambar: Tools18,
    nama: "Vite",
    ket: "Build Tool",
    dad: "1700",
  },
  {
    id: 18,
    gambar: Tools14,
    nama: "HTML",
    ket: "Markup Language",
    dad: "1800",
  },
  {
    id: 19,
    gambar: Tools15,
    nama: "CSS",
    ket: "Style Sheet Language",
    dad: "1900",
  },
];

import Proyek1 from "/assets/proyek/proyek1.png";
import Proyek2 from "/assets/proyek/proyek2.png";
import Proyek3 from "/assets/proyek/proyek3.png";
import Proyek4 from "/assets/proyek/proyek4.png";
import Proyek5 from "/assets/proyek/proyek5.png";


export const listProyek = [
  
  {
    id: 1,
    image: Proyek1,
    title: "QuickChat — Real-Time Chat Application",
    subtitle: "A real-time full-stack chat application built on the MERN stack...",
    fullDescription: "A real-time full-stack MERN chat application featuring instant one-to-one and group messaging using Socket.io. It supports secure JWT authentication, live online/offline user status, unread message notifications, and dynamic group channel management with image sharing via Cloudinary.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/rudramoradiya/QuickChat-Full-Stack",
    dad: "100",
  },
  {
    id: 2,
    image: Proyek2,
    title: "Social Media Automation Dashboard",
    subtitle: "A multi-platform social media scheduling dashboard developed to streamline...",
    fullDescription: "An automated scheduling dashboard that aggregates multi-platform social media postings via unified APIs. It includes an AI-powered post generator powered by the OpenAI API, secure JWT login, and an optimized, production-ready backend code pipeline.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/rudramoradiya/social-scheduler",
    dad: "200",
  },
  {
    id: 3,
    image: Proyek3,
    title: "Next Word Predictor",
    subtitle: "A deep learning application built to perform real-time sequential text forecasting...",
    fullDescription: "A deep learning text forecasting tool using a trained LSTM neural network to predict sequential next-word patterns. It features a responsive Streamlit interface that loads pre-trained Keras models, tokenizers, and padding configurations for real-time inference.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/rudramoradiya/Next-Word-Predictor",
    dad: "300",
  },
  {
    id: 4,
    image: Proyek4,
    title: "End-to-End ML Pipeline",
    subtitle: "A robust, production-grade machine learning pipeline designed to achieve full reproducibility...",
    fullDescription: "A fully reproducible ML pipeline utilizing CatBoost for data preprocessing, training, and evaluation. It handles experiment tracking through MLflow, data versioning via DVC, and deployment through a Flask web application containerized with Docker.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/rudramoradiya/ml_first_project",
    dad: "400",
  },
  {
    id: 5,
    image: Proyek5,
    title: "Personal Portfolio Website",
    subtitle: "A personal, high-performance web portfolio built on the MERN stack...",
    fullDescription: "A high-performance personal developer portfolio built using React.js and Tailwind CSS. Designed with modern UI/UX principles, it serves as a responsive showcase for advanced data science pipelines, predictive models, and full-stack web applications.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/rudra-m-eng",
    dad: "500",
  }

  
];