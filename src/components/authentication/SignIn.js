import React, { useState } from 'react';
import '../../App.css';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password)
      navigate('/recenzija')
    } catch (e) {
      console.log(e.message)
    }
  };

  return (
    <div className='signIn'>
      <div className="form_class">
        <h1 className='heading'>Sign in to your account</h1>
        <p className='question'>
          Don't have an account yet?{' '}
          <Link to='/sign_up' className='underline'>
            Sign up.
          </Link>
        </p>
      </div>
      <form className="form_class"  onSubmit={handleSubmit}>
        <div className='flex flex-col py-2'>
          <label className='email'>Email: </label>
          <input onChange={(e) => setEmail(e.target.value)} className="field_class"  type='email' />
        </div>
        <div className='flex flex-col py-2'>
          <label className='pass'>Password: </label>
          <input onChange={(e) => setPassword(e.target.value)} className="field_class"  type='password' />
        </div>
        <button className='btn-sign-in'>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;