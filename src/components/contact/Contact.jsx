import "./Contact.css";
import Arrow from "../hero/Arrow";

export default function Contact(params) {
  const [hover, setHover] = useState(false);
  return (
    <div className="contact-section">
      <h2 className="contact-title">
        Ready to take <span>your</span> digital presence to the next level?
      </h2>
      <p className="contact-description"></p>
      <div className="button">
        <button
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <span>See my work </span>
          <Arrow class={hover ? "rotate-right" : "rotate-left"} color="white" />
        </button>
      </div>
    </div>
  );
}
