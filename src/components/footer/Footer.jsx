import "./Footer.css";
import { links } from "./data";

export default function Footer(params) {
  const icons = links.map((icon, index) => (
    <a
      key={index}
      href={icon.link}
      className="footer-link"
      style={{ backgroundImage: `url(${icon.icon})` }}
    ></a>
  ));

  return (
    <footer className="footer-section">
      <h3 className="footer-copyright">Copyright ©2024 John Doe</h3>
      <div className="footer-links">{icons}</div>
    </footer>
  );
}
