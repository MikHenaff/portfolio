import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import ProjectDetails from "./components/ProjectDetails";
import Contact from "./components/Contact";
import { useState } from "react";

function App() {
  const [burger, setBurger] = useState(false);
  const [projectDetails, setProjectDetails] = useState(false);
  const [text, setText] = useState("");

  const handleClick = () => {
    setBurger(!burger);
  };

  const handleProject = () => {
    setProjectDetails(!projectDetails);
  };

  const handleText = (name) => {
    setText(name);
  };

  return (
    <>
      {projectDetails ? (
        <ProjectDetails handleProject={handleProject} text={text} />
      ) : (
        <div>
          <Navbar burger={burger} handleBurger={handleClick} />
          <Home />
          <About />
          <Skills />
          <Work
            burger={burger}
            handleProject={handleProject}
            handleText={handleText}
          />
          <Contact />
        </div>
      )}
    </>
  );
}

export default App;
