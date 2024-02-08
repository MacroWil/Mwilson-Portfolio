import React from "react";
import backImg from "../assets/blurred.png";
import hero from "../assets/sketchself.png";
//import Resume from "./Resume";

const About = () => {
  return (
    <div className="main">
      <img
        className="back"
        src={backImg} //!!!
        alt="background image of blurred purple and black"
      />
      <div className="abtbox-container">
        <img
          className="self"
          src={hero}
          alt="a stylised photo of Maguire Wilson"
        />
      </div>
      <div className="abtbox-container">
        <h1 className="abtbox">About Me</h1>
      </div>

      <div className="box-container">
        <p className="box">
          Hi, I'm Maguire Wilson! I built this webpage to give insight into some
          of the skills I've developed during a Denver University coding
          bootcamp, explain what my career has looked like up untill this point,
          and to explain a little bit of what I am up to when I'm not coding.
        </p>
        <p className="box">
          I've spent the last three years of my life wandering machine shops,
          writing and fixing G-code, and shaping useless blocks of metal into
          items with purpose. At a certain point I realized that I wanted to
          pursue coding as a career. Coding shares a lot of aspects of
          Machining, beyond the obvious similarities such as writing code for a
          computer to parse through. Coding and Machining share the learning
          mindset, a major goal of mine is to never stop learning. Through the
          bootcamp I experienced, I went from never having touched javascript or
          CSS, to having the ability to build full stack applications. All in
          three months! If your interested in what exactly I learned, head to
          the resume page in the navbar.
        </p>
        <p className="box">
          If you've read this far, you must be looking for what I'm up to when
          im not working. Long story short, I'm a HUGE nerd. In my free time I
          love building models for tabletop wargaming, I play Magic the
          Gathering on a regular basis, and any time not spent on those hobbies
          is spent playing videogames. Feel free to ask me more about my hobies!
        </p>
      </div>
    </div>
  );
};

export default About;
