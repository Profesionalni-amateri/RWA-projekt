import React from 'react';
import '../../App.css';
import { useStateValue } from "../context/StateProvider";
import Beers from '../beersContainer/Beers';


export default function Home() {
  const [{ beers},] = useStateValue();
  

  return (
    <>
      <section className='home'>
        <div className='beers-div'>
          <div className='nameAndButton'>
            <h2 >Piva</h2>
            
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
