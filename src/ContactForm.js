import React, { useState } from "react";
import "./contact_style.css";
import { db } from "./firebase";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const js_op = document.querySelector(".js_op");

  const handleSubmit = (e) => {
    console.log("FAIZAN");
    e.preventDefault();

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        js_op.innerHTML = "Thank You For Contacting !";
        setTimeout(() => {
          js_op.innerHTML = "";
        }, 3000);
      })
      .catch((error) => {
        alert(error.message);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="form-holder" id="contact">
      <form className="container" onSubmit={handleSubmit}>
        <div className="contact__heading__container">
          <p className="contact-heading">CONTACT</p>
          <p className="about__underline__contact ">&nbsp;</p>
          <p id="hvqst">Have a question or want to work together?</p>
        </div>

        <div className="login">
          <input
            type="text"
            placeholder="Your Name"
            className="input"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="subject">
          <input
            type="email"
            placeholder="Email"
            className="input"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="msg">
          <textarea
            className="area"
            placeholder="Leave a Message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <div className="button-center">
          <button className="btn">Send Message</button>
        </div>

        <h4
          style={{ color: "#fff", textAlign: "center" }}
          className="js_op"
        ></h4>
      </form>
    </div>
  );
};

export default ContactForm;
