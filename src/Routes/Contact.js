import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { send } from "emailjs-com";
import "./contact.css";

function Contact() {
  const history = useNavigate();
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "Collin",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_xvozmh9", "template_2ap4qim", toSend, "J_oG34GkYw4mMg3_E")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
    alert("Thank you");
    history("/");
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <Row>
          Your Name
          <br />
          <input
            type="text"
            name="from_name"
            // placeholder="from name"
            value={toSend.from_name}
            onChange={handleChange}
          />
          Your Email
          <br />
          <input
            type="text"
            name="reply_to"
            // placeholder="Your email"
            value={toSend.reply_to}
            onChange={handleChange}
          />
        </Row>
        <Row>
          Message
          <textarea
            type="text"
            name="message"
            // placeholder="Your message"
            value={toSend.message}
            onChange={handleChange}
            // rows="10"
            // cols="40"
          />
        </Row>
        <Row>
          <button className="btn btn-info" type="submit">
            Submit
          </button>
        </Row>
      </form>
    </Container>
  );
}

export default Contact;
