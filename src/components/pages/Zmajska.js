import React from 'react';
import {motion} from "framer-motion";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

export default function Zmajska() {
    return (
        <>
            <div className='zmajska'>
                <h1 className='nameOfBrewery'>Zmajska pivovara</h1>
                <p className='slogan'>
                    "Želimo kuhati pivo kakvo i sami volimo piti!"
                </p>
                <div className='imageAndText'>
                    <div className='aboutBrewery'>
                        <h2 className='about'>MALA POVIJEST PIVOVARE</h2>
                        <p className='textBrewery'>
                            Još u davno doba monarhije industrijskih lagera, Andrej je počeo kuhati pivo u vlastitom
                            domu.
                            Tada se teško dolazilo do informacija o kućnom pivarstvu pa je osnovao forum pivarstvo.info
                            gdje su se
                            počeli sakupljati pivski entuzijasti i kućni pivari iz Hrvatske i regije.
                            Nakon više godina isprobavanja raznih receptura u kuhinji, na veselje svojih prijatelja
                            redovitih kušača,
                            svoju strast je odlučio pretvoriti u posao te obogatiti domaću ponudu piva ale stilovima i
                            drugim craft specijalima.
                            Ideju je, svojim financijskim znanjima, a kasnije i suvlasništvom, podržao i prijatelj
                            Hrvoje Čirjak. Kreditom HBOR-a
                            i vlastitim sredstvima financiran je pogon pivovare izrađen od poznatog čakovečkog
                            proizvođača vinarija Letine. Prva piva,
                            Pale ale i Porter, predstavljena su u jesen 2014. i vrlo brzo su prikupila velik broj
                            poklonika.
                        </p>
                        <p className='textBrewery2'>
                            "Naša misija je kuhati pivo sa stavom, i raznolikom ponudom ale stilova izazvati noseve i
                            nepca starih i novih pivoljubaca.
                            Želimo pružiti kvalitetu, prepoznatljivost i, prije svega, užitak u svakom gutljaju. Aktivno
                            promoviramo craft scenu od
                            samih početaka te, u suradnji s kolegama pivarima, gradimo novu kulturu pivskih entuzijasta
                            i istraživača. Radimo ono što
                            volimo i zmajski se u tome trudimo!"
                        </p>
                    </div>

                    <div className="test">
                        <div key={1} className="item-beer2">
                            <div className="w-full flex items-center justify-between">
                                <motion.div
                                    className="w-40 h-40 -mt-8 drop-shadow-2xl"
                                    whileHover={{scale: 1.1}}
                                >
                                    <img
                                        src={
                                            "https://shop.stridon.hr/wp-content/uploads/2020/04/Sarajevsko-premium-pivo-05L-02.jpg"
                                        }
                                        alt=""
                                        className="beer-image"
                                    />
                                </motion.div>
                            </div>

                            <div className="beers-text">
                                <p className="beers-name">{"ludilo"}</p>
                                <p className="beers-pivovara">
                                    <span className="text-sm text-red-500">Pivovara: </span>
                                    {"pivovara"}
                                </p>
                                <div className="flex items-center gap-8">
                                    <p className="beers-price">
                                        {"2"} <span className="text-sm text-red-500">Kn</span>
                                        <ThumbUpIcon style={{color: "blue", marginTop: "20px"}}/>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div key={1} className="item-beer2">
                            <div className="w-full flex items-center justify-between">
                                <motion.div
                                    className="w-40 h-40 -mt-8 drop-shadow-2xl"
                                    whileHover={{scale: 1.1}}
                                >
                                    <img
                                        src={
                                            "https://shop.stridon.hr/wp-content/uploads/2020/04/Sarajevsko-premium-pivo-05L-02.jpg"
                                        }
                                        alt=""
                                        className="beer-image"
                                    />
                                </motion.div>
                            </div>

                            <div className="beers-text">
                                <p className="beers-name">{"ludilo"}</p>
                                <p className="beers-pivovara">
                                    <span className="text-sm text-red-500">Pivovara: </span>
                                    {"pivovara"}
                                </p>
                                <div className="flex items-center gap-8">
                                    <p className="beers-price">
                                        {"2"} <span className="text-sm text-red-500">Kn</span>
                                        <ThumbUpIcon style={{color: "blue", marginTop: "20px"}}/>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div key={1} className="item-beer2">
                            <div className="w-full flex items-center justify-between">
                                <motion.div
                                    className="w-40 h-40 -mt-8 drop-shadow-2xl"
                                    whileHover={{scale: 1.1}}
                                >
                                    <img
                                        src={
                                            "https://shop.stridon.hr/wp-content/uploads/2020/04/Sarajevsko-premium-pivo-05L-02.jpg"
                                        }
                                        alt=""
                                        className="beer-image"
                                    />
                                </motion.div>
                            </div>

                            <div className="beers-text">
                                <p className="beers-name">{"ludilo2"}</p>
                                <p className="beers-pivovara">
                                    <span className="text-sm text-red-500">Pivovara: </span>
                                    {"pivovara"}
                                </p>
                                <div className="flex items-center gap-8">
                                    <p className="beers-price">
                                        {"2"} <span className="text-sm text-red-500">Kn</span>
                                        <ThumbUpIcon style={{color: "blue", marginTop: "20px"}}/>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div key={1} className="item-beer2">
                            <div className="w-full flex items-center justify-between">
                                <motion.div
                                    className="w-40 h-40 -mt-8 drop-shadow-2xl"
                                    whileHover={{scale: 1.1}}
                                >
                                    <img
                                        src={
                                            "https://shop.stridon.hr/wp-content/uploads/2020/04/Sarajevsko-premium-pivo-05L-02.jpg"
                                        }
                                        alt=""
                                        className="beer-image"
                                    />
                                </motion.div>
                            </div>

                            <div className="beers-text">
                                <p className="beers-name">{"ludilo"}</p>
                                <p className="beers-pivovara">
                                    <span className="text-sm text-red-500">Pivovara: </span>
                                    {"pivovara"}
                                </p>
                                <div className="flex items-center gap-8">
                                    <p className="beers-price">
                                        {"2"} <span className="text-sm text-red-500">Kn</span>
                                        <ThumbUpIcon style={{color: "blue", marginTop: "20px"}}/>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div key={1} className="item-beer2">
                            <div className="w-full flex items-center justify-between">
                                <motion.div
                                    className="w-40 h-40 -mt-8 drop-shadow-2xl"
                                    whileHover={{scale: 1.1}}
                                >
                                    <img
                                        src={
                                            "https://shop.stridon.hr/wp-content/uploads/2020/04/Sarajevsko-premium-pivo-05L-02.jpg"
                                        }
                                        alt=""
                                        className="beer-image"
                                    />
                                </motion.div>
                            </div>

                            <div className="beers-text">
                                <p className="beers-name">{"ludilo"}</p>
                                <p className="beers-pivovara">
                                    <span className="text-sm text-red-500">Pivovara: </span>
                                    {"pivovara"}
                                </p>
                                <div className="flex items-center gap-8">
                                    <p className="beers-price">
                                        {"2"} <span className="text-sm text-red-500">Kn</span>
                                        <ThumbUpIcon style={{color: "blue", marginTop: "20px"}}/>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div key={1} className="item-beer2">
                            <div className="w-full flex items-center justify-between">
                                <motion.div
                                    className="w-40 h-40 -mt-8 drop-shadow-2xl"
                                    whileHover={{scale: 1.1}}
                                >
                                    <img
                                        src={
                                            "https://shop.stridon.hr/wp-content/uploads/2020/04/Sarajevsko-premium-pivo-05L-02.jpg"
                                        }
                                        alt=""
                                        className="beer-image"
                                    />
                                </motion.div>
                            </div>

                            <div className="beers-text">
                                <p className="beers-name">{"ludilo2"}</p>
                                <p className="beers-pivovara">
                                    <span className="text-sm text-red-500">Pivovara: </span>
                                    {"pivovara"}
                                </p>
                                <div className="flex items-center gap-8">
                                    <p className="beers-price">
                                        {"2"} <span className="text-sm text-red-500">Kn</span>
                                        <ThumbUpIcon style={{color: "blue", marginTop: "20px"}}/>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}