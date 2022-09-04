import React, {useState} from 'react';
import '../../App.css';
import {UserAuth} from '../context/AuthContext';
import {motion} from "framer-motion";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import {useStateValue} from "../context/StateProvider";
import {azurirajPolje, firestore, polje} from "../../firebase";

const Review = () => {
    const {user} = UserAuth();
    const [isClicked, setClick] = useState(false);
    const [isClicked2, setClick2] = useState(false);

    const click = () => {
        setClick(true)
        setClick2(false)
    }
    const click2 = () => {
        setClick2(true)
        setClick(false)
    }
    const [{beers},] = useStateValue();

    const liking = (kljuc, vrijednost) => {

        setClick(true)
        setClick2(false)
        const docRef = polje(firestore, 'beers', kljuc);
        const data2 = {
            likes: vrijednost + 1

        };

        azurirajPolje(docRef,
            data2)
            .then(() => {
                console.log("lajkao si");
            })
            .catch(error => {
                console.log(error);
            })


    }
    const disliking = (kljuc, vrijednost) => {

        setClick2(true)
        setClick(false)
        const docRef = polje(firestore, 'beers', kljuc);
        const data2 = {
            dislikes: vrijednost + 1

        };

        azurirajPolje(docRef,
            data2)
            .then(() => {
                console.log("dislajkao si");
            })
            .catch(error => {
                console.log(error);
            })


    }
    return (
        <div className='recenzija'>

            <p className='korisnik'>Korisnik : {(user && user.email)}</p>
            <div

                className='all-items'
            >
                {beers && beers.length > 0 ? (
                    beers.map((item) => (
                        <div
                            key={item?.id}
                            className="item-beer3"

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
                            <div className="review-box">
                                <ThumbUpIcon
                                    sx={{
                                        fontSize: 60,
                                        color: isClicked ? "blue" : "white"
                                    }} onClick={() => {
                                    liking(item?.id, item?.likes)
                                }}/>
                                <ThumbDownIcon sx={{
                                    fontSize: 60,
                                    color: isClicked2 ? "red" : "white",
                                    marginLeft: 5
                                }} onClick={() => {
                                    disliking(item?.id, item?.dislikes)
                                }}/>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className='all-items'>
                        <div
                            key={1}
                            className="item-beer3"
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
                            <div className="review-box">
                                <ThumbUpIcon sx={{
                                    fontSize: 60,
                                    color: isClicked ? "blue" : "white"
                                }} onClick={() => {
                                    click()
                                }}/>
                                <ThumbDownIcon sx={{
                                    fontSize: 60,
                                    color: isClicked2 ? "red" : "white",
                                    marginLeft: 5
                                }} onClick={() => {
                                    click2()
                                }}/>
                            </div>
                        </div>
                        <div
                            key={2}
                            className="item-beer3"
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
                            className="item-beer3"
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
                            className="item-beer3"
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
                            className="item-beer3"
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
                            className="item-beer3"
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
                            className="item-beer3"
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
                            className="item-beer3"
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
        </div>
    );
};

export default Review;