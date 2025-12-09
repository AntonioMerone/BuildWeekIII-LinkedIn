import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "./ProfileFooter.css";

function ProfileFooter() {
  return (
    <footer className="linkedin-footer mt-5">
      <Container>
        <Row>
          <Col xs={6} md={2}>
            <a href="#" className="footer-link">
              Informazioni
            </a>
            <a href="#" className="footer-link">
              Informativa sulla community professionale
            </a>
            <a href="#" className="footer-link">
              Privacy e condizioni ▾
            </a>
            <a href="#" className="footer-link">
              Sales Solutions
            </a>
            <a href="#" className="footer-link">
              Centro sicurezza
            </a>
          </Col>

          <Col xs={6} md={2}>
            <a href="#" className="footer-link">
              Accessibilità
            </a>
            <a href="#" className="footer-link">
              Carriera
            </a>
            <a href="#" className="footer-link">
              Opzioni per gli annunci pubblicitari
            </a>
            <a href="#" className="footer-link">
              Mobile
            </a>
          </Col>

          <Col xs={6} md={2}>
            <a href="#" className="footer-link">
              Talent Solutions
            </a>
            <a href="#" className="footer-link">
              Soluzioni di marketing
            </a>
            <a href="#" className="footer-link">
              Pubblicità
            </a>
            <a href="#" className="footer-link">
              Piccole imprese
            </a>
          </Col>

          <Col xs={12} md={3}>
            <div className="mb-3">
              <div className="footer-section-title">Domande?</div>
              <div className="footer-section-subtitle">
                Visita il nostro Centro assistenza.
              </div>
            </div>

            <div className="mb-3">
              <div className="footer-section-title">
                Gestisci il tuo account e la tua privacy
              </div>
              <div className="footer-section-subtitle">
                Vai alle impostazioni
              </div>
            </div>

            <div className="mb-3">
              <div className="footer-section-title">
                Trasparenza sui contenuti consigliati
              </div>
              <div className="footer-section-subtitle">
                Scopri di più sui contenuti consigliati.
              </div>
            </div>
          </Col>

          <Col xs={12} md={3}>
            <Form.Group>
              <Form.Label className="language-label">
                Seleziona lingua
              </Form.Label>
              <Form.Select className="language-select">
                <option>Italiano (Italiano)</option>
                <option>English (English)</option>
                <option>Español (Spagnolo)</option>
                <option>Français (Francese)</option>
                <option>Deutsch (Tedesco)</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col className="copyright-text">
            LinkedIn Corporation © {new Date().getFullYear()}
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default ProfileFooter;
