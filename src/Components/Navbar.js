import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo.png";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="phone">Phone 818.351.3570</div>
      <div className="logo">
        <img src={logo} alt="logo"></img>
        <div className="container"></div>
        <div className="social">
          <FontAwesomeIcon icon={faSearch} />
          <FontAwesomeIcon icon={faSearch} />
          <FontAwesomeIcon icon={faSearch} />
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
      <div class="items">
        <div class="item">
          <div class="dropdown">
            <a class="dropbtn" href="localhost:3000/">Home</a>
          </div>
          <div class="dropdown">
            <a class="dropbtn" href="localhost:3000/">About</a>
          </div>
          <div class="dropdown">
            <a class="dropbtn" href="localhost:3000/">Services</a>
          </div>
          <div class="dropdown">
            <a class="dropbtn" href="localhost:3000/">Pricing & Plans</a>
          </div>
          <div class="dropdown">
            <a class="dropbtn" href="localhost:3000/">Example Projects</a>
          </div>
          <div class="dropdown">
            <a class="dropbtn" href="localhost:3000/">Contact</a>
          </div>
          <div class="dropdown">
            <a class="dropbtn" href="localhost:3000/">Request a Quote</a>
          </div>
        </div>
        <div className="search">
            <FontAwesomeIcon icon={faSearch} />
          </div>
        <div class="menu-icon">
          <div class="menu-card">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="close">
        <FontAwesomeIcon icon={faCircleXmark} /> 
        </div>
             </div>
    </div>
  );
};

export default Navbar;
