import { Card } from 'react-bootstrap';
import { FaEye, FaUsers, FaChartBar, FaArrowRight } from 'react-icons/fa';
import '../assets/css/Analytics.css';

const AnalyticItem = ({ icon: Icon, count, title, description }) => (
  <div className="analytics-item">
    <Icon className="analytics-icon" />
    <div className="analytics-content">
      <span className="analytics-count">{count} {title}</span>
      <span className="analytics-desc">{description}</span>
    </div>
  </div>
);

const Analytics = () => {
  return (
    <Card className="analytics-card">
      <Card.Body>
        <div className="analytics-header">
          <h3 className="analytics-title">Analisi</h3>
          <span className="analytics-badge"><FaEye /> Solo per te</span>
        </div>
        
        <div className="analytics-grid">
          <AnalyticItem 
            icon={FaUsers}
            count="0"
            title="visualizzazioni del profilo"
            description="Aggiorna il tuo profilo per attrarre visitatori."
          />
          <AnalyticItem 
            icon={FaChartBar}
            count="0"
            title="impressioni del post"
            description="Crea un post per aumentare l'interesse. Ultimi 7 giorni"
          />
        </div>
        
        <a href="#" className="analytics-link">Mostra tutte le analisi <FaArrowRight /></a>
      </Card.Body>
    </Card>
  );
};

export default Analytics;
