import { Card } from "react-bootstrap";
import { FaBookmark, FaListUl, FaPenSquare } from "react-icons/fa";
import { useSelector } from "react-redux";

const JobsSidebar = () => {
  const user = useSelector((state) => state.profileData);

  return (
    <div className="d-flex flex-column gap-2">
      <Card
        className="border-0 shadow-sm"
        style={{ borderRadius: "8px", overflow: "hidden" }}
      >
        <div
          style={{
            height: "60px",
            background: "linear-gradient(0deg, #d9e5e7 0%, #dbe4f3 100%)",
          }}
        />

        <Card.Body className="position-relative pt-0 pb-3 text-start">
          <div
            className="rounded-circle d-flex align-items-center justify-content-center border border-2 border-white shadow-sm"
            style={{
              width: "72px",
              height: "72px",
              backgroundColor: "#1c5198",
              color: "white",
              fontSize: "32px",
              position: "absolute",
              top: "-36px",
              left: "16px",
              fontWeight: "400",
            }}
          >
            {user.image ? (
              <img
                src={user.image}
                alt="Profile"
                className="rounded-circle"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : user.name ? (
              user.name.charAt(0).toUpperCase()
            ) : (
              "U"
            )}
          </div>

          <div style={{ marginTop: "45px", paddingLeft: "10px" }}>
            <div
              className="fw-bold"
              style={{ fontSize: "19px", color: "#000", marginBottom: "0px" }}
            >
              {user.name} {user.surname}
            </div>
            <div
              className="text-muted mb-2"
              style={{ fontSize: "14px", lineHeight: "1.4" }}
            >
              {user.title || "Studente presso Epicode - FullStack-WebDeveloper"}
            </div>
            <div
              className="text-muted"
              style={{ fontSize: "12px", color: "gray" }}
            >
              {user.area || "Desio, Lombardia"}
            </div>
          </div>
        </Card.Body>
      </Card>

      <Card className="border-0 shadow-sm" style={{ borderRadius: "8px" }}>
        <Card.Body className="p-0 py-2">
          <div
            className="d-flex align-items-center gap-3 px-3 py-3 sidebar-item"
            style={{ cursor: "pointer" }}
          >
            <FaListUl size={20} style={{ color: "#191919" }} />
            <span
              className="fw-bold"
              style={{ fontSize: "15px", color: "#191919" }}
            >
              Preferenze
            </span>
          </div>

          <div
            className="d-flex align-items-start gap-3 px-3 py-3 sidebar-item"
            style={{ cursor: "pointer" }}
          >
            <FaBookmark
              size={20}
              style={{ color: "#5e5e5e", marginTop: "3px" }}
            />
            <span
              className="fw-bold"
              style={{ fontSize: "15px", color: "#191919" }}
            >
              Le mie offerte di lavoro
            </span>
          </div>

          <hr className="my-2 text-muted" />

          <div
            className="d-flex align-items-start gap-3 px-3 py-3 sidebar-item"
            style={{ cursor: "pointer" }}
          >
            <FaPenSquare
              size={20}
              style={{ color: "#0a66c2", marginTop: "3px" }}
            />
            <span
              className="fw-bold"
              style={{ fontSize: "15px", color: "#0a66c2" }}
            >
              Pubblica offerta di lavoro gratuita
            </span>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default JobsSidebar;
