import { useState } from "react";
import "./Nav.css";
import "../../index.css";

export default function Nav() {
  const links = ["about", "projects", "testimonials", "contact"];
  const [hoverIndex, setHoverIndex] = useState(null);

  const list = links.map((link, index) => (
    <li
      className={`nav-el ${hoverIndex == index ? "hover" : ""}`}
      key={index}
      onMouseEnter={() => setHoverIndex(index)}
      onMouseLeave={() => setHoverIndex(null)}
    >
      <a href={`#${link}`}>{link}</a>
    </li>
  ));

  return (
    <nav className="nav">
      <ul className="nav-list">{list}</ul>
    </nav>
  );
}
