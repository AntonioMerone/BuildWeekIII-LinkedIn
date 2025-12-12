import { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaLinkedin,
  FaTimes,
  FaEllipsisH,
  FaArrowRight,
  FaIndustry,
  FaShieldAlt,
  FaShoppingBag,
  FaLayerGroup,
} from "react-icons/fa";

import MyNavbar from "../MyNavbar";
import JobsSidebar from "./JobsSidebar";

import HomeFooter from "../HomeFooter";

import {
  setJobsSearch,
  setJobsCompany,
  setJobsCategory,
} from "../../reducers/jobsReducer";

const JobCard = ({ job, isLast }) => {
  return (
    <div
      className={`d-flex justify-content-between align-items-start py-3 ${
        !isLast ? "border-bottom" : ""
      }`}
    >
      <div className="d-flex gap-3">
        <div
          style={{
            width: "56px",
            height: "56px",
            backgroundColor: "#f3f6f8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            color: "#0a66c2",
          }}
        >
          <FaBriefcase />
        </div>

        <div>
          <h6 className="m-0 fw-bold text-primary" style={{ fontSize: "16px" }}>
            <a
              href={job.url}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "#0a66c2" }}
            >
              {job.title}
            </a>
          </h6>
          <div style={{ fontSize: "14px", color: "#191919" }}>
            {job.company_name} • {job.candidate_required_location}
          </div>
          <div
            className="d-flex align-items-center gap-1 mt-1"
            style={{ fontSize: "12px", color: "#5e5e5e" }}
          >
            <span style={{ color: "#057642", fontWeight: "bold" }}>
              <FaLinkedin className="me-1" /> Candidatura semplice
            </span>
          </div>
          <div style={{ fontSize: "12px", color: "#5e5e5e", marginTop: "4px" }}>
            Promosso
          </div>
        </div>
      </div>

      <div className="d-flex align-items-center gap-2">
        <FaEllipsisH className="text-secondary" style={{ cursor: "pointer" }} />
        <FaTimes className="text-secondary" style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
};

const PremiumBanner = function () {
  const user = useSelector((state) => state.profileData);
  return (
    <Card
      className="mb-3 border-0 shadow-sm p-3"
      style={{ borderRadius: "8px" }}
    >
      <div className="d-flex align-items-start gap-3">
        <img
          style={{ width: "70px", borderRadius: "50%" }}
          src={
            user.image && user.image !== "" ? user.image : "/default-avatar.png"
          }
          alt=""
        />
        <div>
          <h5 className="fw-bold mb-1">
            Candidati in modo più smart con offerte di lavoro su misura per te
          </h5>
          <div className="text-muted mb-3" style={{ fontSize: "13px" }}>
            Milioni di utenti usano Premium
          </div>
          <Button
            variant="warning"
            className="fw-bold rounded-pill px-3 py-1 mb-2"
            style={{
              backgroundColor: "#f0b429",
              border: "none",
              color: "#333",
            }}
          >
            Prova Premium per 0 EUR
          </Button>
          <div style={{ fontSize: "12px", color: "gray" }}>
            1 mese gratis. Facile da annullare. Senza penali o sanzioni.
          </div>
        </div>
      </div>
    </Card>
  );
};

const CategoryExplorer = () => (
  <Card className="mb-3 border-0 shadow-sm p-3" style={{ borderRadius: "8px" }}>
    <h5 className="fw-bold mb-4">Esplora le categorie di offerte</h5>
    <div className="d-flex justify-content-between text-center px-2">
      <div>
        <FaIndustry size={24} className="text-primary mb-2" />
        <div className="fw-bold" style={{ fontSize: "14px" }}>
          Industria ...
        </div>
      </div>
      <div>
        <FaShieldAlt size={24} className="text-warning mb-2" />
        <div className="fw-bold text-secondary" style={{ fontSize: "14px" }}>
          Difesa e spazio
        </div>
      </div>
      <div>
        <FaShoppingBag size={24} className="text-info mb-2" />
        <div className="fw-bold text-secondary" style={{ fontSize: "14px" }}>
          Retail
        </div>
      </div>
      <div>
        <FaLayerGroup size={24} className="text-secondary mb-2" />
        <div className="fw-bold text-secondary" style={{ fontSize: "14px" }}>
          Altro
        </div>
      </div>
    </div>
  </Card>
);

