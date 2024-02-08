import React from "react";
import backImg from "../assets/blurred.png";
//import Resume from "./Resume";

const Portfolio = () => {
  return (
    <div>
      <img
        className="back"
        src={backImg} //!!!
        alt="background of purple ice"
      />
      <div className="abtbox-container">
        <h1 className="abtbox">Portfolio</h1>
      </div>

      <div className="img-container">
        <img className="img" />
      </div>
    </div>
  );
};

export default Portfolio;
