import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'


export default function Header() {
  return (
    <div className='Header'>
      <Link to='/toOrder'>Things to Order</Link>
      <Link to='/toFix'>Things to Fix</Link>
      <Link to='/toKnow'>Things to Know</Link>
    </div>
  )
}
