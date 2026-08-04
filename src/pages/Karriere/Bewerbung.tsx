import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Send, ChevronRight, FileText } from "lucide-react";
import "../Kontakt/Kontakt.css";
import "./Karriere.css";

export default function Bewerbung() {
  const [submitted, setSubmitted] = useState(false);
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
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="karriere-hero">
        <div className="karriere-hero__overlay" />
        <div className="karriere-hero__deco">
          <div className="karriere-hero__deco-circle karriere-hero__deco-circle--1" />
          <div className="karriere-hero__deco-circle karriere-hero__deco-circle--2" />
        </div>
        <div className="karriere-hero__content">
          <div className="karriere-hero__breadcrumb">
            <NavLink to="/">Startseite</NavLink>
            <ChevronRight size={14} />
            <NavLink to="/karriere">Karriere</NavLink>
            <ChevronRight size={14} />
            <span>Bewerbung</span>
          </div>
          <div className="karriere-hero__tag">
            <FileText size={14} />
            Online-Bewerbung
          </div>
          <h1 className="karriere-hero__title">Ihre Bewerbung</h1>
          <p className="karriere-hero__subtitle">
            Füllen Sie das Formular aus und laden Sie Ihre Unterlagen hoch — wir
            melden uns so schnell wie möglich bei Ihnen.
          </p>
        </div>
      </section>

      {/* Formular */}
      <section
        style={{
          background: "var(--color-bg)",
          paddingBlock: "var(--space-3xl)",
        }}
      >
        <div className="container">
          {submitted ? (
            <div
              style={{
                textAlign: "center",
                padding: "var(--space-2xl)",
                background: "var(--color-white)",
                borderRadius: "var(--radius-lg)",
                boxShadow: "var(--shadow-sm)",
                maxWidth: "760px",
                marginInline: "auto",
              }}
            >
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
                }}
              >
                ✓
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "var(--fs-lg)",
                  color: "var(--color-primary)",
                  marginBottom: "var(--space-sm)",
                }}
              >
                Vielen Dank für Ihre Bewerbung!
              </h3>
              <p style={{ color: "var(--color-text-light)", lineHeight: 1.8 }}>
                Wir haben Ihre Unterlagen erhalten und melden uns so schnell wie
                möglich bei Ihnen.
              </p>
              <NavLink
                to="/karriere"
                style={{
                  display: "inline-flex",
                  marginTop: "var(--space-lg)",
                  color: "var(--color-secondary)",
                  fontWeight: 600,
                  fontSize: "var(--fs-sm)",
                  textDecoration: "none",
                }}
              >
                ← Zurück zur Karriereseite
              </NavLink>
            </div>
          ) : (
            <div
              className="kontakt-form"
              style={{
                maxWidth: "760px",
                marginInline: "auto",
                border: "1.5px solid rgba(74, 184, 216, 0.35)",
                borderRadius: "var(--radius-lg)",
              }}
            >
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
                    onChange={handleChange}
                  >
                    <option value="">Bitte wählen...</option>
                    <option value="arzt-weiterbildung">
                      Arzt/Ärztin in Weiterbildung (Innere Medizin)
                    </option>
                    <option value="mfa">
                      Medizinische Fachangestellte (MFA)
                    </option>
                    <option value="azubi-mfa">
                      Auszubildende/r zur/zum MFA
                    </option>
                    <option value="napa">
                      Nichtärztliche/r Praxisassistent/-in (NäPA)
                    </option>
                    <option value="diabetesberater">
                      Diabetesberater/-in DDG
                    </option>
                    <option value="diabetesassistent">
                      Diabetesassistent/-in DDG
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
                  }
                >
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
                    }}
                  >
                    📎
                  </div>
                  <p
                    style={{
                      fontSize: "var(--fs-sm)",
                      color: "var(--color-primary)",
                      fontWeight: 600,
                    }}
                  >
                    Dateien hier ablegen oder klicken zum Auswählen
                  </p>
                  <p
                    style={{
                      fontSize: "var(--fs-xs)",
                      color: "var(--color-text-light)",
                      marginTop: "4px",
                    }}
                  >
                    PDF, DOC, DOCX — max. 10 MB pro Datei
                  </p>
                  {files && files.length > 0 && (
                    <div
                      style={{
                        marginTop: "var(--space-sm)",
                        display: "flex",
                        flexDirection: "column",
                        gap: "4px",
                      }}
                    >
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
                          }}
                        >
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
      </section>
    </>
  );
}
