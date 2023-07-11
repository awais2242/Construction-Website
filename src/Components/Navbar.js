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

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
          icon={faBars}
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
          <div onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
            <FontAwesomeIcon icon={faSearch} />
            {isDropdownOpen && (
        <div className="dropdown-menu">
          
          eeeeeeeeeeeeeeeeeee
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
