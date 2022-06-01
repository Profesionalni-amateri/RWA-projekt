import React from 'react';
import './ItemsContainer.css';

const Item = ({Links, title}) => {
  return (
    <div className='mainDiv'>
      <h2>{title}</h2>
      <div className='items'>
       <div className='container'>
       {Links.map((link) => 
        <div className='item' key={link.name}>
          {link.pic ? 
          <div className='hasPic'>
            <div className='firstRow'>
              <p className='pic'>{link.pic}</p>
              <p className='name'>{link.name}</p>
            </div>
            
            <div>
              <h6>{link.info}</h6>
            </div>
          </div>
          :<a className="itemLink" href={link.link}>{link.name}</a>
        }
        </div>
       )}
       </div>
      </div>
    </div>
      
  )
}

export default Item