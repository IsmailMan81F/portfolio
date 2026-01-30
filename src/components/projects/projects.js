import clerk from "./assets/clerk.svg";
import nextjs from "./assets/nextjs.svg";
import reactjs from "./assets/reactjs.svg";
import tailwindcss from "./assets/tailwindcss.svg";
import threejs from "./assets/threejs.svg";
import typescript from "./assets/typescript.svg";
import framer from "./assets/framerMotion.svg";
import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";
import project3 from "./assets/project3.png";
import project4 from "./assets/project4.png";

export const projects = [
  {
    title: "3D Solar System Planets to Explore",
    description:
      "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    picture: project1,
    tech: [reactjs, tailwindcss, typescript, threejs, framer],
  },
  {
    title: "Yoom - Video Conferencing App",
    description:
      "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    picture: project2,
    tech: [nextjs, tailwindcss, typescript, reactjs, clerk],
  },
  {
    title: "AI Image SaaS - Canva Application",
    description:
      "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    picture: project3,
    tech: [reactjs, tailwindcss, typescript, threejs, clerk],
  },
  {
    title: "Animated Apple Iphone 3D Website",
    description:
      "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects.",
    picture: project4,
    tech: [nextjs, tailwindcss, typescript, threejs, framer],
  },
];
