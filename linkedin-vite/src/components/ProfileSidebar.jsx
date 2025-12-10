import React from "react";
import { Card, Button, Image } from "react-bootstrap";

import "./ProfileSidebar.css";

function ProfileSidebar() {
  const people = [
    {
      id: 1,
      name: "Alessandro Minini",
      role: "Strength & Conditioning Coach In Elite Rink Hockey",
      img: "/img-profile.jpeg",
    },
    {
      id: 2,
      name: "Sara Quadrio",
      role: "3D Simulation & Metaverse Specialist student at ITS...",
      img: "/img-profile.jpeg",
    },
    {
      id: 3,
      name: "Miriam De Maria",
      role: "Communication & Branding Specialist | @Holcim 🌍",
      img: "/img-profile.jpeg",
    },
    {
      id: 4,
      name: "Davide Guerrazzi",
      role: "Studente presso Università degli Studi di Milano-Bicocca",
      img: "/img-profile.jpeg",
    },
  ];

  return (
    <div style={{ width: "100%" }}>
      <div>
        <img className="mb-3 w-100" src="/img-consigliati.png" alt="" />
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
  );
}

export default ProfileSidebar;
