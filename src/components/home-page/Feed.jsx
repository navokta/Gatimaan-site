import React, { useEffect, useState } from "react";
import "./Feed.css"; // Optional: Your custom styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChildReaching, faHandsHoldingChild, faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import bg from '../../assets/image.png';

const GatimaanSection = () => {
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);

  useEffect(() => {
    const animateValue = (setter, target, duration = 1000) => {
      let start = 0;
      const increment = target / (duration / 20);
      const interval = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(interval);
        } else {
          setter(Math.floor(start));
        }
      }, 20);
    };

    animateValue(setProjects, 100);       // Replace 100 with actual value
    animateValue(setClients, 100);        // Replace 200 with actual value
    animateValue(setSatisfaction, 100);    // Replace 98 with actual value
  }, []);

  return (
    <div
      className="page"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="page-wrapper des">
        <h1 className="des">Gatimaan</h1>
        <p className="des">
          Expert Guidance | Real Results | Tailored Consulting for Your Success.
        </p>

        <div className="container des d-flex justify-content-center gap-4 flex-wrap mt-4">
          <div className="item des text-center">
            <FontAwesomeIcon icon={faChildReaching} size="2x" />
            <p>Students</p>
            <div className="number des" id="projects">{projects}+</div>
          </div>

          <div className="item des text-center">
            <FontAwesomeIcon icon={faHandsHoldingChild} size="2x" />
            <p>Happy Parents</p>
            <div className="number des" id="clients">{clients}+</div>
          </div>

          <div className="item des text-center">
            <FontAwesomeIcon icon={faFaceSmile} size="2x" />
            <p>Satisfaction</p>
            <div className="number des" id="satisfaction">{satisfaction}%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GatimaanSection;
