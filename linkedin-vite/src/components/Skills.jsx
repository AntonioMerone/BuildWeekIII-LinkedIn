import { Card, Button } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import "../assets/css/Skills.css";

const Skills = () => {
  return (
    <Card className="skills-card mt-2">
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
          <p className="skills-category">
            Soft skill: come comunichi e collabori?
          </p>
          <p className="skills-category">
            Competenze tecniche: quali strumenti e tecnologie conosci?
          </p>
        </div>

        <Button variant="outline-primary" className="skills-add-btn">
          Aggiungi competenze
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Skills;
