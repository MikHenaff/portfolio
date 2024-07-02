import Resume from "../assets/resume/resume.pdf";
import CV from "../assets/resume/cv.pdf";
import Github from "../assets/img/networks/github.png";
import Linkedin from "../assets/img/networks/linkedin.png";

const About = () => {
  return (
    <div className="w-full h-screen flex items-center bg-[#094a4a]">
      <div className="flex flex-col justify-center px-[10%]  text-sm sm:text-lg md:text-2xl text-[#b8bcbd]">
        <h2
          className="self-center text-[#18c9c9] text-3xl sm:text-5xl py-10 sm:pb-20 underline underline-offset-4"
          style={{
            textShadow: "1px 1px 1px #f2f2f2",
          }}
        >
          About me
        </h2>
        <p className="pb-5 sm:pb-10 text-center">
          <span className="highlighted-text">Former cook</span>, my web
          applications are prepared with{" "}
          <span className="highlighted-text">care</span> and{" "}
          <span className="highlighted-text">attention to detail</span>, and
          crafted with great{" "}
          <span className="highlighted-text">liveliness</span>.
        </p>
        <p className="pb-5 sm:pb-10 text-center">
          <span className="highlighted-text">
            In perpetual desire to acquire new knowledge
          </span>
          , I dedicate all my energy to web development, mainly in the{" "}
          <strong className="highlighted-text">frontend</strong>, but not
          only...
        </p>
        <p className="pb-10 text-center">
          <span className="highlighted-text">Highly motivated</span> and{" "}
          <span className="highlighted-text">resilient</span>, I achieve the
          goals I set for myself, being{" "}
          <span className="highlighted-text">involved</span> and{" "}
          <span className="highlighted-text">always with a smile</span>.
        </p>
        <div className="flex justify-center pb-10">
          <a href={Resume} target="_blank" rel="noreferrer">
            <button className="bg-[#094a4a] text-[#18c9c9] text-sm sm:text-base md:text-lg border-[#18c9c9] hover:text-[#094a4a] hover:bg-[#18c9c9] hover:border-[#18c9c9] w-fit border-2 px-3 py-2 mr-6 rounded-md">
              My resume
            </button>
          </a>
          <a href={CV} target="_blank" rel="noreferrer">
            <button className="bg-[#094a4a] text-[#18c9c9] text-sm sm:text-base md:text-lg border-[#18c9c9] hover:text-[#094a4a] hover:bg-[#18c9c9] hover:border-[#18c9c9] w-fit border-2 px-3 py-2 rounded-md">
              Mon CV
            </button>
          </a>
        </div>
        <div className="flex justify-center items-center">
          <a
            href="https://www.github.com/MikHenaff"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={Github}
              alt="logo GitHub"
              title="GitHub"
              className="w-[40px] md:w-[50px] cursor-pointer mr-3"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/mikael-henaff"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={Linkedin}
              alt="logo LinkedIn"
              title="LinkedIn"
              className="w-[40px] md:w-[50px] cursor-pointer"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
