import React from 'react';
import '../../App.css';
import { useStateValue } from "../context/StateProvider";
import Beers from '../beersContainer/Beers';


export default function Home() {
  const [{ beers},] = useStateValue();
  

  return (
    <>
      <section className='home'>
          <div className='aboutCraft'>
            <p className='introduction'>Dobrodošli na stranicu o hrvatskom tekućem zlatu</p>
            <p className='homepageParagraph'>Prošetat ćemo se kroz hrvatske pivovare te upoznati različita craft piva...</p>
            <p className='whatIsCraft'>Što je to craft pivo?</p>
            <p className='whatIsCraft2'>Pivo proizvedeno na kreativan način, bez korištenja jeftinih sirovina kako bi se uštedjelo u proizvodnji, 
                a proizvedeno od strane male nezavisne pivovare!</p>
          </div>
          <div className='beers-div'>
            <div className='label'>
            <h2>Piva</h2>
          </div>
          <div className='beers-slider'>
            <Beers
              data={beers}
            />
          </div>
        </div>
      </section>
    </>
  );
}
