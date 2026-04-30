import { useState, useRef } from "react";
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
  Send,
} from "lucide-react";
import "./Karriere.css";
import "../../pages/Kontakt/Kontakt.css";
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
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const [files, setFiles] = useState<FileList | null>(null);
  const [dragOver, setDragOver] = useState(false);

  const [formData, setFormData] = useState({
    vorname: "",
    nachname: "",
    email: "",
    telefon: "",
    position: "",
    eintrittstermin: "",
    nachricht: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShowForm = () => {
    setShowForm(true);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
                <button
                  onClick={handleShowForm}
                  className="karriere-sidebar__btn"
                  style={{ border: "none", cursor: "pointer" }}>
                  <Mail size={17} />
                  Jetzt bewerben
                </button>
              </div>

              {/* Kontakt Card */}
              <div className="karriere-sidebar__card">
                <h3 className="karriere-sidebar__title">Haben Sie Fragen?</h3>
                <p className="karriere-sidebar__text">
                  Wir beantworten Ihre Fragen gerne persönlich — über unser
                  Kontaktformular.
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

      {/* Bewerbungsformular */}
      {showForm && (
        <div
          ref={formRef}
          style={{
            background: "var(--color-bg)",
            paddingBlock: "var(--space-3xl)",
          }}>
          <div className="container">
            <h2
              className="karriere-content__section-title"
              style={{ marginBottom: "var(--space-lg)" }}>
              Ihre Bewerbung
            </h2>
            {submitted ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "var(--space-2xl)",
                  background: "var(--color-white)",
                  borderRadius: "var(--radius-lg)",
                  boxShadow: "var(--shadow-sm)",
                  maxWidth: "760px",
                }}>
                <div
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    background: "rgba(74,184,216,0.12)",
                    color: "var(--color-secondary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
                    margin: "0 auto var(--space-md)",
                  }}>
                  ✓
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "var(--fs-lg)",
                    color: "var(--color-primary)",
                    marginBottom: "var(--space-sm)",
                  }}>
                  Vielen Dank für Ihre Bewerbung!
                </h3>
                <p
                  style={{ color: "var(--color-text-light)", lineHeight: 1.8 }}>
                  Wir haben Ihre Unterlagen erhalten und melden uns so schnell
                  wie möglich bei Ihnen.
                </p>
              </div>
            ) : (
              <div
                className="kontakt-form"
                style={{
                  maxWidth: "760px",
                  border: "1.5px solid rgba(74, 184, 216, 0.35)",
                  borderRadius: "var(--radius-lg)",
                }}>
                <div className="kontakt-form__row">
                  <div className="kontakt-form__group">
                    <label className="kontakt-form__label">Vorname *</label>
                    <input
                      className="kontakt-form__input"
                      type="text"
                      name="vorname"
                      placeholder="Ihr Vorname"
                      value={formData.vorname}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="kontakt-form__group">
                    <label className="kontakt-form__label">Nachname *</label>
                    <input
                      className="kontakt-form__input"
                      type="text"
                      name="nachname"
                      placeholder="Ihr Nachname"
                      value={formData.nachname}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="kontakt-form__row">
                  <div className="kontakt-form__group">
                    <label className="kontakt-form__label">E-Mail *</label>
                    <input
                      className="kontakt-form__input"
                      type="email"
                      name="email"
                      placeholder="ihre@email.de"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="kontakt-form__group">
                    <label className="kontakt-form__label">Telefon</label>
                    <input
                      className="kontakt-form__input"
                      type="tel"
                      name="telefon"
                      placeholder="+49 000 000 000"
                      value={formData.telefon}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="kontakt-form__row">
                  <div className="kontakt-form__group">
                    <label className="kontakt-form__label">
                      Ich bewerbe mich als *
                    </label>
                    <select
                      className="kontakt-form__select"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}>
                      <option value="">Bitte wählen...</option>
                      <option value="mfa">
                        Medizinische Fachangestellte (MFA)
                      </option>
                      <option value="pflege">Pflegefachkraft</option>
                      <option value="arzthilfe">
                        Arzthelferin / Arzthelfer
                      </option>
                      <option value="sonstiges">Sonstiges</option>
                    </select>
                  </div>
                  <div className="kontakt-form__group">
                    <label className="kontakt-form__label">
                      Gewünschter Eintrittstermin
                    </label>
                    <input
                      className="kontakt-form__input"
                      type="text"
                      name="eintrittstermin"
                      placeholder="z. B. ab sofort / 01.06.2025"
                      value={formData.eintrittstermin}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="kontakt-form__group">
                  <label className="kontakt-form__label">
                    Anschreiben / Nachricht *
                  </label>
                  <textarea
                    className="kontakt-form__textarea"
                    name="nachricht"
                    placeholder="Erzählen Sie uns etwas über sich..."
                    value={formData.nachricht}
                    onChange={handleChange}
                  />
                </div>
                <div className="kontakt-form__group">
                  <label className="kontakt-form__label">
                    Unterlagen hochladen
                  </label>
                  <div
                    onDragOver={(e) => {
                      e.preventDefault();
                      setDragOver(true);
                    }}
                    onDragLeave={() => setDragOver(false)}
                    onDrop={(e) => {
                      e.preventDefault();
                      setFiles(e.dataTransfer.files);
                      setDragOver(false);
                    }}
                    style={{
                      border: `2px dashed ${
                        dragOver
                          ? "var(--color-secondary)"
                          : "var(--color-neutral-light)"
                      }`,
                      borderRadius: "var(--radius-md)",
                      padding: "var(--space-xl)",
                      textAlign: "center",
                      background: dragOver
                        ? "rgba(74,184,216,0.05)"
                        : "var(--color-white)",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      document.getElementById("file-upload")?.click()
                    }>
                    <input
                      id="file-upload"
                      type="file"
                      multiple
                      accept=".pdf,.doc,.docx"
                      style={{ display: "none" }}
                      onChange={(e) => setFiles(e.target.files)}
                    />
                    <div
                      style={{
                        color: "var(--color-secondary)",
                        marginBottom: "8px",
                      }}>
                      📎
                    </div>
                    <p
                      style={{
                        fontSize: "var(--fs-sm)",
                        color: "var(--color-primary)",
                        fontWeight: 600,
                      }}>
                      Dateien hier ablegen oder klicken zum Auswählen
                    </p>
                    <p
                      style={{
                        fontSize: "var(--fs-xs)",
                        color: "var(--color-text-light)",
                        marginTop: "4px",
                      }}>
                      PDF, DOC, DOCX — max. 10 MB pro Datei
                    </p>
                    {files && files.length > 0 && (
                      <div
                        style={{
                          marginTop: "var(--space-sm)",
                          display: "flex",
                          flexDirection: "column",
                          gap: "4px",
                        }}>
                        {Array.from(files).map((file, i) => (
                          <span
                            key={i}
                            style={{
                              fontSize: "var(--fs-xs)",
                              color: "var(--color-secondary)",
                              background: "rgba(74,184,216,0.10)",
                              padding: "4px 10px",
                              borderRadius: "var(--radius-full)",
                              display: "inline-block",
                            }}>
                            ✓ {file.name}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <p className="kontakt-form__note">
                  * Pflichtfelder. Ihre Daten werden vertraulich behandelt und
                  nicht an Dritte weitergegeben.
                </p>
                <button className="kontakt-form__submit" onClick={handleSubmit}>
                  <Send size={17} />
                  Bewerbung absenden
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
