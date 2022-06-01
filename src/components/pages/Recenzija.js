import React from 'react';
import '../../App.css';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Review = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/sign_in');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className='recenzija'>
      <p className='korisnik'>Korisnik : {(user && user.email) || 'Gost'}</p>
      <button onClick={handleLogout} className='btn-logout'>
        Logout
      </button>
    </div>
  );
};

export default Review;