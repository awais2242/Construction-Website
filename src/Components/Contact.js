import React from "react";
import "./Footers.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact-us">
      <div className="adjust">
        <b>
          If you’d like to get in touch with us to learn more, please contact
          us:
        </b>
      </div>
      <div className="button">Contact Us</div>
      <section className="footer-section">
        <div className="contact-block">
          <div className="contact-line"></div>
          <h4 className="contact-head">CONTACT US</h4>
          <div className="contact-line"></div>
          <div className="contact-content">
            <p>
              177 E Colorado Blvd. Suite 200
              <br></br>
              Pasadena, CA 91105
            </p>
            <p>info@maxtakeoffs.com</p>
            <p>818.351.3570</p>
          </div>
        </div>
        <div className="contact-block">
          <div className="contact-line"></div>
          <h4 className="contact-head">Shop Drawing Services:</h4>
          <div className="contact-line"></div>
          <div className="contact-content">
            <p>
              <a
                href="https://www.maxdrafting.com/"
                target="_blank"
                rel="noreferrer"
                className="max-mail"
              >
                Max Drafting:
              </a>
            </p>
            <p>
              <a
                href="https://www.maxdrafting.com/"
                target="_blank"
                rel="noreferrer"
                className="max-mail"
              >
                www.maxdrafting.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
