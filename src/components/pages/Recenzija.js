import React from 'react';
import '../../App.css';
import { UserAuth } from '../context/AuthContext';

const Review = () => {
  const { user } = UserAuth();

  return (
    <div className='recenzija'>
      <p className='korisnik'>Korisnik : {(user && user.email) || 'Gost'}</p>
    </div>
  );
};

export default Review;