import { X, Phone } from "lucide-react";
import "./VacationPopup.css";
import { ANNOUNCEMENTS } from "../../config/announcements";

interface Props {
  onClose: () => void;
}

export default function VacationPopup({ onClose }: Props) {
  const { vacation } = ANNOUNCEMENTS;

  if (!vacation.active) return null;

  return (
    <div className="vacation-popup__backdrop" onClick={onClose}>
      <div className="vacation-popup" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="vacation-popup__header">
          <div className="vacation-popup__header-left">
            <span className="vacation-popup__icon">{vacation.icon}</span>
            <h2 className="vacation-popup__title">{vacation.title}</h2>
          </div>
          <button
            className="vacation-popup__close"
            onClick={onClose}
            aria-label="Schließen">
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="vacation-popup__body">
          <p className="vacation-popup__message">{vacation.message}</p>

          <div className="vacation-popup__emergency">
            <div className="vacation-popup__emergency-icon">
              <Phone size={18} />
            </div>
            <div className="vacation-popup__emergency-text">
              <strong>Ärztlicher Bereitschaftsdienst</strong>
              Bei medizinischen Notfällen wählen Sie bitte die kostenfreie
              Rufnummer <strong>116 117</strong> oder im Notfall{" "}
              <strong>112</strong>.
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="vacation-popup__footer">
          <button className="vacation-popup__btn" onClick={onClose}>
            Verstanden
          </button>
        </div>
      </div>
    </div>
  );
}
