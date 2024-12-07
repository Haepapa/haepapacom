import React from "react";
import "./Contact.css";
import "./Common.css";
import "../index.css";

function Contact(): JSX.Element {
  const [count, setCount] = React.useState(0);
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

        <div className="stack-container">
          <textarea
            className="form-input-message"
            maxLength={500}
            onChange={(e) => setCount(e.target.value.length)}
          ></textarea>
          <span className="character-count">{count}/500</span>
        </div>
      </div>

      <div className="form-container">
        <div className="spacer"></div>

        <div className="button">Send</div>
      </div>
    </div>
  );
}

export default Contact;
