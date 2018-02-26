import React from 'react';
import './Nav.css';

export default function NavigationBar() {
  return (
    <nav> 
      <ul className="nav-ul">
        <li><a href="#">How to play</a></li>
        <li><a href="#">New Game</a></li>
      </ul>
    </nav>
  )
}