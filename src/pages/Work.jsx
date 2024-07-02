import ProjectCard from "../components/ProjectCard";
import TraineeProjectHomepage from "../assets/img/projects/projet-formation-homepage.png";
import CocktailTimeHomepage from "../assets/img/projects/cocktail-time-homepage.png";
import KaamelottContent from "../assets/img/projects/kaamelott-content.png";
import PortfolioHomepage from "../assets/img/projects/portfolio-homepage.png";
import WeatherAppHomepage from "../assets/img/projects/weather-app-homepage.png";
import NutfluxHomepage from "../assets/img/projects/nutflux-homepage.png";

const Work = ({ burger }) => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-[#094a4a]">
      <div className="flex flex-col items-center text-lg md:text-2xl text-[#b8bcbd]">
        <h2
          className="self-center text-[#18c9c9] text-3xl sm:text-5xl pb-16 underline underline-offset-4"
          style={{ textShadow: "1px 1px 1px #f2f2f2" }}
        >
          My work
        </h2>
        <div
          className={
            burger
              ? "hidden"
              : "grid grid-cols-2 lg:grid-cols-3 w-[90%] place-items-center gap-2 lg:gap-5"
          }
        >
          <ProjectCard imgSrc={NutfluxHomepage} text="Nutflux" />
          <ProjectCard imgSrc={KaamelottContent} text="Kaamelott Quotes" />
          <ProjectCard imgSrc={WeatherAppHomepage} text="Weather App" />
          <ProjectCard imgSrc={CocktailTimeHomepage} text="Cocktail Time" />
          <ProjectCard imgSrc={TraineeProjectHomepage} text="Trainee Project" />
          <ProjectCard imgSrc={PortfolioHomepage} text="Portfolio" />
        </div>
        <p className="text-base text-[#18c9c9] font-bold mt-4">( ... )</p>
      </div>
    </div>
  );
};

export default Work;
