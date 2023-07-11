import { React, useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCircleXmark,
  faList,
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
  const dropdownRef = useRef(null);

  const handleSearchIconClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleButtonClick = () => {
    setIsContainerOpen(true);
  };
  const handleCloseClick = () => {
    setIsContainerOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsSearchOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
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
          icon={faList}
        />
      </div>
      <div className={`container ${isContainerOpen ? "open" : ""}`}>
        <div className="items">
          <div className="item">
            <div className="dropdown">
              <a className="dropbtn" href="localhost:3000/">
                <div className="triangle-right"></div>
                Home
              </a>
            </div>
            <div className="dropdown">
              <a className="dropbtn" href="localhost:3000/">
                <div className="triangle-right"></div>
                About
              </a>
            </div>
            <div className="dropdown">
              <a className="dropbtn" href="localhost:3000/">
                <div className="triangle-right"></div>
                Services
              </a>
            </div>
            <div className="dropdown">
              <a className="dropbtn" href="localhost:3000/">
                <div className="triangle-right"></div>
                Pricing & Plans
              </a>
            </div>
            <div className="dropdown">
              <a className="dropbtn" href="localhost:3000/">
                <div className="triangle-right"></div>
                Example Projects
              </a>
            </div>
            <div className="dropdown">
              <a className="dropbtn" href="localhost:3000/">
                <div className="triangle-right"></div>
                Contact
              </a>
            </div>
            <div className="dropdown">
              <a className="dropbtn" href="localhost:3000/">
                <div className="triangle-right"></div>
                Request a Quote
              </a>
            </div>
          </div>
          <div className="search-container" ref={dropdownRef}>
            <div className="search-icon" onClick={handleSearchIconClick}>
              <FontAwesomeIcon icon={faSearch} />
            </div>
            {isSearchOpen && (
              <div className="search-dropdown">
                <div className="search-form-wrapper">
                  <form className="d-flex">
                    <input
                      className="search-input"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <div className="search-icon-2">
                      <FontAwesomeIcon icon={faSearch} />
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>

          <div className="close" onClick={handleCloseClick}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
