import { useEffect, useState } from "react"
import { Card, Button, Image } from "react-bootstrap"
import "./ProfileSidebar.css"

function ProfileSidebar() {
  const [people, setPeople] = useState([])

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM5NGU2OTYwMWIzODAwMTU0Nzk1YTIiLCJpYXQiOjE3NjUzNjMzMTQsImV4cCI6MTc2NjU3MjkxNH0.xE3rxZzOErGAexkCYzlCl4YP7kKO8OrhXQ5h8SqIY-w"

  useEffect(() => {
    fetchPeople()
  }, [])

  const fetchPeople = async () => {
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      if (res.ok) {
        const data = await res.json()
        // prendo solo 10 utenti per non riempire tutta la sidebar
        setPeople(data.slice(0, 10))
      } else {
        throw new Error("Errore nel recupero utenti")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div style={{ width: "100%" }}>
      <div>
        <img
          className="mt-sm-3 mt-md-0 mb-3 w-100"
          src="/img-consigliati.png"
          alt=""
        />
      </div>

      {/* -------------------------
              CARD 1
      ---------------------------*/}
      <Card className="sidebar-card mb-2 p-3">
        <h6 className="sidebar-title">Altri profili per te</h6>

        {people.slice(0, 4).map((person) => (
          <div
            key={person._id}
            className="d-flex align-items-start profile-item"
          >
            <Image
              src={person.image}
              roundedCircle
              width={48}
              height={48}
              className="me-3 object-fit-cover"
              style={{ cursor: "pointer" }}
            />

            <div className="flex-grow-1">
              <div className="d-flex align-items-center mb-1">
                <span className="profile-name">
                  {person.name} {person.surname}
                </span>
                <span className="degree-badge">· 3°+</span>
              </div>

              <div className="profile-role">
                {person.title || "Nessun ruolo"}
              </div>

              <Button
                variant="outline-secondary"
                size="sm"
                className="btn-connect mt-1"
              >
                Collegati
              </Button>
            </div>
          </div>
        ))}
      </Card>

      {/* -------------------------
              CARD 2
      ---------------------------*/}
      <Card className="sidebar-card mb-2 p-3">
        <h6 className="sidebar-title">Persone che potresti conoscere</h6>

        {people.slice(4, 8).map((person) => (
          <div
            key={person._id}
            className="d-flex align-items-start profile-item"
          >
            <Image
              src={person.image}
              roundedCircle
              width={48}
              height={48}
              className="me-3 object-fit-cover"
            />

            <div className="flex-grow-1">
              <div className="d-flex align-items-center mb-1">
                <span className="profile-name">
                  {person.name} {person.surname}
                </span>
                <span className="degree-badge">· 2°</span>
              </div>

              <div className="profile-role">
                {person.title || "Nessun ruolo"}
              </div>

              <Button
                variant="outline-secondary"
                size="sm"
                className="btn-connect mt-1"
              >
                Collegati
              </Button>
            </div>
          </div>
        ))}
      </Card>

      {/* -------------------------
              CARD 3
      ---------------------------*/}
      <Card className="sidebar-card mb-2 p-3">
        <h6 className="sidebar-title">Potrebbe interessarti</h6>

        {people.slice(8, 10).map((person) => (
          <div
            key={person._id}
            className="d-flex align-items-start profile-item"
          >
            <Image
              src={person.image}
              roundedCircle
              width={48}
              height={48}
              className="me-3 object-fit-cover"
            />

            <div className="flex-grow-1">
              <div className="d-flex align-items-center mb-1">
                <span className="profile-name">
                  {person.name} {person.surname}
                </span>
                <span className="degree-badge">· 3°+</span>
              </div>

              <span className="text-secondary"> 876.324 followers </span>

              <div className="profile-role">
                {person.title || "Nessun ruolo"}
              </div>

              <Button
                variant="outline-secondary"
                size="sm"
                className="btn-connect mt-1"
              >
                + Segui
              </Button>
            </div>
          </div>
        ))}
      </Card>

      <div>
        <img className="mt-3 w-100" src="/img-consigliati.png" alt="" />
      </div>
    </div>
  )
}

export default ProfileSidebar
