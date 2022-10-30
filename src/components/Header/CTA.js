import React from "react";
import CV from "../../assets/cv.png";
import "./Header.css";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} className="btn " download>
        Download CV
      </a>
      <a className=" btn btn-primary " href="#contact">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
