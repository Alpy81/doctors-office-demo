import "./Team.css";
import arzt from "../../assets/images/arzt.jpg";
import aerztin from "../../assets/images/aerztin.jpg";
import mitarbeiterin from "../../assets/images/mitarbeiterin.jpg";

const team = [
  {
    image: arzt,
    alt: "Fayçal Chadli",
    role: "Facharzt & Praxisinhaber",
    name: "Fayçal Chadli",
    text: "„Gute Medizin beginnt für mich mit dem Zuhören. Ich nehme mir Zeit, Beschwerden zu verstehen, Zusammenhänge zu erkennen und gemeinsam mit meinen Patientinnen und Patienten den passenden Behandlungsweg zu finden.“",
    isQuote: true,
    tags: [
      "Facharzt für Innere Medizin",
      "Diabetologe",
      "Adiposiologe",
      "Hypertensiologe",
      "Notarzt",
    ],
  },
  {
    image: aerztin,
    alt: "Nawel Chiali",
    role: "Diabetesberaterin & Praxismanagerin",
    name: "Nawel Chiali",
    text: "„Diese Praxis ist für mich mehr als ein Arbeitsplatz. Sie ist ein Herzensprojekt, in dem ich Menschen mit Wissen, Zeit und persönlicher Begleitung unterstützen möchte.“",
    isQuote: true,
    tags: [
      "Diabetesberaterin DDG",
      "M.Sc. Ernährungswissenschaften",
      "Praxismanagerin",
    ],
  },

  {
    image: mitarbeiterin,
    role: "Unser Praxisteam",
    name: "Gemeinsam für Sie da.",
    text: "Mit Herz, Kompetenz und Respekt – für Sie da.",
    isQuote: true,
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
          <h2 className="team__title">Lernen Sie unser Team kennen</h2>
          <p className="team__subtitle">
            Zeit. Zuhören. Vertrauen. Darauf bauen wir unsere Medizin auf.
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
                <p
                  className={`team__card-text ${member.isQuote ? "team__card-text--quote" : ""}`}
                >
                  {member.text}
                </p>
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
