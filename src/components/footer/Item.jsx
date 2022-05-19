import React from 'react';
import './ItemsContainer.css';

const Item = ({Links, title}) => {
  return (
    <div className='mainDiv'>
      <h2>{title}</h2>
      <ul className='items'>
       <div className='container'>
       {Links.map((link) => 
        <li className='item' key={link.name}>
          {link.pic ? 
          <div className='hasPic'>
            <li className='firstRow'>
              <p className='pic'>{link.pic}</p>
              <p className='name'>{link.name}</p>
            </li>
            
            <li>
              <h6>{link.info}</h6>
            </li>
          </div>
          :<a className="itemLink" href={link.link}>{link.name}</a>
        }
        </li>
       )}
       </div>
      </ul>
    </div>
      
  )
}

export default Item