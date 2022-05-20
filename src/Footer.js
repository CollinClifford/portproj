import React from "react";
import { Col, Row } from "react-bootstrap";

function Footer() {
  return (
    <>
      <Row>
        <Col>
          <p>Collin Clifford Copywrite 2022</p>
        </Col>
        <Col className="ad">
          Stock footage by <a href="http://www.videezy.com">Videezy</a>
        </Col>
      </Row>
    </>
  );
}

export default Footer;
