import React from 'react';
import Histogram from './Histogram';
import './History.css';

export default function History() {
  return (
    <div className="history">
      <span>Guess #1</span>
      <ul>
        <Histogram />
      </ul>
    </div>
  )
}