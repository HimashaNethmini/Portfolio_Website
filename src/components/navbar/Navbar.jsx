import React from 'react'
import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      {/*sidebar */}
      <div className="wrapper">
        <span>Himasha Nethmini</span>

        <div className="social">

            <a href='https://github.com/HimashaNethmini'><img src="/github.png" alt="" /></a>
            <a href='https://www.linkedin.com/in/himasha-nethmini-4b32a1231/'><img src="/linkedin.png" alt="" /></a>
            <a href='#'><img src="/youtube.png" alt="" /></a>
            <a href='https://www.hackerrank.com/profile/himashanethmini1'><img src="/hackerrank.png" alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
