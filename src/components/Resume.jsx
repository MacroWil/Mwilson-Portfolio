import React from "react";
import backImg from "../assets/blurred.png";

import { Link } from "react-router-dom";

const Resume = () => {
  return (
    <div>
      <img
        className="back"
        src={backImg} //!!!
        alt="background image of blurred purple and black"
      />
      <div className="abtbox-container">
        <Link
          to="https://docs.google.com/document/d/1devQBbMoe_PBCSLfMP09-yCgo60J1-hZaQoKOnEFiL4/"
          target="_blank"
          className="resbox"
        >
          Resume (click me to view)
        </Link>
      </div>

      <div className="box-container">
        <div className="listbox">
          Front-End Proficiencies
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>Responsive Designs</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className="listbox">
          Back-End Proficiencies
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
            <li>MERN/CERN</li>
          </ul>
        </div>
        <div className="listboxhidden">
          Back-End Proficiencies
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
            <li>MERN/CERN</li>
            <li>MERN/CERN</li>
            <li>MERN/CERN</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
