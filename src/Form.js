import React from 'react';
import './Form.css';

export default function Form() {
  return (
    <form>
      <input className="number" type="number" />
      <input className="button" type="submit" />
    </form>
  )
}