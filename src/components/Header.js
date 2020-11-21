import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="header-container">
      <nav className="navbar">
        <button className="toggle-button" onClick={() => setToggle(!toggle)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
          <ul className={`navbar-items ${toggle ? "active": ""}`}>
            <li className="navbar-link"><NavLink to="/">Show search</NavLink></li>
            <li className="navbar-link"><NavLink to="/">People search</NavLink></li>
            <li className="navbar-link"><NavLink to="#">About</NavLink></li>
          </ul>
      </nav>
    </header>
  )
}

export default Header
