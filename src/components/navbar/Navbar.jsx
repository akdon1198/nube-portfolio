import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import hamberger from "../../img/hamberger.png"
import "./navbar.css"
const Navbar = () => {
  const[ham, setham] = useState(false)
  const handlehamberger = () => {
    setham(true)
  }
  return (
  <>
    <div className="nav">
        <div className="nav-left"><NavLink className="navlink" to = "/">AKASH GUPTA</NavLink></div>
        <div className="nav-middle-right">
            <div className="nav-middle">
                <div><NavLink className="navlink home" to = "/">Home</NavLink></div>
                <div><NavLink className="navlink skills" to = "/about">Skills</NavLink></div>
                <div><NavLink className="navlink projects" to = "/project">Projects</NavLink></div>
                <div><NavLink className="navlink contact" to = "/contact">Contact</NavLink></div>
            </div>

            <div className="nav-right">
              <div className="c-info-item">
                <a href="https://www.linkedin.com/in/akash-gupta-bbb73b1b4/">
                  <i class="fonticon fa-brands fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/akdon1198">
                  <i class="fonticon fa-brands fa-github"></i>
                </a>
                <div class="hamburger-menu" onClick={handlehamberger}>
                  <img src = {hamberger} className = "hamsize"></img>
                </div>
              </div>
            </div>
        </div>
    </div>
    {
      ham ? <div class="menu-link mobile-menu-link">
              <ul>
              <li><a class="Head_title" href="/">Home</a></li>
              <li><a class="Head_title" href="/about">Skills</a></li>
              <li><a class="Head_title" href="/project">Projects</a></li>
              <li><a class="Head_title" href="/contact">Contact</a></li>
              </ul>
            </div> : ""
    }
  </>
  )
}

export default Navbar
