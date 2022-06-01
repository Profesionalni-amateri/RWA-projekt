import React, { useState } from 'react';
import '../../App.css';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { createUser } = UserAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(email, password);
      navigate('/recenzija')
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className='signUp'>
      <div className="form_class">
        <h1 className='text-2xl font-bold py-2'>Sign up for a free account</h1>
        <p className='py-2'>
          Already have an account? {' '}
          <Link to='/sign_in' className='underline'>
            Sign in.
          </Link>
        </p>
      </div>
      <form className="form_class" onSubmit={handleSubmit}>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>Email: </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="field_class"
            type='email'
          />
        </div>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>Password: </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="field_class"
            type='password'
          />
        </div>
        <button className='btn-sign-up'>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;