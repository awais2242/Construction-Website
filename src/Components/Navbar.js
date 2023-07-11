import { React, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCircleXmark,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo.png";

import "./Navbar.css";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [isContainerOpen, setIsContainerOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchIconClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  const handleButtonClick = () => {
    setIsContainerOpen(true);
  };
  const handleCloseClick = () => {
    setIsContainerOpen(false);
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth > 780) {
      setIsContainerOpen(false);
    }
  }, [windowWidth]);

  return (
    <div>
      <div className="phone">Phone 818.351.3570</div>
      <div className="logo">
        <img src={logo} alt="logo"></img>
        <div className="spacer"></div>
        <div className="social">
          <FontAwesomeIcon className="facebook" icon={faFacebookF} />
          <FontAwesomeIcon className="instagram" icon={faInstagram} />
          <FontAwesomeIcon className="linkdin" icon={faLinkedin} />
          <FontAwesomeIcon className="twitter" icon={faTwitter} />
        </div>
        <FontAwesomeIcon
          className="menu-button"
          onClick={handleButtonClick}
          icon={faBars}
        />
      </div>
      <div className={`container ${isContainerOpen ? "open" : ""}`}>
        <div className="items">
          <div className="item">
            <div className="dropdown">
              <a className="dropbtn" href="localhost:3000/">
                Home
              </a>
            </div>
            <div className="dropdown">
              <a className="dropbtn" href="localhost:3000/">
                About
              </a>
            </div>
            <div className="dropdown">
              <a className="dropbtn" href="localhost:3000/">
                Services
              </a>
            </div>
            <div className="dropdown">
              <a className="dropbtn" href="localhost:3000/">
                Pricing & Plans
              </a>
            </div>
            <div className="dropdown">
              <a className="dropbtn" href="localhost:3000/">
                Example Projects
              </a>
            </div>
            <div className="dropdown">
              <a className="dropbtn" href="localhost:3000/">
                Contact
              </a>
            </div>
            <div className="dropdown">
              <a className="dropbtn" href="localhost:3000/">
                Request a Quote
              </a>
            </div>
          </div>
          <div  onClick={handleSearchIconClick}>
        <FontAwesomeIcon icon={faSearch} />
      </div>
      {isSearchOpen && (
        <div className="search-bar">
         <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
        </div>
      )}
          <div className="close" onClick={handleCloseClick}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
