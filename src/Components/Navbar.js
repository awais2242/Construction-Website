import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/logo.png';

import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="phone">
        Phone 818.351.3570
      </div>
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
            <div class="dropbtn">Home</div>
          </div>
          <div class="dropdown">
            <div class="dropbtn">About</div>
          </div>
          <div class="dropdown">
            <div class="dropbtn" routerLink="faculty">
              Faculty
            </div>
          </div>
          <div class="dropdown">
            <div class="dropbtn">Academics</div>
          </div>
          <div class="dropdown">
            <div class="dropbtn">Annoucement</div>
          </div>
          <div class="dropdown">
            <div class="dropbtn">Student</div>
          </div>
        </div>
        <div class="menu-icon">
          <div class="menu-card">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
