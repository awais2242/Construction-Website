import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch} from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo.png";
import "./Navbar.css";
const Navbar2 = () => {
  return (
    <div >

        <div class="container-fluid">
        <div className="phone">
        Phone 818.351.3570
        </div>
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
        <nav class="navbar navbar-expand-lg" >
            <div class="container-fluid" >
            <button class="navbar-toggler ms-auto"
                        data-bs-toggle="collapse"
                        data-bs-target="#gfgnavbar">
                    <span class="navbar-toggler-icon">
                    
                    </span>
                </button>
                <div class="collapse navbar-collapse ps-3" 
                     id="gfgnavbar">
                   
                    <ul class="navbar-nav ">
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                               Home
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                               About
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                Services
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                Pricing & Plans
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                Example Project
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                Contact
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                Request a Quote
                            </a>
                        </li>
                    </ul>
                    </div>
                </div>
            
        </nav>
    
    </div>
  )
}
export default Navbar2;