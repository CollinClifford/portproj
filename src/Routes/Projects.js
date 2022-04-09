import React from "react";
import { Carousel, Card, Button, Accordion } from "react-bootstrap";
import dashboard from "../img/dashboard.png";
import docoderRing from "../img/decoderring.png";
import constellations from "../img/Constellations.png";
import "../Layout.css";

function Projects() {
  return (
    <>
      <Carousel variant="dark">
        <Carousel.Item>
          <img className="d-block w-100" src={dashboard} alt="First slide" />
          <Carousel.Caption
            style={{
              color: "black",
              backgroundColor: "rgba(255, 255, 255, 0.775)",
              padding: "2px",
            }}
          >
            <h3>
              <a href="https://periotable-client.herokuapp.com/">
                Periodic Tables
              </a>{" "}
              ||{" "}
              <a href="https://github.com/CollinClifford/starter-restaurant-reservation">
                Repo
              </a>
            </h3>
            <p>
              A Restaurant Reservation App
              <br />
              React.js, Bootstrap, Express.js, PostgreSQL
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={docoderRing} alt="First slide" />
          <Carousel.Caption
            style={{
              color: "black",
              backgroundColor: "rgba(255, 255, 255, 0.775)",
              padding: "2px",
            }}
          >
            <h3>
              <a href="https://collinclifford.github.io/decoder-ring/">
                Decoder Ring
              </a>{" "}
              ||{" "}
              <a href="https://github.com/CollinClifford/decoder-ring">Repo</a>
            </h3>
            <p>
              A Restaurant Reservation App
              <br />
              JavaScript
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={constellations}
            alt="First slide"
          />
          <Carousel.Caption
            style={{
              color: "black",
              backgroundColor: "rgba(255, 255, 255, 0.775)",
              padding: "2px",
            }}
          >
            <h3>
              <a href="https://starter-constellations-client-beta-lemon.vercel.app/">
                Constellations
              </a>{" "}
              ||{" "}
              <a href="https://github.com/CollinClifford/starter-restaurant-reservation">
                Repo
              </a>
            </h3>
            <p>
              A Restaurant Reservation App
              <br />
              Express.js
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Projects;
