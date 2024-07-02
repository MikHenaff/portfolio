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
    <div className="w-full h-screen flex flex-col justify-center items-center bg-[#094a4a]">
      <div className="flex flex-col justify-center items-center px-[10%] text-sm sm:text-lg md:text-2xl text-[#b8bcbd]">
        <h2
          className="text-[#18c9c9] text-3xl sm:text-5xl py-10 md:pb-16 underline underline-offset-4"
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
          Motivation, team spirit, thirst for learning, adaptability, problems
          solving, autonomy.
        </p>
        <p className="highlighted-text">Hard skills:</p>
        <p className="text-center pb-10">
          Frontend programming languages, frameworks and libraries, responsive
          design, accessibility, SEO and version control systems.
        </p>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col items-center px-[10%] text-lg md:text-2xl text-[#b8bcbd]">
          <div className="flex pb-3">
            <img
              src={HtmlImg}
              alt="HTML5 logo"
              title="HTML5"
              className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] mr-3"
            />
            <img
              src={CssImg}
              alt="CSS3 logo"
              title="CSS3"
              className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] mr-3"
            />
            <img
              src={JavascriptImg}
              alt="JavaScript logo"
              title="JavaScript"
              className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]"
            />
          </div>
          <div className="flex pb-3">
            <img
              src={TailwindImg}
              alt="TailwindCSS logo"
              title="TailwindCSS"
              className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] mr-3"
            />
            <img
              src={SassImg}
              alt="Sass logo"
              title="Sass"
              className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]"
            />
          </div>
          <div className="flex">
            <img
              src={ReactImg}
              alt="React logo"
              title="React"
              className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]"
            />
          </div>
        </div>
        <div className="flex flex-col items-center pt-4 px-[10%]">
          <p className="highlighted-text text-sm sm:text-lg md:text-2xl pb-3">
            In progress:
          </p>
          <div className="flex justify-center">
            <img
              src={NodeImg}
              alt="Node.js logo"
              title="Node.js"
              className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] mr-6"
            />
            <img
              src={ExpressImg}
              alt="Express.js logo"
              title="Express.js"
              className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] mr-3"
            />
            <img
              src={MongodbImg}
              alt="MongoDB logo"
              title="MongoDB"
              className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] mr-3"
            />
            <img
              src={TypescriptImg}
              alt="TypeScript logo"
              title="TypeScript"
              className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
