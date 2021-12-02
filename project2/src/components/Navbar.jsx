import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <div>
      <nav>
        <div className='nav-container'>
          {/* <div className='leftSide'> */}
            <Link to='/'>Home</Link>
          {/* </div> */}
          {/* <div className='rightSide'> */}
            <Link to='/About'>About</Link>
            <Link to='/TellMe'>Tell Me</Link>
            <Link to='/Leaderboard'>Leaderboard</Link>
            <Link to='/PrivateMsg'>Private Message</Link>
          {/* </div> */}
        </div>
      </nav>
    </div>
  )
}
