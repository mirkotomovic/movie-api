import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="header-container">
      <div className="theme-toggler">
        <span style={{ margin: '0rem' }}>Theme toggle:</span>
        <label className="switch" for="checkbox">
          <input type="checkbox" id="checkbox" onClick={() => props.themeSwitch()}/>
          <div className="slider round"></div>
        </label>
      </div>
      <nav className="navbar">
        <button className="toggle-button" onClick={() => setToggle(!toggle)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
        <ul className={`navbar-items ${toggle ? "active" : ""}`}>
          <li className="navbar-link"><NavLink to="/">Show search</NavLink></li>
          <li className="navbar-link"><NavLink to="/">People search</NavLink></li>
          <li className="navbar-link"><NavLink to="#">About</NavLink></li>
          <li className="navbar-link"><a>Theme toggle</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
