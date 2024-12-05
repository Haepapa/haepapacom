import React from "react";
import "./Contact.css";
import "./Common.css";
import "../index.css";

function Contact(): JSX.Element {
  return (
    <div className="page-container">
      <div className="page-title">Contact</div>

      <div className="form-container">
        <div className="form-heading">Email</div>
        <input className="form-input"></input>
      </div>

      <div className="form-container">
        <div className="form-heading">Subject</div>
        <input className="form-input"></input>
      </div>

      <div className="form-container">
        <div className="form-heading">Message</div>
        <input className="form-input-message"></input>
      </div>

      <div className="form-container">
        <div className="spacer"></div>

        <div className="button">Send</div>
      </div>
    </div>
  );
}

export default Contact;
