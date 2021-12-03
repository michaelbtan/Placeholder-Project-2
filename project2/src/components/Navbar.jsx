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
      <div class="container" onClick={handleToggle}>{navbarOpen ? "Close" : "Open"}>
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </div>
      <nav>
        <div className='nav-container'>
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
