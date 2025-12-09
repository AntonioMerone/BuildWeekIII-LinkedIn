import { Card, Button } from 'react-bootstrap';
import { FaTimes, FaUniversity } from 'react-icons/fa';
import '../assets/css/Education.css';

const EducationItem = ({ school, degree, period }) => (
  <div className="education-item">
    <div className="education-icon"><FaUniversity /></div>
    <div>
      <h4 className="education-item-school">{school}</h4>
      <p className="education-item-degree">{degree}</p>
      <p className="education-item-period">{period}</p>
    </div>
  </div>
);

const Education = () => {
  return (
    <Card className="education-card">
      <Card.Body>
        <div className="education-header">
          <h3 className="education-title">Formazione</h3>
          <Button variant="link" className="education-close-btn"><FaTimes /></Button>
        </div>
        
        <p className="education-desc">
          Mostrando le tue qualifiche avrai fino a 2 volte più probabilità di ricevere un messaggio InMail da un recruiter
        </p>
        
        <EducationItem school="Scuola o università" degree="Laurea, campo di studi" period="2019 - 2023" />
        
        <Button variant="outline-primary" className="education-add-btn">Aggiungi titolo di studio</Button>
      </Card.Body>
    </Card>
  );
};

export default Education;
