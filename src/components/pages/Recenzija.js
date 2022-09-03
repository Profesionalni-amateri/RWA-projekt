import React from 'react';
import '../../App.css';
import { UserAuth } from '../context/AuthContext';
import { motion } from "framer-motion";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const Review = () => {
  const { user } = UserAuth();

  return (
    <div className='recenzija'>
      
       <p className='korisnik'>Korisnik : {(user && user.email) || 'Gost'}</p> 
      <div className='all-items'>
           <div
            key={1}
            className="item-beer2"
          >
            <div className="w-full flex items-center justify-between">
              <motion.div
                className="w-40 h-40 -mt-8 drop-shadow-2xl"
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={'https://shop.stridon.hr/wp-content/uploads/2020/04/Sarajevsko-premium-pivo-05L-02.jpg'}
                  alt=""
                  className="beer-image"
                />
              </motion.div>
    
            </div>

            <div className="beers-text">
              <p className="beers-name">
               {'ludilo'}
              </p>
              <p className="beers-pivovara">
              <span className="text-sm text-red-500">Pivovara: </span>{'pivovara'}
              </p>
              <div className="flex items-center gap-8">
                <p className="beers-price">
                  {'2'} <span className="text-sm text-red-500">Kn</span>
                  <ThumbUpIcon style={{ color: 'blue',
                                      marginTop:'20px' }}/>
                </p>
              </div>
            </div>
          </div>
          <div
          key={1}
          className="item-beer2"
        >
          <div className="w-full flex items-center justify-between">
            <motion.div
              className="w-40 h-40 -mt-8 drop-shadow-2xl"
              whileHover={{ scale: 1.1 }}
            >
              <img
                src={'https://shop.stridon.hr/wp-content/uploads/2020/04/Sarajevsko-premium-pivo-05L-02.jpg'}
                alt=""
                className="beer-image"
              />
            </motion.div>
  
          </div>

          <div className="beers-text">
            <p className="beers-name">
             {'ludilo2'}
            </p>
            <p className="beers-pivovara">
            <span className="text-sm text-red-500">Pivovara: </span>{'pivovara'}
            </p>
            <div className="flex items-center gap-8">
              <p className="beers-price">
                {'2'} <span className="text-sm text-red-500">Kn</span>
                <ThumbUpIcon style={{ color: 'blue',
                                    marginTop:'20px' }}/>
              </p>
            </div>
          </div>
        </div>

        <div
            key={1}
            className="item-beer2"
          >
            <div className="w-full flex items-center justify-between">
              <motion.div
                className="w-40 h-40 -mt-8 drop-shadow-2xl"
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={'https://shop.stridon.hr/wp-content/uploads/2020/04/Sarajevsko-premium-pivo-05L-02.jpg'}
                  alt=""
                  className="beer-image"
                />
              </motion.div>
    
            </div>

            <div className="beers-text">
              <p className="beers-name">
               {'ludilo3'}
              </p>
              <p className="beers-pivovara">
              <span className="text-sm text-red-500">Pivovara: </span>{'pivovara'}
              </p>
              <div className="flex items-center gap-8">
                <p className="beers-price">
                  {'2'} <span className="text-sm text-red-500">Kn</span>
                  <ThumbUpIcon style={{ color: 'blue',
                                      marginTop:'20px' }}/>
                </p>
              </div>
            </div>
          </div>
          <div
          key={1}
          className="item-beer2"
        >
          <div className="w-full flex items-center justify-between">
            <motion.div
              className="w-40 h-40 -mt-8 drop-shadow-2xl"
              whileHover={{ scale: 1.1 }}
            >
              <img
                src={'https://shop.stridon.hr/wp-content/uploads/2020/04/Sarajevsko-premium-pivo-05L-02.jpg'}
                alt=""
                className="beer-image"
              />
            </motion.div>
  
          </div>

          <div className="beers-text">
            <p className="beers-name">
             {'ludilo4'}
            </p>
            <p className="beers-pivovara">
            <span className="text-sm text-red-500">Pivovara: </span>{'pivovara'}
            </p>
            <div className="flex items-center gap-8">
              <p className="beers-price">
                {'2'} <span className="text-sm text-red-500">Kn</span>
                <ThumbUpIcon style={{ color: 'blue',
                                    marginTop:'20px' }}/>
              </p>
            </div>
          </div>
        </div>
        <div
            key={1}
            className="item-beer2"
          >
            <div className="w-full flex items-center justify-between">
              <motion.div
                className="w-40 h-40 -mt-8 drop-shadow-2xl"
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={'https://shop.stridon.hr/wp-content/uploads/2020/04/Sarajevsko-premium-pivo-05L-02.jpg'}
                  alt=""
                  className="beer-image"
                />
              </motion.div>
    
            </div>

            <div className="beers-text">
              <p className="beers-name">
               {'ludilo5'}
              </p>
              <p className="beers-pivovara">
              <span className="text-sm text-red-500">Pivovara: </span>{'pivovara'}
              </p>
              <div className="flex items-center gap-8">
                <p className="beers-price">
                  {'2'} <span className="text-sm text-red-500">Kn</span>
                  <ThumbUpIcon style={{ color: 'blue',
                                      marginTop:'20px' }}/>
                </p>
              </div>
            </div>
          </div>
          <div
          key={1}
          className="item-beer2"
        >
          <div className="w-full flex items-center justify-between">
            <motion.div
              className="w-40 h-40 -mt-8 drop-shadow-2xl"
              whileHover={{ scale: 1.1 }}
            >
              <img
                src={'https://shop.stridon.hr/wp-content/uploads/2020/04/Sarajevsko-premium-pivo-05L-02.jpg'}
                alt=""
                className="beer-image"
              />
            </motion.div>
  
          </div>

          <div className="beers-text">
            <p className="beers-name">
             {'ludilo6'}
            </p>
            <p className="beers-pivovara">
            <span className="text-sm text-red-500">Pivovara: </span>{'pivovara'}
            </p>
            <div className="flex items-center gap-8">
              <p className="beers-price">
                {'2'} <span className="text-sm text-red-500">Kn</span>
                <ThumbUpIcon style={{ color: 'blue',
                                    marginTop:'20px' }}/>
              </p>
            </div>
          </div>
        </div>

        <div
            key={1}
            className="item-beer2"
          >
            <div className="w-full flex items-center justify-between">
              <motion.div
                className="w-40 h-40 -mt-8 drop-shadow-2xl"
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={'https://shop.stridon.hr/wp-content/uploads/2020/04/Sarajevsko-premium-pivo-05L-02.jpg'}
                  alt=""
                  className="beer-image"
                />
              </motion.div>
    
            </div>

            <div className="beers-text">
              <p className="beers-name">
               {'ludilo7'}
              </p>
              <p className="beers-pivovara">
              <span className="text-sm text-red-500">Pivovara: </span>{'pivovara'}
              </p>
              <div className="flex items-center gap-8">
                <p className="beers-price">
                  {'2'} <span className="text-sm text-red-500">Kn</span>
                </p>
              </div>
              <span style={{marginRight:'5px',
                        fontSize:'20px'
                        }}>{'2'}</span>
            <ThumbUpIcon style={{ color: 'blue',
                                    marginTop:'10px',
                                    fontSize:'32px'
                                    }}/>
                                    
            <ThumbDownIcon style={{ color: 'red',
                                      marginLeft:'60px',
                                    marginTop:'10px',
                                    fontSize:'32px'
                                    }}/>
            <span style={{marginLeft:'5px',
                        fontSize:'20px'
                        }}>{'2'}</span>
            </div>
          </div>
          <div
          key={1}
          className="item-beer2"
        >
          <div className="w-full flex items-center justify-between">
            <motion.div
              className="w-40 h-40 -mt-8 drop-shadow-2xl"
              whileHover={{ scale: 1.1 }}
            >
              <img
                src={'https://shop.stridon.hr/wp-content/uploads/2020/04/Sarajevsko-premium-pivo-05L-02.jpg'}
                alt=""
                className="beer-image"
              />
            </motion.div>
  
          </div>

          <div className="beers-text">
            <p className="beers-name">
             {'ludilo8'}
            </p>
            <p className="beers-pivovara">
            <span className="text-sm text-red-500">Pivovara: </span>{'pivovara'}
            </p>
            <div className="flex items-center gap-8">
              <p className="beers-price">
                {'2'} <span className="text-sm text-red-500">Kn</span>
              </p>
            </div>
           <span style={{marginRight:'5px',
                        fontSize:'20px'
                        }}>{1}</span>
            <ThumbUpIcon style={{ color: 'blue',
                                    marginTop:'10px',
                                    fontSize:'32px'               
                                    }} onClick={1}/>
                                    
            <ThumbDownIcon style={{ color: 'red',
                                      marginLeft:'10px',
                                    marginTop:'10px',
                                    fontSize:'32px'
                                    }}onClick={1}/>
            <span style={{marginLeft:'5px',
                        fontSize:'20px'
                        }}>{1}</span>
          </div>
        </div>

        </div>
    </div>
  );
};

export default Review;