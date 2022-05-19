import React from 'react';
import {Navbar, Footer} from './components';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home, Pivovare, Piva, Zanimljivosti, SignUp, Bosnjak, Varionica, Onama} from './components';


const App = () =>  {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/pivovare' element={<Pivovare/>} />
        <Route path='/piva' element={<Piva/>} />
        <Route path='/zanimljivosti' element={<Zanimljivosti/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/bosnjak' element={<Bosnjak/>} />
        <Route path='/varionica' element={<Varionica/>} />
        <Route path='/onama' element={<Onama/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
