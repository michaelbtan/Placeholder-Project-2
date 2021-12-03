import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'


export default function Header() {
  return (
    <div className='Header'>
      <Link className='toOrderButton' to='/toOrder'>Things to Order</Link>
      <Link className='toFixButton' to='/toFix'>Things to Fix</Link>
      <Link className='toKnowButton' to='/toKnow'>Things to Know</Link>
    </div>
  )
}
