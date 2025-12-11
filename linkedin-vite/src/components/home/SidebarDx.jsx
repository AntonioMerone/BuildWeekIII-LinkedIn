import { Card } from "react-bootstrap"
// import "../assets/css/RightSidebar.css"

function SidebarDx() {
  return (
    <Card className="p-3 rounded-3 shadow-sm">
      {/* TITOLO */}
      <h6 className="fw-bold mb-3">LinkedIn Notizie</h6>

      {/* LISTA NOTIZIE */}
      <ul className="list-unstyled mb-1">
        <li className="mb-2">
          <a
            href="#"
            className="fw-semibold text-dark text-decoration-none small"
          >
            La cucina italiana è patrimonio Unesco
          </a>
          <div className="small text-muted">17h fa • 7.170 lettori</div>
        </li>

        <li className="mb-2">
          <a
            href="#"
            className="fw-semibold text-dark text-decoration-none small"
          >
            In malattia con la televisita
          </a>
          <div className="small text-muted">1 giorno fa • 660 lettori</div>
        </li>

        <li className="mb-2">
          <a
            href="#"
            className="fw-semibold text-dark text-decoration-none small"
          >
            Mediaset acquisisce Radio Norba
          </a>
          <div className="small text-muted">1 giorno fa • 637 lettori</div>
        </li>

        <li className="mb-2">
          <a
            href="#"
            className="fw-semibold text-dark text-decoration-none small"
          >
            Com'è andato alla fine il Black Friday
          </a>
          <div className="small text-muted">1 giorno fa • 533 lettori</div>
        </li>

        <li className="mb-3">
          <a
            href="#"
            className="fw-semibold text-dark text-decoration-none small"
          >
            La Bei finanzia Scalapay
          </a>
          <div className="small text-muted">1 giorno fa • 412 lettori</div>
        </li>
      </ul>

      {/* VISUALIZZA ALTRO */}
      <a href="#" className="small fw-semibold text-muted text-decoration-none">
        Visualizza altro ▼
      </a>

      {/* ROMPICAPO */}
      <h6 className="fw-bold my-3 text-secondary">I rompicapo di oggi</h6>

      <div className="d-flex align-items-center mb-3">
        <div className="me-2">
          <img src="https://picsum.photos/32" alt="icon" className="rounded" />
        </div>
        <div className="flex-grow-1">
          <div className="fw-semibold small">Zip #269</div>
          <div className="text-muted small">Completa il percorso</div>
        </div>
        <i className="bi bi-chevron-right"></i>
      </div>

      <div className="d-flex align-items-center mb-3">
        <div className="me-2">
          <img
            src="https://picsum.photos/32?2"
            alt="icon"
            className="rounded"
          />
        </div>
        <div className="flex-grow-1">
          <div className="fw-semibold small">Mini Sudoku #122</div>
          <div className="text-muted small">
            Il gioco classico, in versione mini
          </div>
        </div>
        <i className="bi bi-chevron-right"></i>
      </div>

      <div className="d-flex align-items-center mb-3">
        <div className="me-2">
          <img
            src="https://picsum.photos/32?3"
            alt="icon"
            className="rounded"
          />
        </div>
        <div className="flex-grow-1">
          <div className="fw-semibold small">Tango #430</div>
          <div className="text-muted small">Armonizza la griglia</div>
        </div>
        <i className="bi bi-chevron-right"></i>
      </div>

      <div className="d-flex align-items-center">
        <div className="me-2">
          <img
            src="https://picsum.photos/32?4"
            alt="icon"
            className="rounded"
          />
        </div>
        <div className="flex-grow-1">
          <div className="fw-semibold small">Queens #590</div>
          <div className="text-muted small">Incorona ogni regione</div>
        </div>
        <i className="bi bi-chevron-right"></i>
      </div>
    </Card>
  )
}

export default SidebarDx
