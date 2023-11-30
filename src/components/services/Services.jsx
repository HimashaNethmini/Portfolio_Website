import React, { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

//make animation
const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  //map to function
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I am passionate about learning and growing
          <br />
          in a wide range of technologies
        </p>
        <hr />
      </motion.div>

      <motion.div className="titleContainer" variants={variants}>
        <div className="title1">
          <p>
            Hello <span style={{ color: "orange" }}>!</span> I'm Himasha
            Nethmini, a Final year undergraduate at University of SLIIT,
            pursuing a BSc (Hons) Spec. in Information Technology. I am a person
            with a heart full of curiosity and a head buzzing with creativity.
            Whether it's tinkering with design, coding, problem-solving or
            diving into the world of IT, I find joy in every aspect of what I
            do. My journey is painted with a palette of experiences that have
            sculpted me into someone who's not just about the skills but also
            about the journey. I believe in continuous
            learning,collaboration,committment, and always bring a positive vibe
            to the table. If you're looking for someone who's not just a
            professional but also a friendly face, let's connect! I'm all ears
            for new conversations and adventures. Can't wait to chat and explore
            where creativity takes us!{" "}
          </p>
        </div>

        <div className="type">
          <button>WHAT I DO?</button>
        </div>
          
        
      </motion.div>

      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Fullstack App</h2>
          <p>
            I have experiences in developing numerous seamless user-friendly and responsive ( respond to different screens ) websites and web applications using MERN stack, Next Js and Angular.
            Please check my github for more details. 
          </p>          
          <a href="https://github.com/HimashaNethmini/Digital_Business">Go</a>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Fullstack App</h2>
          <p>
            I have experienced in developing full stack web application especially utilizing MERN. I have developed several projects 
            within the above stack. Please check my github for more details. 
          </p>
          <a href="https://chat.openai.com/c/0c82d73a-25bd-49e3-8231-0792dec08bbf">Go</a>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Database</h2>
          <p>
            Whenever developing an application, I prefer working with Mongo DB, My SQL as the databases.Not only that, I also have experienced in Oracle
          </p>
          <a href="https://chat.openai.com/c/0c82d73a-25bd-49e3-8231-0792dec08bbf">Go</a>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Mobile Application</h2>
          <p>
            As a semester project, I have developed a mobile application in Android studio using Java. Furthermore,
            I am currently developing a mobile application using React Native for the final year research. 
          </p>
          <a href="#">Go</a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
