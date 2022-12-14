import React from "react";
import js from "../images/js.png";
import react from "../images/react.png";
import html5 from "../images/html5.png";
import css from "../images/css.png";

export default function SkillsFrontEnd() {
  return (
    <div className="skillList">
      <div className="skill">
        <img src={js}></img>
        <p>Javascript</p>
      </div>
      <div className="skill">
        <img src={react}></img>
        <p>React</p>
      </div>
      <div className="skill">
        <img src={html5}></img>
        <p>HTML</p>
      </div>
      <div className="skill">
        <img src={css}></img>
        <p>CSS</p>
      </div>
    </div>
  );
}
