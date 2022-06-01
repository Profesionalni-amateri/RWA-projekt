import React, { useState } from 'react';
import { Button } from '../button/Button';
import { Link, NavLink } from 'react-router-dom';
import { AuthContextProvider } from '../../components/context/AuthContext';
import './Navbar.css';
import Dropdown from './Dropdown';

const Navbar = () =>  {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          Hrvatska<font>Piva</font> 
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <NavLink to='/' style={({ isActive }) => ({
                    backgroundColor: isActive? 'gold':'',
                    borderRadius: '2px' ,
                    color: isActive? 'black':'white'
                })} className='nav-links' onClick={closeMobileMenu}>
              Početna
            </NavLink>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <NavLink
              to='/pivovare'
              style={({ isActive }) => ({
                backgroundColor: isActive? 'gold':'',
                borderRadius: '2px' ,
                color: isActive? 'black':'white'
            })}
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Pivovare <i className='fas fa-caret-down' />
            </NavLink>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <NavLink
              to='/piva'
              style={({ isActive }) => ({
                backgroundColor: isActive? 'gold':'',
                borderRadius: '2px' ,
                color: isActive? 'black':'white'
            })}
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Piva
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              to='/zanimljivosti'
              style={({ isActive }) => ({
                backgroundColor: isActive? 'gold':'',
                borderRadius: '2px' ,
                color: isActive? 'black':'white'
            })}
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Zanimljivosti
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              to='/recenzija'
              style={({ isActive }) => ({
                backgroundColor: isActive? 'gold':'',
                borderRadius: '2px' ,
                color: isActive? 'black':'white'
            })}
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Recenzija
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/Onama' style={({ isActive }) => ({
                    backgroundColor: isActive? 'gold':'',
                    borderRadius: '2px' ,
                    color: isActive? 'black':'white'
                })} className='nav-links' onClick={closeMobileMenu}>
              O nama
            </NavLink>
          </li>
          <li>
            <Link
              to='/sign_in'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Prijavi se
            </Link>
          </li>  
        </ul> 
        <AuthContextProvider>
        <Button/>
        </AuthContextProvider> 
      </nav>
    </>
  );
}

export default Navbar;
