import "./Hero.css";
import Arrow from "./Arrow";
import { useState } from "react";

export default function Hero() {
  const [hover, setHover] = useState(false);
  return (
    <section className="hero-section" id="home">
      <div className="hero-div">
        <h3>Dynamic Web Magic with Next.js</h3>
        <h1>
          Transforming Concepts into Seamless <span>User Experiences</span>
        </h1>
        <h2>Hi! I’m John Doe, a Next.js Developer based in Russia</h2>
        <div className="button">
          <a
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            href="https://github.com/ismailman81f"
            target="_blank"
          >
            <span>See my work </span>
            <Arrow
              class={hover ? "rotate-right" : "rotate-left"}
              color="white"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
