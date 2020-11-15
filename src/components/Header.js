import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="headerContainer">
      <nav className="navbar">
        <button className="toggle-button" onClick={() => setToggle(!toggle)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
        <div className={`navbar-links ${toggle ? "active": ""}`}>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="#">About</NavLink></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
