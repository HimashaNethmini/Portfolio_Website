import React from "react";
import "./contact.scss";
import { motion } from "framer-motion";

//animation created
const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    },
  },

};

const Contact = () => {
  return (
    <div className="contact" variants={variants}>
      <div className="textContainer" variants={variants}>
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
