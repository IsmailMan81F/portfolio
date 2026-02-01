import "./testimonials.css";
import FeedbackCard from "./FeedbackCard";
import { testimonials, icons } from "./Dataset/Dataset";

export default function Testimonials(params) {
  const Testimonials = testimonials.map((feedback, index) => (
    <FeedbackCard key={index} info={feedback} />
  ));

  const logos = icons.map((logo, index) => (
    <div
      className="logo"
      key={index}
      style={{ backgroundImage: `url(${logo})` }}
    ></div>
  ));

  return (
    <section className="testimonials-section" id="testimonials">
      <h2 className="testimonials-title">
        Kind words from <span>satisfied clients</span>
      </h2>
      <div className="testimonials-container">
        <div className="testimonials-scrolling">{Testimonials}</div>
        <div className="testimonials-scrolling" aria-hidden>
          {Testimonials}
        </div>
      </div>
      <div className="logos"></div>
    </section>
  );
}
