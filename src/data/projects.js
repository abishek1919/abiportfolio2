import handImg from "../assets/hand.png";
import cafeImg from "../assets/demo-english.png";
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
    id: 3,
    name: "YouTube Video Downloader",
    image: yt,
    description:
      "A desktop YouTube Video Downloader built with Python and Tkinter, using yt-dlp and FFmpeg to download and convert videos with a simple GUI interface.",
    techStack: ["Python", "Tkinter", "yt-dlp", "FFmpeg"],
    github: "https://github.com/abishek1919/YouTube-Video-Downloader.git",
  },
  {
    id: 4,
    name: "The Silk Cup Cafe",
    image: cafeImg,
    description:
      "A modern, responsive cafe website built using React, Vite, and Tailwind CSS with advanced animations, multilingual support, and interactive features.",
    techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "GSAP", "i18next"],
    github: "https://github.com/hvsingh28/Cafe-website",
  },
];