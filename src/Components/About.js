import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faChartSimple,
  faCrosshairs,
  faClock,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import "./About.css";
const About = () => {
  return (
    <div>
      <section className="about-section">
        <div>
          <div className="container-fluid-expand">
            <div className="container_background">
              <div className="head">
              <div className="h2-hed">WHY US?</div>
              <div className="line"></div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-4 block">
                  <div className="icon">
                    <FontAwesomeIcon icon={faArrowUp} />
                  </div>

                  <div>
                  <h2 className="h2-col1">INCREASE EFFICIENCY</h2>
                  <p>
                    Do more in less time — we help 
                    streamline your quantity takeoff and 
                    construction estimating processes.
                  </p>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4 block">
                  <div className="icon">
                    <FontAwesomeIcon icon={faArrowDown} />
                  </div>
                  <div>
                  <h2 className="h2-col1">DECREASE OVERHEAD</h2>
                  <p>
                    Partnering with us is a more cost-
                    effective solution than taking on 
                    additional employee workload and
                    overhead.
                  </p>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4 block">
                  <div className="icon">
                    <FontAwesomeIcon icon={faChartSimple} />
                  </div>
                  <div>
                  <h2 className="h2-col1">
                    MAXIMIZE <br></br>
                    PRODUCTIVITY
                  </h2>
                  <p>
                    Enable your current staff to focus on 
                    more important tasks while still 
                    increasing revenue.
                  </p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12 col-md-4 block">
                  <div className="icon">
                    <FontAwesomeIcon icon={faCrosshairs} />
                  </div>
                  <div>
                  <h2 className="h2-col2">ACCURATE</h2>
                  <p>
                    We are dedicated to providing our 
                    clients with accurate, thorough, and 
                    detailed takeoffs.
                  </p>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4 block">
                  <div className="icon">
                    <FontAwesomeIcon icon={faClock} />
                  </div>
                  <div>
                  <h2 className="h2-col2">FAST</h2>
                  <p>
                    Our streamlined process allows us to
                    turn projects around quickly, without 
                    compromising quality.
                  </p>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4 block">
                  <div className="icon">
                    <FontAwesomeIcon icon={faScrewdriverWrench} />
                  </div>
                  <div>
                  <h2 className="h2-col2">AFFORDABLE </h2>
                  <p>
                    Our team utilizes the most advanced 
                    softwares and tools available, ensuring 
                    accuracy and value.
                  </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
