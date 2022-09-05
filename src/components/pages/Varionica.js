import React, {useEffect, useState} from 'react';
import {motion} from "framer-motion";
import {useStateValue} from "../context/StateProvider";

export default function Varionica() {

    const [{beers},] = useStateValue();
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const searchWord = "varionica"
        if (beers != null) {
            const newFilter = beers.filter((item) => {
                return item.naziv.toLowerCase().includes(searchWord.toLowerCase()) || item.pivovara.toLowerCase().includes(searchWord.toLowerCase());
            });

            setFilteredData(newFilter);
        }
        else {
            setFilteredData([])
        }
    }, [beers])
    return (
        <>
            <div className='varionica'>
                <h1 className='nameOfBrewery'>Varionica</h1>
                <p className='slogan'>
                    "Raditi dobro pivo i isprobavati različite stilove"
                </p>
                <div className='imageAndText'>
                    <div className='aboutBrewery'>
                        <h2 className='about'>MALA POVIJEST PIVOVARE</h2>
                        <p className='textBrewery'>
                            Varionica je craft pivovara čiji su idejni začetnici i pokretači Matija Mrazek i Davor
                            Simičić.
                            Nakon višegodišnje proizvodnje u vlastitom podrumu odvažili su se na sljedeći korak i
                            otvaranjem
                            Varionice 2014. godine pridružuju se Craft beer revoluciji u Hrvatskoj.
                        </p>
                        <p className='textBrewery2'>
                            "Prva proizvodnja započela je u iznajmljenom pogonu u Donjem Vidovcu gdje se pivo proizvodi
                            i danas.
                            Želja nam je proizvoditi više različitih stilova piva vrhunske kvalitete u manjim šaržama
                            kako bi
                            zajedno
                            mogli uživati u svježim i raznovrsnim okusima koje ovakav tip proizvodnje pruža. Naša misija
                            je
                            upoznati vas
                            sa novim sortama hmelja, različitim sladovima i žitaricama, novim kvascima i ponekim tajnim
                            začinom
                            kako bi
                            probudili vašu znatiželju za još dublje istraživanje piva."
                        </p>
                    </div>

                    <div className="test">
                        {filteredData.length !== 0 ? (<div className="dataResult">
                            {filteredData.slice(0, 15).map((item, key) => {
                                return (

                                    <div
                                        key={key}
                                        className="item-beer2"
                                    >
                                        <div >
                                            <motion.div

                                                whileHover={{scale: 1.01}}
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
                                                    <span
                                                        >Pivovara: </span>{item?.pivovara}
                                            </p>
                                            <div >
                                                <p className="beers-price">
                                                    {item?.cijena} <span >Kn</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                );
                            })}
                        </div>) : (
                            (<div className='all-items'>
                                    <div
                                        key={10}
                                        className="item-beer2"
                                    >
                                        <div >
                                            <motion.div

                                                whileHover={{scale: 1.1}}
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
                                                {'test 1'}
                                            </p>
                                            <p className="beers-pivovara">
                                                <span >Pivovara: </span>{'pivovara'}
                                            </p>
                                            <div >
                                                <p className="beers-price">
                                                    {'2'} <span >Kn</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        key={2}
                                        className="item-beer2"
                                    >
                                        <div >
                                            <motion.div

                                                whileHover={{scale: 1.1}}
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
                                                {'test 2'}
                                            </p>
                                            <p className="beers-pivovara">
                                                <span >Pivovara: </span>{'pivovara'}
                                            </p>
                                            <div >
                                                <p className="beers-price">
                                                    {'2'} <span >Kn</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        key={3}
                                        className="item-beer2"
                                    >
                                        <div >
                                            <motion.div

                                                whileHover={{scale: 1.1}}
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
                                                {'test 3'}
                                            </p>
                                            <p className="beers-pivovara">
                                                <span >Pivovara: </span>{'pivovara'}
                                            </p>
                                            <div >
                                                <p className="beers-price">
                                                    {'2'} <span >Kn</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        key={4}
                                        className="item-beer2"
                                    >
                                        <div >
                                            <motion.div

                                                whileHover={{scale: 1.1}}
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
                                                {'test 4'}
                                            </p>
                                            <p className="beers-pivovara">
                                                <span >Pivovara: </span>{'pivovara'}
                                            </p>
                                            <div >
                                                <p className="beers-price">
                                                    {'2'} <span >Kn</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                            </div>)
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}