import React from "react";

export default function Presentation() {
  return (
    <div className="presentation colored">
      <h1
        data-aos="fade-zoom-in"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="800"
        className="presentation-text"
      >
        Hi, I'm <strong>Andy</strong>{" "}
      </h1>
      <h1
        data-aos="fade-zoom-in"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
        data-aos-delay="600"
      >
        A full stack web developer.
      </h1>
      <div
        data-aos="fade-zoom-in"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
        data-aos-delay="600"
        className="icons"
      >
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/Andy2020lv"
        >
          {" "}
          <i class="fa-brands fa-github"></i>
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.docdroid.net/2IyZgPU/andy-hernandez-cv-pdf"
        >
          {" "}
          <i class="fa-solid fa-file"></i>
        </a>
      </div>
    </div>
  );
}
