import React from 'react';
import Histogram from './Histogram';

export default function History() {
  return (
    <div>
      <span>Guess #1</span>
      <ul>
        <Histogram />
      </ul>
    </div>
  )
}