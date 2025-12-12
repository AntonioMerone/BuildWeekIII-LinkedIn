import { Card, Button } from "react-bootstrap"
import { FaCamera, FaPencilAlt, FaPlus, FaCheckCircle } from "react-icons/fa"
import "../assets/css/ProfileHeader.css"

const ProfileHeader = ({ user }) => {
  return (
    <Card className="profile-header-card">
      <div className="profile-cover-container">
        <img
          src="https://placebear.com/800/200"
          alt="Cover"
          className="profile-cover-image"
        />
        <Button variant="light" className="profile-edit-cover-btn">
          <FaCamera /> Migliora l'immagine di copertina
        </Button>
      </div>

      <div className="profile-content">
        <div className="profile-photo-container">
          <img
            src={
              user.image && user.image !== ""
                ? user.image
                : "/default-avatar.png"
            }
            alt={user.name}
            className="profile-photo"
          />
          <button className="profile-add-photo-btn">
            <FaPlus />
          </button>
        </div>

        <Button variant="link" className="profile-edit-btn">
          <FaPencilAlt />
        </Button>

        <div className="profile-info">
          <div className="profile-name-section">
            <h1 className="profile-name">
              {user.name} {user.surname}{" "}
            </h1>
            <Button
              variant="outline-primary"
              size="sm"
              className="profile-verify-btn"
            >
              <FaCheckCircle /> Aggiungi badge di verifica
            </Button>
          </div>
          <p className="profile-headline">
            {user.bio ||
              "io mi descrivo come tu descrivi la descrizione che descrive il descrittore del descritto su scritto"}
          </p>
          <p className="profile-location">
            {user.area || "Neandertal      "}
            <a href="#" className="profile-contact-link ms-2">
              Informazioni di contatto
            </a>
          </p>
        </div>

        <div className="profile-actions">
          <Button variant="primary" className="profile-action-btn">
            Disponibile per
          </Button>
          <Button variant="outline-primary" className="profile-action-btn">
            Aggiungi sezione del profilo
          </Button>
          <Button variant="outline-secondary" className="profile-action-btn">
            Migliora profilo
          </Button>
          <Button variant="outline-secondary" className="profile-action-btn">
            Risorse
          </Button>
        </div>
      </div>
    </Card>
  )
}

export default ProfileHeader
