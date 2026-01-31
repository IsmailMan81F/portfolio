import "./Experience.css";
import ExperienceCard from "./ExperienceCard";
import { cards } from "./Dataset/dataset";

export default function Experience(params) {
  const cardList = cards.map((card, index) => (
    <ExperienceCard key={index} data={card} />
  ));
  return (
    <div className="experience-section">
      <h2 className="experience-header">
        My <span>work experince</span>
      </h2>
      <div className="experience-cards">{cardList}</div>
    </div>
  );
}
