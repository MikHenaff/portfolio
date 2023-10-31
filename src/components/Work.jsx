import ProjectCard from "./ProjectCard";
import TraineeProjectHomepage from "../assets/img/projects/projet-formation-homepage.png";
import CocktailTimeHomepage from "../assets/img/projects/cocktail-time-homepage.png";
import KaamelottContent from "../assets/img/projects/kaamelott-content.png";
import PortfolioHomepage from "../assets/img/projects/portfolio-homepage.png";

const Work = ({ burger, handleProject, handleText }) => {
  return (
    <div
      name="work"
      id="work"
      className="w-full h-screen flex flex-col justify-center items-center lg:justify-center bg-[#094a4a] pt-[100px]"
    >
      <div className="flex flex-col items-center text-lg md:text-2xl text-[#b8bcbd]">
        <h2
          className="self-center md:self-end text-[#18c9c9] text-3xl sm:text-5xl pb-10 sm:pb-20 underline underline-offset-4"
          style={{ textShadow: "1px 1px 1px #f2f2f2" }}
        >
          My work
        </h2>
        <div
          className={
            burger
              ? "hidden"
              : "grid sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-5"
          }
        >
          <ProjectCard
            imgSrc={TraineeProjectHomepage}
            text="Trainee Project"
            handleProject={handleProject}
            handleText={handleText}
          />
          <ProjectCard
            imgSrc={CocktailTimeHomepage}
            text="Cocktail Time"
            handleProject={handleProject}
            handleText={handleText}
          />
          <ProjectCard
            imgSrc={KaamelottContent}
            text="Kaamelott Quotations"
            handleProject={handleProject}
            handleText={handleText}
          />
          <ProjectCard
            imgSrc={PortfolioHomepage}
            text="Portfolio"
            handleProject={handleProject}
            handleText={handleText}
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
