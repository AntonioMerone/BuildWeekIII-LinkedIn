import { Card } from "react-bootstrap"
import {
  FaPlus,
  FaBookmark,
  FaUsers,
  FaNewspaper,
  FaCalendarAlt,
  FaChevronDown,
} from "react-icons/fa"
import "../../assets/css/LeftSidebar.css"
import { useSelector } from "react-redux"

function MiniProfileCard() {
  const user = useSelector((state) => state.profileData)

  return (
    <Card className="mini-profile-card">
      <img
        src="https://picsum.photos/326"
        alt="Cover"
        className="mini-profile-cover"
      />
      <div className="mini-profile-content">
        <div className="mini-profile-add-btn">
          <img
            src={
              user.image && user.image !== ""
                ? user.image
                : "/default-avatar.png"
            }
            alt={user.name}
            className="mini-profile-photo"
          />
          <span className="mini-profile-add-icon">
            <FaPlus size={10} />
          </span>
        </div>
        <a href="#" className="mini-profile-name">
          {user.name} {user.surname}
        </a>
        <p className="mini-profile-location fs-6">{user.title}</p>
        <p className="mini-profile-location mt-1">{user.area}</p>
      </div>
      <a href="#" className="mini-profile-link">
        <FaPlus /> Esperienza
      </a>
    </Card>
  )
}

const ConnectionsCard = () => (
  <Card className="sidebar-menu-card">
    <a href="#" className="sidebar-menu-item">
      <div>
        <div className="sidebar-menu-item-left">Collegamenti</div>
        <div className="sidebar-menu-subtitle">Espandi la tua rete</div>
      </div>
      <FaChevronDown size={12} />
    </a>
  </Card>
)

const PremiumCard = () => (
  <Card className="premium-card">
    <p className="premium-text">Sblocca strumenti e informazioni Premium</p>
    <a href="#" className="premium-link">
      <span className="premium-icon" />
      Prova Premium per 0 EUR
    </a>
  </Card>
)

const NavItemsCard = () => (
  <Card className="sidebar-nav-card">
    <a href="#" className="sidebar-nav-item">
      <FaBookmark className="sidebar-nav-icon" />
      Elementi salvati
    </a>
    <a href="#" className="sidebar-nav-item">
      <FaUsers className="sidebar-nav-icon" />
      Gruppi
    </a>
    <a href="#" className="sidebar-nav-item">
      <FaNewspaper className="sidebar-nav-icon" />
      Newsletter
    </a>
    <a href="#" className="sidebar-nav-item">
      <FaCalendarAlt className="sidebar-nav-icon" />
      Eventi
    </a>
  </Card>
)

const LeftSidebar = ({ user }) => {
  return (
    <div className="left-sidebar">
      <MiniProfileCard user={user} />
      <ConnectionsCard />
      <PremiumCard />
      <NavItemsCard />
    </div>
  )
}

export default LeftSidebar
