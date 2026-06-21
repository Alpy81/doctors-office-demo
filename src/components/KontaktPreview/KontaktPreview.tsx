import { NavLink } from "react-router-dom";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  ArrowRight,
  CalendarCheck,
} from "lucide-react";
import "./KontaktPreview.css";

const hours = [
  { day: "Montag", time: "09:00 - 15:00" },
  { day: "Dienstag", time: "09:00 - 15:00" },
  { day: "Mittwoch", time: "08:00 – 12:00" },
  { day: "Donnerstag", time: "09:00 – 15:00" },
  { day: "Freitag", time: "09:00 – 12:00" },
  { day: "Samstag", time: null },
  { day: "Sonntag", time: null },
];

export default function KontaktPreview() {
  return (
    <section className="kontakt-preview">
      <div className="container">
        <div className="kontakt-preview__inner">
          {/* Block 1 — Adresse */}
          <div className="kontakt-preview__block">
            <div className="kontakt-preview__block-header">
              <div className="kontakt-preview__block-icon">
                <MapPin size={20} />
              </div>
              <span className="kontakt-preview__block-label">Anschrift</span>
            </div>
            <div className="kontakt-preview__address">
              <span className="kontakt-preview__address-line">
                Praxis Docteur en Medicine/Univ. Oran Faycal Chadli
              </span>
              <span className="kontakt-preview__address-line">
                Alt-Fechenheim 76
              </span>
              <span className="kontakt-preview__address-sub">
                60386 Frankfurt a.M.
              </span>
            </div>
            <a
              href="https://maps.google.com/maps?q=Alt-Fechenheim+76,+60386+Frankfurt+am+Main"
              target="_blank"
              rel="noopener noreferrer"
              className="kontakt-preview__map-btn">
              Route planen <ArrowRight size={14} />
            </a>
          </div>

          <div className="kontakt-preview__divider" />

          {/* Block 2 — Öffnungszeiten */}
          <div className="kontakt-preview__block">
            <div className="kontakt-preview__block-header">
              <div className="kontakt-preview__block-icon">
                <Clock size={20} />
              </div>
              <span className="kontakt-preview__block-label">
                Öffnungszeiten
              </span>
            </div>
            <div className="kontakt-preview__hours">
              {hours.map((h) => (
                <div className="kontakt-preview__hour-row" key={h.day}>
                  <span className="kontakt-preview__hour-day">{h.day}</span>
                  <div className="kontakt-preview__hour-divider" />
                  {h.time ? (
                    <span className="kontakt-preview__hour-time">{h.time}</span>
                  ) : (
                    <span className="kontakt-preview__hour-closed">
                      Geschlossen
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="kontakt-preview__divider" />

          {/* Block 3 — Kontakt & CTA */}
          <div className="kontakt-preview__block">
            <div className="kontakt-preview__block-header">
              <div className="kontakt-preview__block-icon">
                <Phone size={20} />
              </div>
              <span className="kontakt-preview__block-label">Kontakt</span>
            </div>
            <div className="kontakt-preview__contacts">
              <div className="kontakt-preview__contact-item">
                <div className="kontakt-preview__contact-icon">
                  <Phone size={16} />
                </div>
                <div className="kontakt-preview__contact-info">
                  <span className="kontakt-preview__contact-label">
                    Telefon
                  </span>
                  <a
                    href="tel:+4969941392118"
                    className="kontakt-preview__contact-value">
                    +49 (69) 94 13 92 118
                  </a>
                </div>
              </div>
              <div className="kontakt-preview__contact-item">
                <div className="kontakt-preview__contact-icon">
                  <Mail size={16} />
                </div>
                <div className="kontakt-preview__contact-info">
                  <span className="kontakt-preview__contact-label">E-Mail</span>
                  <a
                    href="mailto:info@praxis-chadli.de"
                    className="kontakt-preview__contact-value">
                    info@praxis-chadli.de
                  </a>
                </div>
              </div>
            </div>
            <NavLink to="/kontakt" className="kontakt-preview__cta">
              <CalendarCheck size={18} />
              Termin vereinbaren
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}