export default function Jobs() {
  const dispatch = useDispatch();

  const jobsResults = useSelector((state) => state.jobs.results);
  const companyJobs = useSelector((state) => state.jobs.companyJobs);
  const categoryJobs = useSelector((state) => state.jobs.categoryJobs);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM5NGU2OTYwMWIzODAwMTU0Nzk1YTIiLCJpYXQiOjE3NjUzNjMzMTQsImV4cCI6MTc2NjU3MjkxNH0.xE3rxZzOErGAexkCYzlCl4YP7kKO8OrhXQ5h8SqIY-w";

  const fetchJobs = async (url, actionCreator) => {
    try {
      const response = await fetch(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.ok) {
        const { data } = await response.json();
        dispatch(actionCreator(data.slice(0, 5)));
      } else {
        console.error("Error fetching jobs");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchJobs(
      "https://strive-benchmark.herokuapp.com/api/jobs?search=developer&limit=5",
      setJobsSearch
    );

    fetchJobs(
      "https://strive-benchmark.herokuapp.com/api/jobs?company=Olla",
      setJobsCompany
    );

    fetchJobs(
      "https://strive-benchmark.herokuapp.com/api/jobs?category=writing&limit=10",
      setJobsCategory
    );
  }, []);

  return (
    <>
      <MyNavbar />
      <Container style={{ paddingTop: "5.5rem" }}>
        <Row>
          <Col lg={3} className="d-none d-lg-block">
            <div style={{ position: "sticky", top: "90px" }}>
              <JobsSidebar />
              <HomeFooter />
            </div>
          </Col>

          <Col xs={12} lg={8}>
            <Card
              className="mb-3 border-0 shadow-sm"
              style={{ borderRadius: "8px" }}
            >
              <Card.Body>
                <div className="mb-3">
                  <h5 className="fw-bold">
                    Le principali offerte di lavoro per te
                  </h5>
                  <div className="text-muted" style={{ fontSize: "13px" }}>
                    In base al tuo profilo, alle tue preferenze e attività come
                    candidature.
                  </div>
                </div>

                {jobsResults && jobsResults.length > 0 ? (
                  jobsResults.map((job, index) => (
                    <JobCard
                      key={job._id}
                      job={job}
                      isLast={index === jobsResults.length - 1}
                    />
                  ))
                ) : (
                  <p className="text-center p-3">
                    Nessuna offerta trovata al momento.
                  </p>
                )}

                <div
                  className="text-center mt-2 border-top pt-2 fw-bold text-secondary"
                  style={{ cursor: "pointer" }}
                >
                  Mostra tutto <FaArrowRight className="ms-1" />
                </div>
              </Card.Body>
            </Card>

            <PremiumBanner />

            <CategoryExplorer />

            <Card
              className="mb-3 border-0 shadow-sm"
              style={{ borderRadius: "8px" }}
            >
              <Card.Body>
                <div className="mb-3">
                  <h5 className="fw-bold">Altre offerte di lavoro per te</h5>
                  <div className="text-muted" style={{ fontSize: "13px" }}>
                    Basato sulla categoria "Writing" e Azienda "Olla"
                  </div>
                </div>

                {[...companyJobs, ...categoryJobs]
                  .slice(0, 5)
                  .map((job, index, arr) => (
                    <JobCard
                      key={job._id}
                      job={job}
                      isLast={index === arr.length - 1}
                    />
                  ))}

                <div
                  className="text-center mt-2 border-top pt-2 fw-bold text-secondary"
                  style={{ cursor: "pointer" }}
                >
                  Mostra tutto <FaArrowRight className="ms-1" />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
