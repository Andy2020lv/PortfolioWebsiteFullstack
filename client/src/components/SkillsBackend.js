import React from "react";
import node from "../images/node.png";
import express from "../images/express.png";
import mongoDB from "../images/mongoDB.png";
import mySQL from "../images/mySQL.png";

export default function SkillBackend() {
  return (
    <div className="skillList">
      <div className="skill">
        <img src={node}></img>
        <p>Node JS</p>
      </div>
      <div className="skill">
        <img src={express}></img>
        <p>Express</p>
      </div>
      <div className="skill">
        <img src={mongoDB}></img>
        <p>MongoDB</p>
      </div>
      <div className="skill">
        <img src={mySQL}></img>
        <p>MySQL</p>
      </div>
    </div>
  );
}
