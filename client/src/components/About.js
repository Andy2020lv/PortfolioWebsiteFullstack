import React from "react";
import me2 from "../images/me2-removebg-preview.png";

export default function About() {
  return (
    <div
      data-aos="zoom-in"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="300"
      id="about"
      className="about-container"
    >
      <h1 className="title">About</h1>
      <div className="about-elements">
        <img
          data-aos="slide-right"
          data-aos-once="true"
          data-aos-offset="250"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          alt="personal-img"
          src={me2}
        ></img>
        <div
          data-aos="slide-left"
          data-aos-once="true"
          data-aos-offset="250"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          className="about-p"
        >
          <p>
            An always curious young man who has always been interested on
            science and tech.
          </p>
          <p>
            {" "}
            I've long been interested on programming, but its not until recently
            when I decided to fully invest myself on learning the art of it.
            Always focused and happy on facing new challenges.
          </p>
          <p>
            {" "}
            When I'm not coding I like to play videogames, work out or educate
            myself on different science topics.
          </p>
        </div>
      </div>
    </div>
  );
}
