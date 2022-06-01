import React from 'react';
import {Navbar, Footer, SignUp, SignIn} from './components';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home, Pivovare, Piva, Zanimljivosti, Bosnjak, Varionica, Onama, Review} from './components';
import { AuthContextProvider } from './components/context/AuthContext';
import ProtectedRoute from './components/authentication/ProtectedRoute';


const App = () =>  {
  return (
    <Router>
      <Navbar />
      <AuthContextProvider>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/pivovare' element={<Pivovare/>} />
        <Route path='/piva' element={<Piva/>} />
        <Route path='/zanimljivosti' element={<Zanimljivosti/>} />
        <Route path='/sign_up' element={<SignUp/>} />
        <Route path='/recenzija'
         element={
          <ProtectedRoute> 
              <Review/> 
           </ProtectedRoute>
          } />
        <Route path='/sign_in' element={<SignIn/>} />
        <Route path='/bosnjak' element={<Bosnjak/>} />
        <Route path='/varionica' element={<Varionica/>} />
        <Route path='/onama' element={<Onama/>} />
      </Routes>
      </AuthContextProvider>
      <Footer/>
    </Router>
  );
}

export default App;
