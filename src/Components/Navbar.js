import { React, useState } from "react";
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

  const handleButtonClick = () => {
    setIsContainerOpen(true);
  };
  const handleCloseClick = () => {
    setIsContainerOpen(false);
  };

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
          <div className="search">
            <FontAwesomeIcon icon={faSearch} />
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
