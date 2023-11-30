import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="textContainer">
          <h2>IM A</h2>
          <h1>
            Fullstack Developer 
            {/*<h4 >and</h4>
             Frontend Developer*/}
          </h1>

          <div className="buttons">
            <button>
              Download CV
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