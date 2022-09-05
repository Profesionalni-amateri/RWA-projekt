import React from "react";
import {motion} from "framer-motion";
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
                        <div>
                            <motion.div
                                whileHover={{scale: 1.1}}
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
                                <span>Pivovara: </span>{item?.pivovara}
                            </p>
                            <div>
                                <p className="beers-price">
                                    {item?.cijena} <span>Kn</span>

                                </p>
                            </div>

                        </div>
                    </div>
                ))
            ) : (
                <div className='items-beers'>
                    <div
                        key={1}
                        className="item-beer"
                    >
                        <div>
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
                                <span>Pivovara: </span>{'pivovara'}
                            </p>
                            <div>
                                <p className="beers-price">
                                    {'2'} <span>Kn</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        key={2}
                        className="item-beer"
                    >
                        <div>
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
                                <span>Pivovara: </span>{'pivovara'}
                            </p>
                            <div>
                                <p className="beers-price">
                                    {'2'} <span>Kn</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        key={3}
                        className="item-beer"
                    >
                        <div>
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
                                <span>Pivovara: </span>{'pivovara'}
                            </p>
                            <div>
                                <p className="beers-price">
                                    {'2'} <span>Kn</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        key={4}
                        className="item-beer"
                    >
                        <div>
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
                                <span>Pivovara: </span>{'pivovara'}
                            </p>
                            <div>
                                <p className="beers-price">
                                    {'2'} <span>Kn</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        key={5}
                        className="item-beer"
                    >
                        <div>
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
                                {'test 5'}
                            </p>
                            <p className="beers-pivovara">
                                <span>Pivovara: </span>{'pivovara'}
                            </p>
                            <div>
                                <p className="beers-price">
                                    {'2'} <span>Kn</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        key={6}
                        className="item-beer"
                    >
                        <div>
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
                                {'test 6'}
                            </p>
                            <p className="beers-pivovara">
                                <span>Pivovara: </span>{'pivovara'}
                            </p>
                            <div>
                                <p className="beers-price">
                                    {'2'} <span>Kn</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        key={7}
                        className="item-beer"
                    >
                        <div>
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
                                {'test 7'}
                            </p>
                            <p className="beers-pivovara">
                                <span>Pivovara: </span>{'pivovara'}
                            </p>
                            <div>
                                <p className="beers-price">
                                    {'2'} <span>Kn</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        key={8}
                        className="item-beer"
                    >
                        <div>
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
                                {'test 8'}
                            </p>
                            <p className="beers-pivovara">
                                <span>Pivovara: </span>{'pivovara'}
                            </p>
                            <div>
                                <p className="beers-price">
                                    {'2'} <span>Kn</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            )}
        </div>
    );
};

export default Beers;