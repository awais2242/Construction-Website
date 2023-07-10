import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp,faChartSimple,faCrosshairs,faClock,faScrewdriverWrench}
       from "@fortawesome/free-solid-svg-icons";
import "./About.css";
const About = () =>
{
    const [containerPosition, setContainerPosition] = useState("left");

    const handleClick = () => {
      if (containerPosition === "left") {
        setContainerPosition("right");
      } else {
        setContainerPosition("left");
      }
    };
  
    return (
      <div>
      
    <section className="about-section">
      <div >
        <div className="container-fluid-expand">
        <div className="container_background">
            <div className="h2-hed">WHY US?</div>
            
        <div className="row">
          <div className="col-sm-12 col-md-4">
          <div className="icon">
                <FontAwesomeIcon icon={faArrowUp} />
            </div>
           
            <h2 className="h2-col1">
            INCREASE EFFICIENCY
            </h2>
            <p>Do more in less time — we help <br></br>
                streamline your quantity takeoff and <br></br>
                construction estimating processes.</p>
          </div>
          <div className="col-sm-12 col-md-4">
          <div className="icon">
                <FontAwesomeIcon icon={faArrowDown} />
            </div>
          <h2 className="h2-col1">
            DECREASE OVERHEAD</h2>
            <p>Partnering with us is a more cost-<br></br>
                effective solution than taking on <br></br>
                additional employee workload and<br></br>
                 overhead.</p>
          </div>
          <div className="col-sm-12 col-md-4">
          <div className="icon">
                <FontAwesomeIcon icon={faChartSimple} />
            </div>
          <h2 className="h2-col1">
            MAXIMIZE <br></br>
              PRODUCTIVITY 
          </h2>
            <p>Enable your current staff to focus on <br></br>
                 more important tasks while still <br></br>
                 increasing revenue.</p>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-4">
          <div className="icon">
                <FontAwesomeIcon icon={faCrosshairs} />
            </div>
            <h2 className="h2-col2">
                ACCURATE</h2>
            <p>We are dedicated to providing our <br></br>
                 clients with accurate, thorough, and <br></br>
                 detailed takeoffs.</p>
          </div>
          <div className="col-sm-12 col-md-4">
          <div className="icon">
                <FontAwesomeIcon icon={faClock} />
            </div>
          <h2 className="h2-col2">
            FAST</h2>
            <p>Our streamlined process allows us to <br></br>
                turn projects around quickly, without <br></br>
                 compromising quality.</p>
          </div>
          <div className="col-sm-12 col-md-4">
          <div className="icon">
                <FontAwesomeIcon icon={faScrewdriverWrench} />
            </div>
          <h2 className="h2-col2">
          
            AFFORDABLE </h2>
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