import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'


export default function Header() {
  return (
    <div className='Header'>
      <Link className='toOrderButton' to='/toOrder'>
        <h2>Things to Order</h2>
        <p>What do we need? Tell me what and how many pls</p>
        <img src='https://static.thenounproject.com/png/2048451-200.png'
          height='200px' width='200px' alt='bag of flour' />
      </Link>
      <Link className='toFixButton' to='/toFix'>
        <h2>Things to Fix</h2>
        <p>What do we need? Tell me what and how many pls</p>
        <img src='https://www.iconpacks.net/icons/1/free-wrench-icon-951-thumb.png'
          height='200px' width='200px' alt='wrench' />
      </Link>
      <Link className='toKnowButton' to='/toKnow'>
        <h2>Things to Know About</h2>
        <p>What do we need? Tell me what and how many pls</p>
        <img src='https://static.vecteezy.com/system/resources/thumbnails/002/219/582/small/illustration-of-book-icon-free-vector.jpg'
          height='200px' width='200px' alt='open book' />
      </Link>
    </div>
  )
}
