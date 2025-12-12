import { Card, Button } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import "../assets/css/Skills.css";

const Skills = () => {
  return (
    <Card className="skills-card">
      <Card.Body>
        <div className="skills-header">
          <h3 className="skills-title">Competenze</h3>
          <Button variant="link" className="skills-close-btn">
            <FaTimes />
          </Button>
        </div>

        <p className="skills-desc">
          Fai capire se hai un profilo adatto per le nuove opportunità: il 50%
          dei recruiter usa i dati sulle competenze per coprire le posizioni
          aperte
        </p>

        <div className="skills-categories">
          <p className="skills-category">Soft skill: la lingua la usi?</p>
          <p className="skills-category">
            Competenze tecniche: quanti chinotti fai
          </p>
        </div>

        <Button variant="outline-primary" className="skills-add-btn">
          Aggiungi competenze: come quelle di tue mamma
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Skills;
