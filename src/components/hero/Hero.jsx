import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <div
          className="textContainer">
          <h2>IM A</h2>
          <h1>
            Full Stack Developer 
            <h4 >and</h4>
             Frontend Developer
          </h1>
          <div className="buttons">
            <button>
              See the Latest Works
            </button>
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