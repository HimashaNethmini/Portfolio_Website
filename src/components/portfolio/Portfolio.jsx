import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Real Estate WebApp",
    img: "img1.png",
    desc: "The application is developed using MERN stack, allowing property owners to seamlessly add properties for sale. Users have the option to securely log in using either their email or Google account, with the login process protected by JWT. The platform enables users to search properities & schedule a visit. Users can add 'like' to residences, facilitating a personalized and curated selection.",
  },
  {
    id: 2,
    title: "SummerKing Website",
    img: "img2.png",
    desc: "A frontend only ecommerce website, developed using React Js, Tailwind css and MUI .It is responsive for multiple screens while offering a seamless user experience with dynamic functionality and visually stunning design.",
  },
  {
    id: 3,
    title: "Care NGO",
    img: "img3.png",
    desc: "A full-stack webapp developed using MERN stack, organized into four categories: Education, Gender, Health, & Digital Bridge. Admins can perform CRUD operations while the users have a range of functionalities, including the ability to watch educational videos, write and read posts and articles, and make pharmaceutical donations. The platform aims to address diverse areas, offering an inclusive and feature-rich experience for both adminis and users.",
  },
  {
    id: 4,
    title: "Music App",
    img: "img4.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 5,
    title: "Blog App",
    img: "app10.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 6,
    title: "Care NGO",
    img: "app3.png",
    desc: "",
  },
  {
    id: 7,
    title: "Digital Business",
    img: "app2.png",
    desc: "A frontend only website developed assuming for a bank with their usual colour palatte, bootstrapped with Next.js 13 and powered by React.js to create a dynamic and seamless user experience. Elevating the design further, Framer Motion brings animations to life, adding a touch of elegance. This website isn't just cutting-edge; it's also responsive, ensuring a top-notch user experience across all devices.",
  },
  {
    id: 8,
    title: "Music App",
    img: "app8.png",
    desc: "A frontend-only music player website with enhanced user interaction features using Framer Motion. Employed MUI components and Tailwind CSS for an aesthetically pleasing and user-friendly design.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href="https://github.com/HimashaNethmini">See Demo</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Developed works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
