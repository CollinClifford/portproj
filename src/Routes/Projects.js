import React from "react";
import { Carousel, Card, Button, Accordion } from "react-bootstrap";
import dashboard from "../img/dashboard.png";
import docoderRing from "../img/decoderring.png";
import constellations from "../img/Constellations.png";
import flashcard from "../img/flashcardapp.png";
import library from "../img/library.png";
import movies from "../img/movies.png";
import nasa from "../img/nasa.png";
import pomodoro from "../img/pomodoro.png";
import weather from "../img/weather.png";
import simpson from "../img/Simpsons SS.png";
import "../Layout.css";

function Projects() {
  return (
    <>
      <Carousel variant="dark" fade>
        {/* Periodic Tables */}
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
              A Restaurant Reservation App.
              <br />
              React.js, Bootstrap, Express.js, PostgreSQL
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Decoder Ring */}
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
              To code and decode.
              <br />
              JavaScript
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Constellation App */}
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
              || <a href="">Repo</a>
            </h3>
            <p>
              Search exciting constellations.
              <br />
              Express.js
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Flashcard App */}
        <Carousel.Item>
          <img className="d-block w-100" src={flashcard} alt="First slide" />
          <Carousel.Caption
            style={{
              color: "black",
              backgroundColor: "rgba(255, 255, 255, 0.775)",
              padding: "2px",
            }}
          >
            <h3>
              Flashcard App ||{" "}
              <a href="https://github.com/CollinClifford/flashcard-app">Repo</a>
            </h3>
            <p>
              Build a personalized flashcard deck.
              <br />
              React.js
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Local Library */}
        <Carousel.Item>
          <img className="d-block w-100" src={library} alt="First slide" />
          <Carousel.Caption
            style={{
              color: "black",
              backgroundColor: "rgba(255, 255, 255, 0.775)",
              padding: "2px",
            }}
          >
            <h3>
              Local Library ||{" "}
              <a href="https://github.com/CollinClifford/local-library">Repo</a>
            </h3>
            <p>
              Check our library statistics.
              <br />
              JavaScript
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* We Loves Movies */}
        <Carousel.Item>
          <img className="d-block w-100" src={movies} alt="First slide" />
          <Carousel.Caption
            style={{
              color: "black",
              backgroundColor: "rgba(255, 255, 255, 0.775)",
              padding: "2px",
            }}
          >
            <h3>
              <a href="https://wlm-client.herokuapp.com/">We Love Movies</a> ||{" "}
              <a href="https://github.com/CollinClifford/we-love-movies-backend">
                Repo
              </a>
            </h3>
            <p>
              Local theater listings
              <br />
              Express.js
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Pomodoro Timer */}
        <Carousel.Item>
          <img className="d-block w-100" src={pomodoro} alt="First slide" />
          <Carousel.Caption
            style={{
              color: "black",
              backgroundColor: "rgba(255, 255, 255, 0.775)",
              padding: "2px",
            }}
          >
            <h3>
              <a href="https://project-pomodoro-timer-qualified-1-sepia.vercel.app/">
                Pomodoro Timer
              </a>{" "}
              ||{" "}
              <a href="https://github.com/CollinClifford/pomodoro-timer">
                Repo
              </a>
            </h3>
            <p>
              Study aid.
              <br />
              React.js
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Nasa */}
        <Carousel.Item>
          <img className="d-block w-100" src={nasa} alt="First slide" />
          <Carousel.Caption
            style={{
              color: "black",
              backgroundColor: "rgba(255, 255, 255, 0.775)",
              padding: "2px",
            }}
          >
            <h3>
              <a href="https://nasa-open-api-proj-client.herokuapp.com/">
                Nasa Open API Playground
              </a>{" "}
              ||{" "}
              <a href="https://github.com/CollinClifford/nasa-project">Repo</a>
            </h3>
            <p>
              Discover Space.
              <br />
              React.js, Bootstrap
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Weather Zen */}
        <Carousel.Item>
          <img className="d-block w-100" src={weather} alt="First slide" />
          <Carousel.Caption
            style={{
              color: "black",
              backgroundColor: "rgba(255, 255, 255, 0.775)",
              padding: "2px",
            }}
          >
            <h3>
              WeatherZen ||{" "}
              <a href="https://github.com/CollinClifford/starter-weatherzen-back-end">
                Repo
              </a>
            </h3>
            <p>
              Log Weather.
              <br />
              Express.js, PostgreSQL
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Grub Dash */}
        <Carousel.Item>
          <img className="d-block w-100" src="" alt="First slide" />
          <Carousel.Caption
            style={{
              color: "black",
              backgroundColor: "rgba(255, 255, 255, 0.775)",
              padding: "2px",
            }}
          >
            <h3>
              GrubDash ||{" "}
              <a href="https://github.com/CollinClifford/GrubDash">Repo</a>
            </h3>
            <p>
              Local restaurant delivery.
              <br />
              Express.js
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Simpsons */}
        <Carousel.Item>
          <img className="d-block w-100" src={simpson} alt="First slide" />
          <Carousel.Caption
            style={{
              color: "black",
              backgroundColor: "rgba(255, 255, 255, 0.775)",
              padding: "2px",
            }}
          >
            <h3>
              <a href="https://simpsons-quote-generator.vercel.app/">
                Simpsons Quote Generator
              </a>{" "}
              ||{" "}
              <a href="https://github.com/CollinClifford/simpsons-quote-generator">
                Repo
              </a>
            </h3>
            <p>
              Why not.
              <br />
              React.js
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Projects;
