import React from "react";
import SkillBackend from "./SkillsBackend";
import SkillsFrontEnd from "./SkillsFrontEnd";
import SkillsTools from "./SkillsTools";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Skills() {
  React.useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      data-aos="zoom-in"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
      id="skills"
      className="skills"
    >
      <h1 className="title"> Skills</h1>
      <div className="skills-elements">
        <div className="frontend">
          <h5>Frontend</h5>
          <SkillsFrontEnd />
        </div>
        <div className="tools">
          <h5>Tools</h5>
          <SkillsTools />
        </div>

        <div className="backend">
          <h5>Backend</h5>
          <SkillBackend />
        </div>
      </div>
    </div>
  );
}
