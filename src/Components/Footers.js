import React from "react";
import "./Footers.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footers = () => {
  return (
    <footer className="footer">
      <div className="copyright">
      © Copyright - Max Takeoffs
      </div>
      <div className="social">
        <a
          href="https://m.facebook.com/maxtakeoffs?wtsid=rdr_0cWBOJDCGDMt5QOw8"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon className="foot-facebook" icon={faFacebookF} />
        </a>
        <a
          href="https://www.instagram.com/maxtakeoffs/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon className="foot-instagram" icon={faInstagram} />
        </a>
        <a
          href="https://www.linkedin.com/company/max-takeoffs"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon className="foot-linkdin" icon={faLinkedin} />
        </a>
        <a
          href="https://twitter.com/maxtakeoffs"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon className="foot-twitter" icon={faTwitter} />
        </a>
      </div>
    </footer>
  );
};

export default Footers;
