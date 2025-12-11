import React from "react";
import "./HomeFooter.css";

const HomeFooter = () => {
  // SVG per la freccina verso il basso (riutilizzabile)
  const ArrowIcon = () => (
    <svg
      className="icon-arrow"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 11L3 6h10z" />
    </svg>
  );

  return (
    <footer className="ln-footer">
      <hr />
      <ul className="ln-links">
        <li>
          <a href="#info">Informazioni</a>
        </li>
        <li>
          <a href="#accessibility">Accessibilità</a>
        </li>
        <li>
          <a href="#help">Centro assistenza</a>
        </li>

        {/* Link con dropdown */}
        <li>
          <a href="#privacy">Privacy e condizioni</a>
        </li>

        <li>
          <a href="#ad-choices">Opzioni per gli annunci pubblicitari</a>
        </li>
        <li>
          <a href="#advertising">Pubblicità</a>
        </li>

        {/* Link con dropdown */}
        <li>
          <a href="#business">Servizi alle aziende</a>
        </li>

        <li>
          <a href="#mobile">Scarica l'app LinkedIn</a>
        </li>
        <li>
          <a href="#more">Altro</a>
        </li>
      </ul>

      <div className="ln-copyright">
        <span className="logo-text">Linked</span>
        <span className="logo-icon">in</span>
        <span className="copy-text"> LinkedIn Corporation © 2025</span>
      </div>
    </footer>
  );
};

export default HomeFooter;
