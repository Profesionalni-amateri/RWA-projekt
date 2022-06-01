import React from 'react';
import './Button.css';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

export function Button() {

  

  const { user, logout } = UserAuth();
  const navigate = useNavigate();


  async function handleLogout() {
    try {
      await logout();
      navigate('/sign_in');
      console.log('You are logged out');
    } catch (e) {
      console.log(e.message);
    }
  }
 
  if((user && user.email)){
  return (
    <NavLink to='sign_in'>
      <button className='btn' onClick={ handleLogout }> Log Out</button>
    </NavLink>
  );
  }
   return (
    <NavLink to='sign_in'>
      <button className='btn'> Log In</button>
    </NavLink>
  );
}
