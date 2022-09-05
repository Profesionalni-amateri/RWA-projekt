import React from 'react';
import bosnjak_slika from '../../images/bosnjak.jpeg'
import varionica_slika from '../../images/varionica.jpg'
import zmajsko_slika from '../../images/zmajsko.jpg'
import './Cards.css';
import CardItem from './CardItem';

const  Cards = () => {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={bosnjak_slika}
              text='Obitelj Bošnjak otvorila je prvu Kušaonicu domaćeg piva koja je nastala iz ljubavi prema hobiju – kuhanju domaćeg piva.'
              label='Bošnjak'
              path='/bosnjak'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={varionica_slika}
              text='Medaljama okićena craft pivovara koju čini ekipa entuzijasta i profesionalaca povezanih obiteljsko-prijateljskim vezama.'
              label='Varionica'
              path='/varionica'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={zmajsko_slika}
              text='Svako pivo Zmajske pivovare rezultat je majstorske vještine, vrhunske kvalitete sastojaka, bezgranične mašte, odvažne kreativnosti, autentičnoga življenja crafta. '
              label='Zmajska'
              path='/Zmajska'
            />
          </ul>

        </div>
      </div>
    </div>
  );
}

export default Cards;