import React from "react";
import Navbar from "./components/Navbvar";
import Presentation from "./components/Presentation";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ProjectsData from "./components/ProjectsData";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [backendData, setBackendData] = React.useState([{}]);

  React.useEffect(() => {
    Aos.init({ duration: 1000 });
    // fetch("/api")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setBackendData(data);
    //   });
  }, []);

  return (
    <div className="container-fluid">
      <Navbar />
      <Presentation />
      <Skills />
      <div
        data-aos="fade-zoom-in"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        id="projects"
        className="projects"
      >
        <h1 className="title">Projects</h1>
        {ProjectsData.map((project) => (
          <Projects
            title={project.title}
            description={project.description}
            img={project.img}
            srcCode={project.srcCode}
            live={project.live}
            tech={project.tech}
          />
        ))}
      </div>
      <About />
      <Contact />
      <Footer />
      {/* <div>
        {typeof backendData.users === "undefined" ? (
          <h1>Loading...</h1>
        ) : (
          backendData.users.map((user, i) => <h5 key={i}>{user}</h5>)
        )}
      </div> */}
    </div>
  );
}

export default App;
