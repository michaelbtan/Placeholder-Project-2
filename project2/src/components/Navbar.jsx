import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'


export default function Navbar() {

  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen(prev => !prev)
  }


  return (
    <div>
      <nav>
      <div className={navbarOpen ? "openNav" : "closedNav"} onClick={handleToggle}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
        <div className={navbarOpen ? 'mobile-container' : 'nav-container'}>
          <Link to='/'>Home</Link>
          <Link to='/About'>About</Link>
          <Link to='/TellMe'>Tell Me</Link>
          <Link to='/Leaderboard'>Leaderboard</Link>
          <Link to='/PrivateMsg'>Private Message</Link>
        </div>
      </nav>
    </div>
  )
}
