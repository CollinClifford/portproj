import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./contact.css";
import { useState } from "react";
import { send } from "emailjs-com";

function Contact() {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "Collin",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    // e.preventDefault();
    send("service_xvozmh9", "template_2ap4qim", toSend, "J_oG34GkYw4mMg3_E")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
      <Container>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="from_name"
            placeholder="from name"
            value={toSend.from_name}
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            name="reply_to"
            placeholder="Your email"
            value={toSend.reply_to}
            onChange={handleChange}
          />
          <br />
          <textarea
            type="text"
            name="message"
            placeholder="Your message"
            value={toSend.message}
            onChange={handleChange}
            rows="10"
            cols="40"
          />
          <br />
          <button className="btn btn-info" type="submit">Submit</button>
        </form>
      </Container>
  );
}

export default Contact;
