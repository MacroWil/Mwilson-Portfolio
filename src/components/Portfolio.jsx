import React from "react";
import backImg from "../assets/blurred.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.gif";
import { Link } from "react-router-dom";

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
      <div className="imagebody">
        <Link
          to={"https://zachmshort.github.io/DinnerDateGenerator/"}
          target="_blank"
          className="img-container"
        >
          <img className="img" src={img1} alt="portfolio item1" />
          <div className="imgtext">Dinner Generator</div>
        </Link>
        <Link
          to={"https://solemnace-galleries-2d28de62aee4.herokuapp.com"}
          target="_blank"
          className="img-container"
        >
          <img className="img" src={img2} alt="portfolio item2" />
          <div className="imgtext">Solumnace Galleries</div>
        </Link>
        <Link
          to={"https://macrowil.github.io/Coding-Quiz/"}
          target="_blank"
          className="img-container"
        >
          <img className="img" src={img3} alt="portfolio item3" />
          <div className="imgtext">Silly Quiz</div>
        </Link>
        <Link
          to={"https://macrowil.github.io/Maguire-Wilson-Password-Generator/"}
          target="_blank"
          className="img-container"
        >
          <img className="img" src={img4} alt="portfolio item4" />
          <div className="imgtext">Password Generator</div>
        </Link>
        <Link
          to={"https://macrowil.github.io/Weather-Dashboard/"}
          target="_blank"
          className="img-container"
        >
          <img className="img" src={img5} alt="portfolio item5" />
          <div className="imgtext">Weather App</div>
        </Link>
        <Link className="img-container">
          <img className="img" src={img6} alt="portfolio item6" />
          <div className="imgtext">COMING SOON</div>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
