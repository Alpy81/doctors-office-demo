import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  ChevronRight,
  Printer,
} from "lucide-react";
import "./Kontakt.css";

const hours = [
  { day: "Montag", time: "09:00 – 15:00 Uhr" },
  { day: "Dienstag", time: "09:00 – 15:00 Uhr" },
  { day: "Mittwoch", time: "08:00 – 12:00 Uhr" },
  { day: "Donnerstag", time: "09:00 – 15:00 Uhr" },
  { day: "Freitag", time: "08:00 – 12:00 Uhr" },
  { day: "Samstag", time: null },
  { day: "Sonntag", time: null },
];

export default function Kontakt() {
  const [formData, setFormData] = useState({
    vorname: "",
    nachname: "",
    email: "",
    telefon: "",
    anliegen: "",
    nachricht: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
      <section className="kontakt-hero">
        <div className="kontakt-hero__overlay" />
        <div className="kontakt-hero__deco">
          <div className="kontakt-hero__deco-circle kontakt-hero__deco-circle--1" />
          <div className="kontakt-hero__deco-circle kontakt-hero__deco-circle--2" />
        </div>
        <div className="kontakt-hero__content">
          <div className="kontakt-hero__breadcrumb">
            <NavLink to="/">Startseite</NavLink>
            <ChevronRight size={14} />
            <span>Kontakt</span>
          </div>
          <div className="kontakt-hero__tag">
            <Phone size={14} />
            Wir sind für Sie da
          </div>
          <h1 className="kontakt-hero__title">Kontakt & Terminvereinbarung</h1>
          <p className="kontakt-hero__subtitle">
            Sie haben Fragen oder möchten einen Termin vereinbaren? Schreiben
            Sie uns oder rufen Sie uns an — wir melden uns schnellstmöglich bei
            Ihnen.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="kontakt-main">
        <div className="container">
          <div className="kontakt-main__inner">
            {/* Formular */}
            <div>
              <h2 className="kontakt-form__title">Nachricht senden</h2>
              {submitted ? (
                <div
                  className="kontakt-form"
                  style={{
                    alignItems: "center",
                    textAlign: "center",
                    gap: "var(--space-lg)",
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
                    }}>
                    ✓
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "var(--fs-lg)",
                      color: "var(--color-primary)",
                    }}>
                    Vielen Dank für Ihre Nachricht!
                  </h3>
                  <p
                    style={{
                      fontSize: "var(--fs-base)",
                      color: "var(--color-text-light)",
                      lineHeight: 1.8,
                    }}>
                    Wir haben Ihre Anfrage erhalten und melden uns so schnell
                    wie möglich bei Ihnen.
                  </p>
                </div>
              ) : (
                <div className="kontakt-form">
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

                  <div className="kontakt-form__group">
                    <label className="kontakt-form__label">Ihr Anliegen</label>
                    <select
                      className="kontakt-form__select"
                      name="anliegen"
                      value={formData.anliegen}
                      onChange={handleChange}>
                      <option value="">Bitte wählen...</option>
                      <option value="termin">Terminvereinbarung</option>
                      <option value="hausaerztlich">
                        Hausärztliche Versorgung
                      </option>
                      <option value="diabetologie">Diabetologie</option>
                      <option value="dmp">DMP-Programm</option>
                      <option value="vorsorge">Vorsorge & Check-up</option>
                      <option value="igel">IGeL-Leistungen</option>
                      <option value="sonstiges">Sonstiges</option>
                    </select>
                  </div>

                  <div className="kontakt-form__group">
                    <label className="kontakt-form__label">
                      Ihre Nachricht *
                    </label>
                    <textarea
                      className="kontakt-form__textarea"
                      name="nachricht"
                      placeholder="Wie können wir Ihnen helfen?"
                      value={formData.nachricht}
                      onChange={handleChange}
                    />
                  </div>

                  <p className="kontakt-form__note">
                    * Pflichtfelder. Ihre Daten werden vertraulich behandelt und
                    nicht an Dritte weitergegeben.
                  </p>

                  <button
                    className="kontakt-form__submit"
                    onClick={handleSubmit}>
                    <Send size={17} />
                    Nachricht absenden
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="kontakt-sidebar">
              {/* Kontaktdaten */}
              <div className="kontakt-sidebar__card">
                <h3 className="kontakt-sidebar__title">Kontaktdaten</h3>
                <div className="kontakt-sidebar__items">
                  <div className="kontakt-sidebar__item">
                    <div className="kontakt-sidebar__icon">
                      <Phone size={18} />
                    </div>
                    <div className="kontakt-sidebar__item-body">
                      <span className="kontakt-sidebar__item-label">
                        Telefon
                      </span>
                      <a
                        href="tel:06941 2430"
                        className="kontakt-sidebar__item-value">
                        069 41 24 30
                      </a>
                    </div>
                  </div>

                  <div className="kontakt-sidebar__item">
                    <div className="kontakt-sidebar__icon">
                      <Printer size={18} />
                    </div>
                    <div className="kontakt-sidebar__item-body">
                      <span className="kontakt-sidebar__item-label">
                        Telefax
                      </span>
                      <span className="kontakt-sidebar__item-value">
                        069 94 13 92 118
                      </span>
                    </div>
                  </div>

                  <div className="kontakt-sidebar__item">
                    <div className="kontakt-sidebar__icon">
                      <Mail size={18} />
                    </div>
                    <div className="kontakt-sidebar__item-body">
                      <span className="kontakt-sidebar__item-label">
                        E-Mail
                      </span>
                      <a
                        href="mailto:kontakt@praxis-chadli.de"
                        className="kontakt-sidebar__item-value">
                        kontakt@praxis-chadli.de
                      </a>
                    </div>
                  </div>

                  <div className="kontakt-sidebar__item">
                    <div className="kontakt-sidebar__icon">
                      <MapPin size={18} />
                    </div>
                    <div className="kontakt-sidebar__item-body">
                      <span className="kontakt-sidebar__item-label">
                        Adresse
                      </span>
                      <span className="kontakt-sidebar__item-value">
                        Praxis Dr. Chadli
                        <br />
                        1. Obergeschoss
                        <br />
                        Alt-Fechenheim 76
                        <br />
                        60386 Frankfurt am Main
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sprechzeiten */}
              <div className="kontakt-sidebar__card">
                <h3 className="kontakt-sidebar__title">
                  <Clock
                    size={18}
                    style={{
                      display: "inline",
                      marginRight: "8px",
                      color: "var(--color-secondary)",
                    }}
                  />
                  Sprechzeiten
                </h3>
                <div className="kontakt-sidebar__hours">
                  {hours.map((h) => (
                    <div className="kontakt-sidebar__hour-row" key={h.day}>
                      <span className="kontakt-sidebar__hour-day">{h.day}</span>
                      {h.time ? (
                        <span className="kontakt-sidebar__hour-time">
                          {h.time}
                        </span>
                      ) : (
                        <span className="kontakt-sidebar__hour-closed">
                          Geschlossen
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          {/* Google Maps */}
          <div className="kontakt-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2557.947261984577!2d8.766419213180878!3d50.12470881064419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0e23906467f1%3A0xc660eb4b8319a7b6!2sAlt-Fechenheim%2076%2C%2060386%20Frankfurt%20am%20Main!5e0!3m2!1sde!2sde!4v1776809355850!5m2!1sde!2sde"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Praxis Dr. Chadli — Alt-Fechenheim 76, Frankfurt am Main"
            />
          </div>
        </div>
      </section>
    </>
  );
}
