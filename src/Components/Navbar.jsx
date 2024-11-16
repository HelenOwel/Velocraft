import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div class='nav'>
        <div className="logo">
            EV-olution
        </div>
        <ul className="menu">
            <li>Home</li>
            <li>Explore</li>
            <li>About</li>
            <li className='contact'>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar