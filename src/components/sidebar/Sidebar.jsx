import React, { useState } from 'react'
import './sidebar.scss'
import ToggleButton from './toggleButton/ToggleButton'
import Links from "./links/Links"
import { motion } from "framer-motion"


const Sidebar = () => {
  const [ open, setOpen ] = useState(false)

  const variants = {
    open:
    closed:

  }


  return (
    <motion.div className='sidebar' animate={open ? "open" : "closed"}>
      
      <motion.div className="bg" variants={variants}>
        <Links />

      </motion.div>

      <ToggleButton setOpen = {setOpen} />
    </motion.div>
  )
}

export default Sidebar
