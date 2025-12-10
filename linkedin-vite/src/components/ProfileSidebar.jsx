import React from "react"
import { Card, Button, Image } from "react-bootstrap"

import "./ProfileSidebar.css"

function ProfileSidebar() {
  const people = [
    {
      id: 1,
      name: "Giuseppe Simone ",
      role: "Cosa ci a questo",
      img: "https://i1.sndcdn.com/artworks-000075752075-bktbts-t500x500.jpg",
    },
    {
      id: 2,
      name: "Ilaria Salis",
      role: "Case occupate, blocco navale via i negri dalle strade",
      img: "https://dimages2.corriereobjects.it/files/main_image_mobile/uploads/2024/04/26/662bcf3b212f8.jpeg",
    },
    {
      id: 3,
      name: "Er Brasiliano",
      role: "Non conosco il tisom",
      img: "https://www.today.it/~media/horizontal-hi/27302640978695/brasiliano-foto-instagram-2.jpg",
    },
    {
      id: 4,
      name: "Rocco Siffredi",
      role: "La grande mazza del West",
      img: "https://static.wixstatic.com/media/35a551_a82dcef3ee1c4c2abc3e91e10aaa7db5~mv2.jpg/v1/fill/w_816,h_816,al_c,q_85/35a551_a82dcef3ee1c4c2abc3e91e10aaa7db5~mv2.jpg",
    },
  ]

  return (
    <div style={{ width: "100%" }}>
      <div>
        <img
          className="mt-sm-3 mt-md-0 mb-3 w-100"
          src="/img-consigliati.png"
          alt=""
        />
      </div>

      <Card className="sidebar-card mb-2 p-3">
        <h6 className="sidebar-title">Altri profili per te</h6>

        {people.map((person) => (
          <div
            key={person.id}
            className="d-flex align-items-start profile-item"
          >
            <Image
              src={person.img}
              roundedCircle
              width={48}
              height={48}
              className="me-3 object-fit-cover"
              style={{ cursor: "pointer" }}
            />
            <div className="flex-grow-1">
              <div className="d-flex align-items-center mb-1">
                <span className="profile-name">{person.name}</span>

                <span className="degree-badge">· 3°+</span>
              </div>

              <div className="profile-role">{person.role}</div>

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
      <Card className="sidebar-card mb-2 p-3">
        <h6 className="sidebar-title">Persone che potresti conoscere</h6>

        {people.map((person) => (
          <div
            key={person.id}
            className="d-flex align-items-start profile-item"
          >
            <Image
              src={person.img}
              roundedCircle
              width={48}
              height={48}
              className="me-3 object-fit-cover"
              style={{ cursor: "pointer" }}
            />
            <div className="flex-grow-1">
              <div className="d-flex align-items-center mb-1">
                <span className="profile-name">{person.name}</span>

                <span className="degree-badge">· 3°+</span>
              </div>

              <div className="profile-role">{person.role}</div>

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
      <Card className="sidebar-card mb-2 p-3">
        <h6 className="sidebar-title">Potrebbe interessarti</h6>

        {people.slice(0, 2).map((person) => (
          <div
            key={person.id}
            className="d-flex align-items-start profile-item"
          >
            <Image
              src={person.img}
              roundedCircle
              width={48}
              height={48}
              className="me-3 object-fit-cover"
              style={{ cursor: "pointer" }}
            />
            <div className="flex-grow-1">
              <div className="d-flex align-items-center mb-1">
                <span className="profile-name">{person.name}</span>
                <span className="degree-badge">· 3°+</span>
              </div>
              <span className="text-secondary "> 876.324 followers </span>

              <div className="profile-role">{person.role}</div>

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
