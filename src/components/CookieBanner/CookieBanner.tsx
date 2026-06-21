import { NavLink } from "react-router-dom";
import "./CookieBanner.css";

interface Props {
  onAccept: () => void;
  onDecline: () => void;
}

export default function CookieBanner({ onAccept, onDecline }: Props) {
  return (
    <div className="cookie-banner">
      <div className="cookie-banner__inner">
        <span className="cookie-banner__icon">🍪</span>

        <div className="cookie-banner__text">
          <h3 className="cookie-banner__title">Wir verwenden Cookies</h3>
          <p className="cookie-banner__description">
            Diese Website verwendet Cookies, um Ihnen die bestmögliche Erfahrung
            zu bieten. Durch die Nutzung unserer Website stimmen Sie der
            Verwendung von Cookies gemäß unserer{" "}
            <NavLink to="/datenschutz">Datenschutzerklärung</NavLink> zu.
          </p>
        </div>

        <div className="cookie-banner__actions">
          <button
            className="cookie-banner__btn cookie-banner__btn--decline"
            onClick={onDecline}>
            Nur notwendige
          </button>
          <button
            className="cookie-banner__btn cookie-banner__btn--accept"
            onClick={onAccept}>
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
