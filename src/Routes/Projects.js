import React from "react";
import { Carousel, Card, Button, Accordion } from "react-bootstrap";
import dashboard from "../img/dashboard.png";

function Projects() {
  return (
    <>
      <Carousel variant="dark">
        <Carousel.Item>
          <img className="d-block w-100" src={dashboard} alt="First slide" />
          <Carousel.Caption style={{"color": "black", "backgroundColor": "rgba(255, 255, 255, 0.375)", "padding": "2px"}}>
            <h3>
              <a href="https://periotable-client.herokuapp.com/" >
                Periodic Tables
              </a>
            </h3>
            <p>A Restaurant Reservation App</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="" alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="" alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Projects;
