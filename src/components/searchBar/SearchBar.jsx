import React, {useState} from 'react';
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import {motion} from "framer-motion";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import './SearchBar.css';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import {firestore, polje, azurirajPolje} from "../../firebase";

const SearchBar = ({placeholder ,data}) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  var [likes, setLikes] = useState(0)

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((item) => {
      return item.naziv.toLowerCase().includes(searchWord.toLowerCase())||item.pivovara.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };


  const likeing = (kljuc, vrijednost)=>{

    const docRef = polje(firestore, 'beers', kljuc);
    const data2 = {
      likes: vrijednost + 1

    };

     azurirajPolje(docRef,
        data2)
        .then(docRef => {
          console.log("lajkao si");
        })
        .catch(error => {
          console.log(error);
        })


  }

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      <div className="all-items">
      {filteredData.length !== 0 ? (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((item, key) => {
            return (
  
            <div
              key={key}
              className="item-beer2"
                     >
              <div className="w-full flex items-center justify-between">
                <motion.div
                  className="w-40 h-40 -mt-8 drop-shadow-2xl"
                  whileHover={{ scale: 1.01 }}
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
              <ThumbUpIcon  style={{ color: 'blue'}}/>
            </div>

            );
          })}
        </div>
      ): (
         
        data && data.length > 0 ? (
          data.map((item) => (
            <div
              key={item?.id}
              className="item-beer2"
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
                    <span style={{marginRight:'5px',
                        fontSize:'20px'
                        }}>{item?.likes}</span>
            <ThumbUpIcon style={{ color: 'blue',
                                    marginTop:'10px',
                                    fontSize:'32px'               
                                    }} onClick={()=>likeing(item?.id, item?.likes)} />
                                    
            <ThumbDownIcon style={{ color: 'red',
                                      marginLeft:'10px',
                                    marginTop:'10px',
                                    fontSize:'32px'
                                    }} />
            <span style={{marginLeft:'5px',
                        fontSize:'20px'
                        }}>{item?.dislikes}</span>
                  </p>
                </div>
              </div>
            </div>
          ))
           ) : (
           <div className='all-items'>
           <div
            key={10}
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
          key={2}
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
            key={3}
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
          key={4}
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
            key={5}
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
          key={6}
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
            key={7}
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
                        }}>{likes}</span>
            <ThumbUpIcon style={{ color: 'blue',
                                    marginTop:'10px',
                                    fontSize:'32px'               
                                    }} onClick={()=>setLikes(likes++)}/>
                                    
            <ThumbDownIcon style={{ color: 'red',
                                      marginLeft:'10px',
                                    marginTop:'10px',
                                    fontSize:'32px'
                                    }} onClick={likeing}/>
            <span style={{marginLeft:'5px',
                        fontSize:'20px'
                        }}>{likes}</span>
          </div>
        </div>

        </div>
          
          
        )
        
      )}
    </div>
  </div>
  );
}

export default SearchBar