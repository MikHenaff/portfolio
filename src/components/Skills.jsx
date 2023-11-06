import HtmlImg from "../assets/img/technos/html.png";
import CssImg from "../assets/img/technos/css.png";
import JavascriptImg from "../assets/img/technos/javascript.png";
import TailwindImg from "../assets/img/technos/tailwind.png";
import SassImg from "../assets/img/technos/sass.png";
import ReactImg from "../assets/img/technos/react.png";
import TypescriptImg from "../assets/img/technos/typescript.svg";
import NodeImg from "../assets/img/technos/node.png";
import ExpressImg from "../assets/img/technos/express.png";
import MongodbImg from "../assets/img/technos/mongodb.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full h-screen flex flex-col justify-center bg-[#094a4a]"
    >
      <div className="flex flex-col max-w-[700px] lg:max-w-[900px] xl:max-w-[1000px] 2xl:max-w-[1200px] px-[10%] text-lg md:text-2xl text-[#b8bcbd] mb-6 md:mb-20">
        <h2
          className="self-center md:self-start text-[#18c9c9] text-3xl sm:text-5xl pb-14 sm:pb-[120px] underline underline-offset-4"
          style={{
            textShadow: "1px 1px 1px #f2f2f2",
          }}
        >
          My skills
        </h2>
        <p className="highlighted-text">Diploma:</p>
        <p className="pb-4">
          Web Application Development and Integration Specialist.
        </p>
        <p className="highlighted-text">Soft skills:</p>
        <p className="pb-4">
          Motivation, team spirit, adaptability, problems solving, autonomy.
        </p>
        <p className="highlighted-text">Hard skills:</p>
        <p className="pb-10">
          Frontend programming languages, frameworks and libraries, responsive
          design, accessibility, SEO and version control systems.
        </p>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col items-center md:flex-row md:justify-center xl:justify-start px-[10%] text-lg md:text-2xl text-[#b8bcbd]">
          <div className="flex mb-3">
            <img
              src={HtmlImg}
              alt="HTML5 logo"
              title="HTML5"
              className="w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] mr-3"
            />
            <img
              src={CssImg}
              alt="CSS3 logo"
              title="CSS3"
              className="w-[34px] sm:w-[50px] h-[40px] sm:h-[50px] mr-3"
            />
            <img
              src={JavascriptImg}
              alt="JavaScript logo"
              title="JavaScript"
              className="w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] md:mr-20"
            />
          </div>
          <div className="flex mb-3">
            <img
              src={TailwindImg}
              alt="TailwindCSS logo"
              title="TailwindCSS"
              className="w-[30px] sm:w-[50px] h-[30px] sm:h-[50px] mr-3"
            />
            <img
              src={SassImg}
              alt="Sass logo"
              title="Sass"
              className="w-[30px] sm:w-[50px] h-[30px] sm:h-[50px] md:mr-20"
            />
          </div>
          <div className="flex">
            <img
              src={ReactImg}
              alt="React logo"
              title="React"
              className="w-[30px] sm:w-[50px] h-[30px] sm:h-[50px]"
            />
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row md:justify-center xl:justify-start mt-8 px-[10%]">
          <p className="highlighted-text text-lg md:text-2xl mr-6 mb-3 md:mb-0">
            In progress:
          </p>
          <div className="flex">
            <img
              src={NodeImg}
              alt="Node.js logo"
              title="Node.js"
              className="w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] mr-6"
            />
            <img
              src={ExpressImg}
              alt="Express.js logo"
              title="Express.js"
              className="w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] mr-3"
            />
            <img
              src={MongodbImg}
              alt="MongoDB logo"
              title="MongoDB"
              className="w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] mr-3"
            />
            <img
              src={TypescriptImg}
              alt="TypeScript logo"
              title="TypeScript"
              className="w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] mr-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
