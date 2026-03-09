import handImg from "../assets/hand.png";
import biogas from "../assets/biogas.png";
import yt from "../assets/utube.svg";
import cur from "../assets/scm.png";

export const projects = [
  {
    id: 1,
    name: "Hand Gesture Mouse Control",
    image: handImg,
    description:
      "A real-time computer vision application that replaces traditional mouse input with hand gestures using webcam-based tracking, enabling touchless human-computer interaction.",
    techStack: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI", "NumPy"],
    github: "https://github.com/abishek1919/Hand-Gesture-Mouse-Control.git",
  },
   {
    id: 2,
    name: "SmartBioGas-Optimizer",
    image: biogas,
    description:
  "A smart biogas optimization platform that analyzes anaerobic digestion parameters and predicts methane yield, biogas production, and system efficiency through an interactive analytics dashboard with visual insights and optimization recommendations.",
  techStack: ["React", "Vite", "Tailwind CSS", "Chart.js", "Framer Motion"],
    github: "https://github.com/abishek1919/SmartBioGas-Optimizer.git",
  },
  {
    id: 3,
    name: "Smart clipboard Manager",
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
    id: 4,
    name: "YouTube Video Downloader",
    image: yt,
    description:
      "A desktop YouTube Video Downloader built with Python and Tkinter, using yt-dlp and FFmpeg to download and convert videos with a simple GUI interface.",
    techStack: ["Python", "Tkinter", "yt-dlp", "FFmpeg"],
    github: "https://github.com/abishek1919/YouTube-Video-Downloader.git",
  },
 
];
