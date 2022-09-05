import React from 'react';
import '../../App.css';
import SportsBarIcon from '@mui/icons-material/SportsBar';

export default function Zanimljivosti() {
  
  return (
    <div className='zanimljivosti'>
      <div className='facts'>
        <p className='ff'><SportsBarIcon style={{color:'gold'}}/> U krugu kućnih pivara koji se okupljaju na forumu Pivarstvo.info Obiteljska pivovara Bošnjak
         prva je registrirala proizvodnju piva.</p>

        <p className='ff'><SportsBarIcon style={{color:'gold'}}/> Nakon vrlo uspješnog B-day Stouta kojim su proslavili godinu dana postojanja Varionice na tržištu, 
        izbacuju novo pivo, četvrto po redu, Neon Stout koje će biti dostupno točeno i u boci. 
        Specifičnost ovog tamnog piva je što uz ječmene sladove sadrži i dvije neslađene žitarice!</p>

        <p className='ff'><SportsBarIcon style={{color:'gold'}}/> Andrejev kućni homebrew sustav zvao se „Baltazar“ jer je sve prijatelje podsjećao na stroj poznatog crtanog 
        profesora</p>

        <p className='ff'><SportsBarIcon style={{color:'gold'}}/> Pivovara je osnovana na 8. mart - Dan žena, a ime je dobila po jednom od prvih Andrejevih hmeljenijih 
        homebrewa koje je, skuhano davne 2009. godine u mjesecu maju, dobilo nadimak „zmajsko“ a kasnije se taj nadimak pretvorio 
        u logično ime za pivovaru - „Zmajska pivovara“ - Zmaja na logu pivovare nacrtao je ilustrator Krešimir Certić Misch</p>

        <p className='ff'><SportsBarIcon style={{color:'gold'}}/> Piva Zmajske pivovare priznata su i na svjetskoj sceni – već 2014., 
        u prvoj godini proizvodnje, svrstani su u top 10 novotvorenih pivovara na svijetu prema portalu Ratebeer, 
        a njihov Porter ocijenjen je u prvih 15 svjetskih portera</p>
      </div>
    </div>
  );
}
