import { Card, Button } from 'react-bootstrap';
import { FaPencilAlt, FaArrowRight } from 'react-icons/fa';
import '../assets/css/Activity.css';

const Activity = ({ followers = 0 }) => {
  return (
    <Card className="activity-card">
      <Card.Body>
        <div className="activity-header">
          <div className="activity-title-section">
            <h3 className="activity-title">Attività</h3>
            <a href="#" className="activity-followers">{followers} follower</a>
          </div>
          <div className="activity-actions">
            <Button variant="outline-primary" className="activity-create-btn">Crea un post</Button>
            <Button variant="link" className="activity-edit-btn"><FaPencilAlt /></Button>
          </div>
        </div>
        
        <div className="activity-no-content">
          <p className="activity-no-title">Non hai ancora pubblicato nulla</p>
          <p className="activity-no-desc">I post che condividi appariranno qui</p>
        </div>
        
        <a href="#" className="activity-link">Mostra tutte le attività <FaArrowRight /></a>
      </Card.Body>
    </Card>
  );
};

export default Activity;
