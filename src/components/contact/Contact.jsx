import "./Contact.css";
import Arrow from "../hero/Arrow";
import { useState } from "react";

export default function Contact(params) {
  const [hover, setHover] = useState(false);
  return (
    <div className="contact-section" id="contact">
      <h2 className="contact-title">
        Ready to take <span>your</span> digital presence to the next level?
      </h2>
      <p className="contact-description">
        Reach out to me today and let's discuss how I can help you achieve your
        goals.
      </p>
      <div className="button">
        <a
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          href="https://mail.google.com/mail/?view=cm&fs=1&to=oi_meguehout@esi.dz"
          target="_blank"
        >
          <span>Contact Me Now</span>
          <Arrow class={hover ? "rotate-right" : "rotate-left"} color="white" />
        </a>
      </div>
    </div>
  );
}
