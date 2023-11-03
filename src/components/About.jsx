import Resume from "../assets/resume/resume.pdf";
import Github from "../assets/img/networks/github.png";
import Linkedin from "../assets/img/networks/linkedin.png";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen flex items-center bg-[#094a4a]"
    >
      <div className="flex flex-col justify-center px-[10%] lg:pl-[30%] lg:pr-[10%] text-lg md:text-2xl text-[#b8bcbd]">
        <h2
          className="self-center md:self-end text-[#18c9c9] text-3xl sm:text-5xl pb-20 underline underline-offset-4"
          style={{
            textShadow: "1px 1px 1px #f2f2f2",
          }}
        >
          About me
        </h2>
        <p className="pb-10">
          <span className="highlighted-text">Former chef</span>, my{" "}
          <strong className="highlighted-text">web applications</strong> are
          cooked with great care and attention to detail and crafted with{" "}
          <span className="highlighted-text">love and passion</span>.
        </p>
        <p className="pb-10">
          Today, I dedicate all my energy to{" "}
          <strong className="highlighted-text">web development</strong>,
          primarily on the{" "}
          <strong className="highlighted-text">frontend</strong>.
        </p>
        <p className="pb-10">
          Enthusiastic about{" "}
          <strong className="highlighted-text">user experience</strong>, I
          combine <strong className="highlighted-text">creativity</strong> and{" "}
          <strong className="highlighted-text">technical skills</strong> to
          design <strong className="highlighted-text">intuitive</strong>,{" "}
          <strong className="highlighted-text">high-performing</strong>, and{" "}
          <strong className="highlighted-text">accessible</strong>{" "}
          <strong className="highlighted-text">front-end interfaces</strong>{" "}
          while keeping a constant eye on the{" "}
          <strong className="highlighted-text">latest technologies</strong> .
        </p>
        <div>
          <a href={Resume} target="_blank" rel="noreferrer">
            <button className="bg-[#094a4a] text-[#18c9c9] text-base md:text-lg border-[#18c9c9] hover:text-[#094a4a] hover:bg-[#18c9c9] hover:border-[#18c9c9] w-fit border-2 px-3 py-2 mb-10 rounded-md">
              My resume
            </button>
          </a>
        </div>
        <div className="flex items-center">
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
