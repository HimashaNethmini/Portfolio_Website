import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";

const App = () => {
  return (
    <div>
      {/* linking to the website */}
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>

      <section id="Services">
        <Parallax type="services" />
      </section>

      <section>
        <Services />
      </section>
      
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
        <Portfolio />

      <section id="Contact">
        {/*<Contact />*/}
      </section>
     
    </div>
  );
};

export default App;
