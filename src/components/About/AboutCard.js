import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">katappa</span>{" "}
            from <span className="purple">mahishmatai, India</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">sena leader</span> at{" "}
            <span className="purple">Juspay</span>.
            <br />I hold an Integrated masters in{" "}
            <span className="purple">using wepons</span> from{" "}
            <span className="purple">mahishmati university</span>.
            <br />
            <br />
            Outside of fighting, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing fighting Blogs and Tips ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">katappa</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
