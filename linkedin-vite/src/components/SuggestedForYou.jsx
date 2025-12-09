import { Card, Button, Row, Col } from "react-bootstrap";
import { FaEye, FaChevronRight } from "react-icons/fa";
import "../assets/css/SuggestedForYou.css";

const SuggestionCard = ({ title, description, buttonText }) => (
  <div className="suggestion-card">
    <div className="suggestion-content">
      <h4 className="suggestion-title">{title}</h4>
      <p className="suggestion-desc">{description}</p>
    </div>
    <Button variant="outline-secondary" className="suggestion-btn">
      {buttonText}
    </Button>
  </div>
);

const SuggestedForYou = () => {
  return (
    <Card className="suggested-card">
      <Card.Body>
        <div className="suggested-header">
          <h3 className="suggested-title">Consigliato per te</h3>
          <span className="suggested-badge">
            <FaEye /> Solo per te
          </span>
        </div>

        <Row>
          <Col md={6}>
            <SuggestionCard
              title="In quale settore lavori?"
              description="Blablalalsdlaldasdadasdasdadasdas"
              buttonText="Aggiungi settore"
            />
          </Col>
          <Col md={6}>
            <SuggestionCard
              title="Aggiungi una foto al tuo profilo per aiutare gli altri a riconoscerti"
              description="sdasdafffffffffffasdasdasdqweqweqweeqwxadasdasda"
              buttonText="Aggiungi foto"
            />
          </Col>
        </Row>

        <button className="suggested-next-btn">
          <FaChevronRight />
        </button>
      </Card.Body>
    </Card>
  );
};

export default SuggestedForYou;
