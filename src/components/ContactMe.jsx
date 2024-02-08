import React from "react";
import backImg from "../assets/blurred.png";
//import Resume from "./Resume";

const Contact = () => {
  return (
    <div>
      <img
        className="back"
        src={backImg} //!!!
        alt="background image of blurred purple and black"
      />
      <div className="abtbox-container">
        <h1 className="abtbox">About</h1>
      </div>

      <div className="box-container">
        <p className="box">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          laborum distinctio cum reiciendis quod quibusdam commodi, quo aliquam
          iusto illum optio nisi, iste veritatis facere dolore, saepe at
          consectetur voluptate?
        </p>
      </div>
    </div>
  );
};

export default Contact;
