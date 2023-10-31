import { projectsDB } from "../data/projectsDB";
import { FaTimes } from "react-icons/fa";
import parse from "html-react-parser";

import CocktailTimeHomepage from "../assets/img/projects/cocktail-time-homepage.png";
import CocktailTimeContent from "../assets/img/projects/cocktail-time-content.png";

const ProjectDetails = ({ handleProject, text }) => {
  return (
    <div className="w-full min-h-screen flex items-center bg-[#094a4a] py-5">
      {projectsDB.map(
        (project) =>
          project.name === text && (
            <div
              key={project.name}
              className="relative flex flex-col justify-center items-center w-4/5 mx-auto bg-[#139f9f] border rounded py-5 px-2"
            >
              <a href="#work">
                <button
                  onClick={handleProject}
                  className="absolute top-2 right-2"
                >
                  <FaTimes className="text-white bg-red-500 w-6 h-6 rounded" />
                </button>
              </a>
              <h2
                className="text-2xl md:text-3xl text-center font-bold underline underline-offset-2 py-5 text-[#094a4a]"
                style={{ textShadow: "1px 1px 1px #f2f2f2" }}
              >
                {project.name}
              </h2>
              <div className="flex flex-col lg:flex-row p-2 mb-2 shadow-md">
                <img
                  //src={project.img1src}
                  src={CocktailTimeHomepage}
                  alt="truc"
                  className="w-[200px] sm:w-[300px] xl:w-[400px] h-auto pb-2 md:pr-2"
                />
                {project.img2src && (
                  <img
                    //src={projet.img2src}
                    src={CocktailTimeContent}
                    alt="machin"
                    className="w-[200px] sm:w-[300px] xl:w-[400px] h-auto pb-2"
                  />
                )}
              </div>
              <div className="flex flex-col justify-center items-center mb-5">
                <div className="pb-2">
                  <h3
                    className="text-lg md:text-xl text-center font-bold underline underline-offset-2 py-5 text-[#094a4a]"
                    style={{ textShadow: "1px 1px 1px #f2f2f2" }}
                  >
                    Description
                  </h3>
                  <p className="px-[5%] sm:px-[10%] sm:w-[450px] 2xl:w-[700px]">
                    {parse(project.desc)}
                  </p>
                </div>
                <div className="pb-2">
                  <h3
                    className="text-lg md:text-xl font-bold underline underline-offset-2 py-5 text-[#094a4a]"
                    style={{ textShadow: "1px 1px 1px #f2f2f2" }}
                  >
                    Technos
                  </h3>
                  {project.technos.map((techno, idx) => (
                    <p key={idx} className="">
                      {techno}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center md:justify-center">
                {project.demoLink && (
                  <a href={project.demoLink} rel="noreferrer" target="_blank">
                    <button className="w-[116px] bg-[#094a4a] text-[#18c9c9] border-2 border-[#18c9c9] hover:bg-[#041f1f] hover:border-[#18c9c9] px-3 py-2 mb-2 md:mb-0 md:mr-5 rounded-md">
                      Demo
                    </button>
                  </a>
                )}
                <a href={project.codeLink} rel="noreferrer" target="_blank">
                  <button className="bg-[#094a4a] text-[#18c9c9] border-2 border-[#18c9c9] hover:bg-[#041f1f] hover:border-[#18c9c9] w-fit px-3 py-2 rounded-md">
                    Source code
                  </button>
                </a>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default ProjectDetails;
