import React from "react";
import "./Footers.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
//import "cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// Import custom CSS file for styling (optional)
const Footers=()=>{
    return(
        <div>
			<div className="adjust">
				<h5><b><p>If you’d like to get in touch with us to learn more, please contact us:</p></b></h5>
			</div>
			<div className="button">Contact Us</div>
  	 	            <div className="row">
  	 		            <div className="footer-col">
							{'/n'}
  	 			            <h4>Contact Us</h4>
  	 			            <ul>
  	 				            <li><a href="localhost:3000/"><b><h5>177 E Colorado Blvd. Suite 200</h5></b></a></li>
  	 				            <li><a href="localhost:3000/"><h5>Pasadena, CA 91105</h5></a></li>
  	 				            <li><a href="localhost:3000/"><h6>info@maxtakeoffs.com</h6></a></li>
  	 				            <li><a href="localhost:3000/"><h6>818.351.3570</h6></a></li>
  	 			            </ul>
  	 		            </div>
						   <div className="footer-col">
  	 			            <h4>SHOP DRAWING SERVICES:</h4>
  	 			            <ul>
  	 				            <li><a href="localhost:3000/"><h5>Max Drafting:</h5></a></li>
  	 				            <li><a href="localhost:3000/"><h6>www.maxdrafting.com</h6></a></li>
  	 			            </ul>
  	 		            </div>
  	 	            </div>
   			<footer className="footer">
      			<div className="container">
        			<div className="left-section">
          				<p>&copy; Copyright - Max TakeOffs.</p>
        			</div>
        		<div className="social-links">
          			<a href="https://www.facebook.com">
            		<FontAwesomeIcon icon={faFacebook} className="social-icon" />
          			</a>
          			<a href="https://www.twitter.com">
            		<FontAwesomeIcon icon={faTwitter} className="social-icon" />
          			</a>
          			<a href="https://www.instagram.com">
            		<FontAwesomeIcon icon={faInstagram} className="social-icon" />
          			</a>
					  <a href="https://www.Linkedin.com">
            		<FontAwesomeIcon icon={faLinkedin} className="social-icon" />
          			</a>
        		</div>
      			</div>
    		</footer>
		</div>
	)

};



export default Footers;