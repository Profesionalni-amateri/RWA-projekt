import React from 'react';
import './App.css';
import NavBar  from './components/navbar/NavBar'
import Body from './components/body/Body'
import Footer from './components/footer/Footer';

const App = () => {
  return (
      <div>
        <NavBar/>
        <Body/>
        <Footer/>
      </div>
  )
}

export default App