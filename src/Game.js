import React from 'react';
import Feedback from './Feedback';
import Form from './Form';
import History from './History';
import './Game.css';


export default function Game() {
  return (
    <section>
      <Feedback />
      <Form />
      <History />
    </section>
  )
}