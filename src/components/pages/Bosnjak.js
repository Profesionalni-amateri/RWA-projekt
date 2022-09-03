import React from "react";
import "../../App.css";
import { motion } from "framer-motion";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

export default function Bosnjak() {
  return (
    <>
      <div className="bosnjak">
        <h1 className="nameOfBrewery">Obiteljska pivovara Bošnjak</h1>
        <p className="slogan">
          "Vino pije ko vinograd sadi, ko ne sadi taj se pivom hladi!"
        </p>
        <div className="imageAndText">
          <div className="aboutBrewery">
            <h2 className="about">MALA POVIJEST PIVOVARE</h2>
            <p className="textBrewery">
              Obitelj Bošnjak otvorila je prvu Kušaonicu domaćeg piva koja je
              nastala iz ljubavi prema hobiju – kuhanju domaćeg piva. U davna
              vremena prije stotinjak godina u dvorištu obitelji Bošnjak iskopan
              je duboki bunar za potrebe mlinova i tadašnjeg obiteljskog
              „biznisa“. Bunar nije presušivao ni u vrijeme najvećih suša. Danas
              ga gospodarstvo koristi po potrebi, premda ima priključak na
              regionalni vodovod. U ista ta davna vremena, jedan od kućara u
              dvorištu nazvan je - pivnica.
            </p>
            <p className="textBrewery2">
            "U pivnicu se sjedalo nakon napornog cjelodnevnog posla na čašicu
            razgovora. Tu se čuvalo piće i hrana iz domaće proizvodnje. Uglavnom
            rakija i suhomesnati proizvodi. Vina nije bilo tada, kao ni sada -
            vinograd ne rodi na Savi, ali moglo se naći piva. Tada, isto kao i
            sada. Tadašnje je kuhala prabaka, bilo je mutno i čuvalo se u
            zemljanim ćupovima. Iz tog vremena potječe i običaj kuhanja rakije
            od kukuruza čiji je tehnološki proces vrlo sličan procesu dobivanja
            piva, odnosno u oba procesa alkohol potječe od žitarica. Današnje
            pivo kuhaju Mario i Dario, praunuci spomenute bake. Prilično je
            bistro, mada nije filtrirano, i čuva se u suvremenoj opremi na
            kontroliranoj temperaturi hladnjače. Kad je nakon bezbroj pokušaja
            pivo postalo dovoljno dobro da ga mogu probati i drugi, uslijedili
            su razni prijedlozi i počele rađati nove ideje. Kako bismo lakše
            djelovali, zajedno s Adrejem Čapkom osnivamo Udrugu malih pivara.",
            Marijana Bošnjak
          </p>
          </div>
          
      
          <div className="test">
          <div key={1} className="item-beer2">
              <div className="w-full flex items-center justify-between">
                <motion.div
                  className="w-40 h-40 -mt-8 drop-shadow-2xl"
                  whileHover={{ scale: 1.1 }}
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
                    <ThumbUpIcon style={{ color: "blue", marginTop: "20px" }} />
                  </p>
                </div>
              </div>
            </div>
            <div key={1} className="item-beer2">
              <div className="w-full flex items-center justify-between">
                <motion.div
                  className="w-40 h-40 -mt-8 drop-shadow-2xl"
                  whileHover={{ scale: 1.1 }}
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
                    <ThumbUpIcon style={{ color: "blue", marginTop: "20px" }} />
                  </p>
                </div>
              </div>
            </div>
            <div key={1} className="item-beer2">
              <div className="w-full flex items-center justify-between">
                <motion.div
                  className="w-40 h-40 -mt-8 drop-shadow-2xl"
                  whileHover={{ scale: 1.1 }}
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
                    <ThumbUpIcon style={{ color: "blue", marginTop: "20px" }} />
                  </p>
                </div>
              </div>
            </div>
            <div key={1} className="item-beer2">
              <div className="w-full flex items-center justify-between">
                <motion.div
                  className="w-40 h-40 -mt-8 drop-shadow-2xl"
                  whileHover={{ scale: 1.1 }}
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
                    <ThumbUpIcon style={{ color: "blue", marginTop: "20px" }} />
                  </p>
                </div>
              </div>
            </div>
            <div key={1} className="item-beer2">
              <div className="w-full flex items-center justify-between">
                <motion.div
                  className="w-40 h-40 -mt-8 drop-shadow-2xl"
                  whileHover={{ scale: 1.1 }}
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
                    <ThumbUpIcon style={{ color: "blue", marginTop: "20px" }} />
                  </p>
                </div>
              </div>
            </div>
            <div key={1} className="item-beer2">
              <div className="w-full flex items-center justify-between">
                <motion.div
                  className="w-40 h-40 -mt-8 drop-shadow-2xl"
                  whileHover={{ scale: 1.1 }}
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
                    <ThumbUpIcon style={{ color: "blue", marginTop: "20px" }} />
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
