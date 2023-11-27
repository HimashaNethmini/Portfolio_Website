import React from "react";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="textContainer">
        <h1>Let's work 
          <br />
          together</h1>
      </div>

      <div className="formContainer">
        <form>
          <input type="text" placeholder="Name" required/>
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Type a Message" rows={10} required />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
