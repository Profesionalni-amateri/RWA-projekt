import React, { useEffect } from 'react';
import {Navbar, Footer, SignUp, SignIn} from './components';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home, Pivovare, Piva, Zanimljivosti, Bosnjak, Varionica,Zmajska, Onama, Review} from './components';
import { AuthContextProvider } from './components/context/AuthContext';
import ProtectedRoute from './components/authentication/ProtectedRoute';
import { getAllItems } from "./utils/firebaseFunctions";
import { useStateValue } from "./components/context/StateProvider";
import { actionType } from "./components/context/reducer";


const App = () =>  {

  const [, dispatch] = useStateValue();
  const fetchData = async () => {
    await getAllItems().then((data) => {
      dispatch({
      type: actionType.SET_BEERS,
      beers: data,
    });
    });
  };

  useEffect(() => {
    fetchData();
  });



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
        <Route path='/zmajska' element={<Zmajska />} />
        <Route path='/onama' element={<Onama/>} />
      </Routes>
      </AuthContextProvider>
      <Footer/>
    </Router>
  );
}

export default App;
