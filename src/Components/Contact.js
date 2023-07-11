import React from "react";
import "./Footers.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Contact.css"
const Contact=()=>{
    return (
      <div>
        <div className="adjust">
            <b> 
                If you’d like to get in touch with us to learn more, please contact us:
            </b>
        </div>
        <div className="button">Contact Us</div>
        <section className="footer-section">
  <div className="container-contact">
    <div className="row">
      <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-end">
        <div className="left-section">
          <div className="line-above-down"></div>
          <div className="hed"><b>CONTACT US</b></div>
          <div className="line-above-down"></div>
          <p>177 E Colorado Blvd. Suite 200 
            <br></br>
            Pasadena, CA 91105</p>
          <p>info@maxtakeoffs.com</p>
          <p>818.351.3570</p>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-4 ">
        <div className="right-section">
          <div className="line-above-down"></div>
          <div className="hed"><b>SHOP DRAWING SERVICES:</b></div>
          <div className="line-above-down"></div>
          <p>
            <a className="max-mail">Max Drafting:</a>
          </p>
          <p>
            <a className="max-mail">www.maxdrafting.com</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  </div>)

}
export default Contact;