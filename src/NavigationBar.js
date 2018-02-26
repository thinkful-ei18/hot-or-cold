import React from 'react';
import './Nav.css';

export default function NavigationBar() {
  return (
    <nav> 
      <ul className="nav-ul">
        <li><a href="#how">How to play</a></li>
        <li><a href="#new">New Game</a></li>
      </ul>
    </nav>
  )
}