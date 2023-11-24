import React from "react";
import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      {/* title */}
      <div className="textContainer">
        <h2>I'M A </h2>
        <h1>Web developer and UI designer</h1>

        {/*buttons */}
        <button>See the Latest Work</button>
        <button>Contact Me</button>

        {/*small image */}
        <img src="/scroll.png" alt="" />
      </div>

      

      {/* main image */}
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
