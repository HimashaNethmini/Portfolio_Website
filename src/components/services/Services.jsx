import React from 'react'
import './services.scss'
import {motion} from "framer-motion"

const Services = () => {
  return (
    <motion.div className='services'>

        <motion.div className="textContainer">
            <p>I am passionate about learning and growing
                <br />
             in a wide range of technologies </p>
            <hr />
        </motion.div>

        <motion.div className="titleContainer">
            <div className="title">
                <img src="/people.webp" alt="" />
                <h1><b>Unique</b> Ideas</h1>
            </div>

            <div className="title">
                <h1>
                    <b>FOR YOUR</b>Business
                </h1>
                <button>What we do</button>
            </div>
        </motion.div>

{/* list of services */}
        <motion.div className="listContainer">
            <div className="box">
                <h2>Branding</h2>
                <p>
                Lorem Ipsum has been the industry's standard dummy text 
                ever since the 1500s, when an unknown printer took a galley 
                of type and scrambled it to make a type ...
                </p>
                <button>Go</button>
            </div>



        </motion.div>
      
    </motion.div>
  )
}

export default Services
