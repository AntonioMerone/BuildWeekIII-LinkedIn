import { Card, Button } from "react-bootstrap";
import { FaTimes, FaBriefcase } from "react-icons/fa";
import "../assets/css/Experience.css";

const ExperienceItem = ({ title, company, period }) => (
  <div className="experience-item">
    <div className="experience-icon">
      <FaBriefcase />
    </div>
    <div>
      <h4 className="experience-item-title">{title}</h4>
      <p className="experience-item-company">{company}</p>
      <p className="experience-item-period">{period}</p>
    </div>
  </div>
);

const Experience = () => {
  return (
    <Card className="experience-card mt-2">
      <Card.Body>
        <div className="experience-header">
          <h3 className="experience-title">Esperienza</h3>
          <Button variant="link" className="experience-close-btn">
            <FaTimes />
          </Button>
        </div>

        <p className="experience-desc">
          Metti in risalto i risultati raggiunti e ottieni fino a 2 volte più
          visualizzazioni del profilo e collegamenti
        </p>

        <ExperienceItem
          title="Qualifica"
          company="Organizzazione"
          period="2023 - Presente"
        />

        <Button variant="outline-primary" className="experience-add-btn">
          Aggiungi esperienza
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Experience;
