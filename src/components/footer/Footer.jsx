import React from 'react';
import './Footer.css';
import ItemsContainer from './ItemsContainer';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footerSize'>
        <ItemsContainer/>
      </div>
      <p>Copyright &copy; Profesionalni amateri</p>

    </footer>
    
  )
}

export default Footer