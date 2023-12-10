import React, { useEffect } from "react";
import "./hero.scss";

const Hero = () => {
  
  useEffect (()=> {
    //initialize Typed instance when component mounts
    var typed = new Typed(".auto-input",{
      strings: ["Fullstack Developer", "UI / UX Designer", "Software Engineer"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true
    });
    
    //clean up Typed instance when component unmounts
    return () => {
      typed.destroy();
    };
  }, []); //empty dependency array ensure the effect runs once

  return (
    <div className="hero">
      <div className="wrapper">
        <div className="textContainer">
          <h2>HIMASHA NETHMINI</h2>
          <h4>I AM </h4>
            <h1><span class="auto-input"></span></h1>
          
          <div className="buttons">
            <button>Download CV</button>
            <button>Contact Me</button>
          </div>
          <img src="/scroll.png" alt="" />
        </div>
      </div>

      <div className="imageContainer">
        <img src="/fed.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
