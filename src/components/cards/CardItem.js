import React from 'react';
import { Link } from 'react-router-dom';

const CardItem = (props) => {
  return (
    <>
      <li className='cards__item'
       style={{
        backgroundImage: 'linear-gradient(to right, #2c3e50, #4ca1af)',
      }}
      
      >
        
        <Link className='cards__item__link' to={props.path}>
         
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt=''
              src={props.src}
            />
        
          </figure>
        </Link>
        <div className='cards__item__info'>
            <h5 className='cards__item__text2'>{props.text}</h5>
          </div>
      </li>
    </>
  );
}

export default CardItem;