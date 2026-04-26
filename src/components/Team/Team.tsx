import "./Team.css";
import arzt from "../../assets/images/arzt.jpg";
import aerztin from "../../assets/images/aerztin.jpg";
import mitarbeiterin from "../../assets/images/mitarbeiterin.jpg";

const team = [
  {
    image: arzt,
    alt: "Dr. Faycal Chadli",
    role: "Facharzt & Praxisinhaber",
    name: "Dr. med. Faycal Chadli",
    text: "Facharzt für Innere Medizin und zertifizierter Diabetologe. Mit langjähriger Erfahrung und tiefem Einfühlungsvermögen begleitet er seine Patienten auf dem Weg zu mehr Gesundheit und Lebensqualität.",
    tags: ["Diabetologie", "Innere Medizin", "DMP-Programme"],
  },
  {
    image: aerztin,
    alt: "Ärztin Dr. Chadli",
    role: "Fachärztin & Praxisinhaberin",
    name: "Dr. med. Chadli",
    text: "Als Fachärztin mit Herz und Kompetenz steht sie für eine ganzheitliche und empathische Patientenversorgung. Gemeinsam mit ihrem Mann führt sie die Praxis mit Leidenschaft und Engagement.",
    tags: ["Hausarzt", "Vorsorge", "Psychosomatik"],
  },
  {
    image: mitarbeiterin,
    alt: "Praxisteam",
    role: "Medizinische Fachangestellte",
    name: "Unser Praxisteam",
    text: "Unser freundliches und kompetentes Team empfängt Sie herzlich und sorgt dafür, dass Sie sich von der ersten Minute an gut aufgehoben fühlen.",
    tags: ["Empfang", "Organisation", "Betreuung"],
  },
];

export default function Team() {
  return (
    <section className="team">
      <div className="container">
        {/* Header */}
        <div className="team__header">
          <span className="team__tag">Unser Team</span>
          <h2 className="team__title">Menschen, denen Sie vertrauen können</h2>
          <p className="team__subtitle">
            Hinter jeder guten Praxis stehen Menschen mit Leidenschaft. Lernen
            Sie unser Team kennen — wir freuen uns auf Sie.
          </p>
        </div>

        {/* Grid */}
        <div className="team__grid">
          {team.map((member, i) => (
            <div className="team__card" key={i}>
              <div className="team__card-image">
                <img src={member.image} alt={member.alt} />
              </div>
              <div className="team__card-body">
                <span className="team__card-role">{member.role}</span>
                <h3 className="team__card-name">{member.name}</h3>
                <p className="team__card-text">{member.text}</p>
                <div className="team__card-divider" />
                <div className="team__card-tags">
                  {member.tags.map((tag) => (
                    <span className="team__card-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
