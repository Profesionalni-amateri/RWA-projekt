import React from 'react';
import './NavBar.css';


const NavBar = () => {
  return (
      <div>
          <nav className="navbar navbar-expand-lg navbar-light p-3 bg-dark text-white">
              <span className="stylish">Hrvatska</span>
              <span className="logo">Piva</span>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                      <li className="nav-item active">
                          <a className="nav-link" href="index.html">Početna <span class="sr-only">(current)</span></a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="stranice/Piva.html">Piva</a>
                      </li>
                      <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle active" href="../stranice/Pivovare.html" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">
                              Pivovare
                          </a>

                          <div className="dropdown-menu" aria-labelledby="navbarDropdown">

                              <a className="dropdown-item" href="stranice/Pulfer.html">Pulfer</a>
                              <a className="dropdown-item" href="stranice/Varionica.html">Varionica</a>

                          </div>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="stranice/Zanimljivosti.html">Zanimljivosti</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="stranice/Recenzije.html">Recenzije</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" id="aboutUs" href="stranice/O_nama.html">O nama</a>
                      </li>
                      <button type="button" id="singInBtn" className="btn btn-outline-light">Prijavi se</button>
                      <button type="button" id="registerBtn" className="btn btn-secondary">Registriraj se</button>
                  </ul>

              </div>
          </nav>
      </div>
  )
}

export default NavBar