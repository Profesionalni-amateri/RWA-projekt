
import React from "react";
import { motion } from "framer-motion";
import './Beers.css';


const Beers = ({data}) => {

  return (
    <div
  
      className='items-beers'
    >
      {data && data.length > 0 ? (
        data.map((item) => (
          <div
            key={item?.id}
            className="item-beer"
            
          >
            <div className="w-full flex items-center justify-between">
              <motion.div
                className="w-40 h-40 -mt-8 drop-shadow-2xl"
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={item?.imageUrl}
                  alt=""
                  className="beer-image"
                />
              </motion.div>
    
            </div>

            <div className="beers-text">
              <p className="beers-name">
               {item?.naziv}
              </p>
              <p className="beers-pivovara">
              <span className="text-sm text-red-500">Pivovara: </span>{item?.pivovara}
              </p>
              <div className="flex items-center gap-8">
                <p className="beers-price">
                 {item?.cijena} <span className="text-sm text-red-500">Kn</span>
                 
                </p>
              </div>
    
            </div>
          </div>
        ))
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <p className="text-xl text-headingColor font-semibold my-2">
            Items Not Available
          </p>
        </div>
      )}
    </div>
  );
};

export default Beers;