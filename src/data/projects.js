import handImg from "../assets/hand.png";
import biogas from "../assets/biogas.png";
import yt from "../assets/utube.png";
import cur from "../assets/scm.png";
import hrms from "../assets/hrms.png";
import derma from "../assets/derma.png";

export const projects = [
  {
    id: 1,
    name: "Hand Gesture Mouse Control",
    image: handImg,
    description:
      "A real-time computer vision application that replaces traditional mouse input with hand gestures using webcam-based tracking, enabling touchless human-computer interaction. The system detects finger landmarks and translates gestures into mouse movements, clicks, and scroll actions.",
    techStack: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI", "NumPy"],
    github: "https://github.com/abishek1919/Hand-Gesture-Mouse-Control.git",
  },

  {
    id: 2,
    name: "SmartBioGas Optimizer",
    image: biogas,
    description:
      "A smart biogas optimization platform that analyzes anaerobic digestion parameters and predicts methane yield, biogas production, and system efficiency. The system provides an interactive analytics dashboard with visual insights and optimization recommendations for improving renewable energy generation.",
    techStack: ["React", "Vite", "Tailwind CSS", "Chart.js", "Framer Motion"],
    github: "https://github.com/abishek1919/SmartBioGas-Optimizer.git",
  },

  {
    id: 3,
    name: "HRMS – Human Resource Management System",
    image: hrms,
    description:
      "A full-stack HRMS platform inspired by enterprise tools like Zoho People, designed to streamline employee management within organizations. The system provides separate role-based dashboards for HR, managers, and employees, enabling leave management, employee records, attendance tracking, and internal workflow coordination.",
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "Tailwind CSS"
    ],
    github: "https://github.com/abishek1919/Hrms.git",
  },

  {
    id: 4,
    name: "DermaCompare – Skincare & Haircare Analysis Platform",
    image: derma,
    description:
      "A modern web platform that helps users analyze and compare skincare and haircare products using ingredient intelligence. The system provides product comparison, ingredient safety analysis, skin-type recommendations, myth busters, and educational insights to help users make better personal care decisions.",
    techStack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "API Integration"
    ],
    github: "https://github.com/abishek1919/dermacompare.git",
  },

  {
    id: 5,
    name: "Smart Clipboard Manager",
    image: cur,
    description:
      "A desktop Smart Clipboard Manager built with Python and Tkinter that monitors clipboard activity in real time, stores history automatically, and provides a GUI popup to view, edit, copy, and manage saved clipboard entries with custom global hotkey support.",
    techStack: [
      "Python",
      "Tkinter (GUI)",
      "Pyperclip",
      "Keyboard Module",
      "Multithreading",
    ],
    github: "https://github.com/abishek1919/Smart-clipboard-Manager.git",
  },

  {
    id: 6,
    name: "YouTube Video Downloader",
    image: yt,
    description:
      "A desktop YouTube Video Downloader built with Python and Tkinter that allows users to download and convert YouTube videos easily. The application integrates yt-dlp and FFmpeg for efficient downloading and format conversion through a simple graphical interface.",
    techStack: ["Python", "Tkinter", "yt-dlp", "FFmpeg"],
    github: "https://github.com/abishek1919/YouTube-Video-Downloader.git",
  },
];
