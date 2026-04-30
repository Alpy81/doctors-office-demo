import { NavLink } from "react-router-dom";
import {
  Heart,
  Users,
  Clock,
  Award,
  Smile,
  TrendingUp,
  Mail,
  ChevronRight,
  Briefcase,
  CalendarCheck,
} from "lucide-react";
import "./Karriere.css";
import praxisteam from "../../assets/images/praxisteam.jpg";

const benefits = [
  {
    icon: <Heart size={22} />,
    title: "Sinnvolle Arbeit",
    text: "Täglich einen echten Unterschied im Leben unserer Patienten machen — das ist unser Antrieb.",
  },
  {
    icon: <Users size={22} />,
    title: "Familiäres Team",
    text: "Ein kleines, eingespieltes Team mit offener Kommunikation und gegenseitigem Respekt.",
  },
  {
    icon: <Clock size={22} />,
    title: "Geregelte Arbeitszeiten",
    text: "Planbare Sprechzeiten ohne Nacht- oder Wochenenddienste — Beruf und Leben in Balance.",
  },
  {
    icon: <Award size={22} />,
    title: "Fachliche Weiterentwicklung",
    text: "Wir fördern Ihre berufliche und fachliche Entwicklung aktiv — mit Fortbildungen und Perspektive.",
  },
  {
    icon: <Smile size={22} />,
    title: "Wertschätzende Atmosphäre",
    text: "Bei uns sind Sie mehr als eine Personalnummer — Ihre Leistung wird gesehen und geschätzt.",
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Moderne Praxis",
    text: "Arbeiten Sie in einer neu eröffneten, modern ausgestatteten Praxis mit digitalem Workflow.",
  },
];

export default function Karriere() {
  return (
    <>
      {/* Hero */}
      <section className="karriere-hero">
        <div className="karriere-hero__bg">
          <img src={praxisteam} alt="Team Praxis Dr. Chadli" />
        </div>
        <div className="karriere-hero__overlay" />
        <div className="karriere-hero__deco">
          <div className="karriere-hero__deco-circle karriere-hero__deco-circle--1" />
          <div className="karriere-hero__deco-circle karriere-hero__deco-circle--2" />
        </div>
        <div className="karriere-hero__content">
          <div className="karriere-hero__breadcrumb">
            <NavLink to="/">Startseite</NavLink>
            <ChevronRight size={14} />
            <span>Karriere</span>
          </div>
          <div className="karriere-hero__tag">
            <Briefcase size={14} />
            Wir suchen Verstärkung
          </div>
          <h1 className="karriere-hero__title">
            Werden Sie Teil unseres Teams
          </h1>
          <p className="karriere-hero__subtitle">
            Die Praxis Dr. Chadli wächst — und wir suchen engagierte, herzliche
            Menschen, die unsere Leidenschaft für gute Medizin und persönliche
            Patientenbetreuung teilen.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="karriere-main">
        <div className="container">
          <div className="karriere-main__inner">
            {/* Content */}
            <div className="karriere-content">
              <p className="karriere-content__intro">
                Unsere Praxis in Frankfurt am Main ist ein Ort, an dem Medizin
                mit Herz praktiziert wird. Als wachsendes Team suchen wir
                motivierte Kolleginnen und Kollegen, die unsere Werte teilen:
                Empathie, Fachkompetenz und Freude an der Arbeit mit Menschen.
                Ob erfahren oder am Anfang Ihrer Karriere — bei uns sind Sie
                willkommen.
              </p>

              <div>
                <h2 className="karriere-content__section-title">
                  Was Sie bei uns erwartet
                </h2>
                <div className="karriere-benefits">
                  {benefits.map((b, i) => (
                    <div className="karriere-benefit" key={i}>
                      <div className="karriere-benefit__icon">{b.icon}</div>
                      <div className="karriere-benefit__body">
                        <h3 className="karriere-benefit__title">{b.title}</h3>
                        <p className="karriere-benefit__text">{b.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="karriere-content__section-title">
                  Wen wir suchen
                </h2>
                <p className="karriere-content__intro">
                  Wir freuen uns über Bewerbungen von medizinischen
                  Fachangestellten (MFA), Arzthelferinnen und -helfern sowie
                  Pflegefachkräften mit Interesse an der ambulanten Versorgung.
                  Auch Berufseinsteiger und Wiedereinsteiger sind herzlich
                  eingeladen, sich bei uns zu melden. Initiativbewerbungen sind
                  jederzeit willkommen.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="karriere-sidebar">
              {/* CTA Card */}
              <div className="karriere-sidebar__card karriere-sidebar__card--cta">
                <h3 className="karriere-sidebar__title">Jetzt bewerben</h3>
                <p className="karriere-sidebar__text">
                  Schicken Sie uns Ihre Bewerbung — wir freuen uns auf Sie und
                  melden uns schnellstmöglich bei Ihnen.
                </p>
                <a
                  href="mailto:kontakt@praxis-chadli.de?subject=Bewerbung"
                  className="karriere-sidebar__btn">
                  <Mail size={17} />
                  Jetzt bewerben
                </a>
              </div>

              {/* Kontakt Card */}
              <div className="karriere-sidebar__card">
                <h3 className="karriere-sidebar__title">Haben Sie Fragen?</h3>
                <p className="karriere-sidebar__text">
                  Wir beantworten Ihre Fragen gerne persönlich — per Telefon
                  oder über unser Kontaktformular.
                </p>
                <NavLink
                  to="/kontakt"
                  className="karriere-sidebar__btn"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-primary), var(--color-primary-light))",
                    boxShadow: "0 6px 20px rgba(26, 58, 107, 0.30)",
                  }}>
                  <CalendarCheck size={17} />
                  Zum Kontaktformular
                </NavLink>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
