import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./About.css";
const About = () =>
{
    return (
      <div>
      
    <section class="about-section">
      <div >
        <div class="container-fluid-expand">
        <div className="container_background">
            <div className="h2-hed">WHY US?</div>
            
        <div class="row">
          <div class="col-sm">
            <h2 className="h2-col1">
           <FontAwesomeIcon icon="fa-sharp fa-solid fa-circle-up" style={{color: "#2c353d",}} />
            INCREASE EFFICIENCY
            </h2>
            <p>Do more in less time — we help <br></br>
                streamline your quantity takeoff and <br></br>
                construction estimating processes.</p>
          </div>
          <div class="col-sm">
          <h2 className="h2-col1">DECREASE OVERHEAD</h2>
            <p>Partnering with us is a more cost-<br></br>
                effective solution than taking on <br></br>
                additional employee workload and<br></br>
                 overhead.</p>
          </div>
          <div class="col-sm">
          <h2 className="h2-col1">MAXIMIZE <br></br>
              PRODUCTIVITY 
          </h2>
            <p>Enable your current staff to focus on <br></br>
                 more important tasks while still <br></br>
                 increasing revenue.</p>
          </div>
        </div>

        <div class="row">
          <div class="col-sm">
            <h2 className="h2-col2">ACCURATE</h2>
            <p>We are dedicated to providing our <br></br>
                 clients with accurate, thorough, and <br></br>
                 detailed takeoffs.</p>
          </div>
          <div class="col-sm">
          <h2 className="h2-col2">FAST</h2>
            <p>Our streamlined process allows us to <br></br>
                turn projects around quickly, without <br></br>
                 compromising quality.</p>
          </div>
          <div class="col-sm">
          <h2 className="h2-col2">AFFORDABLE </h2>
            <p>Our team utilizes the most advanced <br></br>
                softwares and tools available, ensuring <br></br>
                accuracy and value.</p>
          </div>
        </div>
        </div>
      </div>
      </div>
    </section>
      </div>
    );
}
export default About;