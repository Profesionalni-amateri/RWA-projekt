import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <Link to='sign_in'>
      <button className='btn'>Prijavi se</button>
    </Link>
  );
}
