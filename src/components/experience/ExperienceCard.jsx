import "./ExperienceCard.css";

export default function ExperienceCard({ data }) {
  return (
    <div className="experience-card">
      <div className="experience-profile">
        <img
          src={data.picture}
          alt="experience picture"
          className="experience-picture"
        />
        <div className="experience-info">
          <h2 className="experience-title">{data.title}</h2>
          <p className="experience-description">{data.description}</p>
        </div>
      </div>
    </div>
  );
}
