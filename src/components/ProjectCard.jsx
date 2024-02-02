const ProjectCard = ({ imgSrc, text, handleProject, handleText }) => {
  return (
    <div className="group relative flex flex-col items-center shadow-md p-2">
      <span className="absolute top-0 bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100">
        <button
          onClick={() => {
            handleProject();
            handleText(text);
          }}
          className="text-sm sm:text-base text-[#041f1f] underline underline-offset-8 bg-[#18c9c9]/90 w-full h-full border-2 px-3 py-2 rounded-sm"
        >
          Click to see more
        </button>
      </span>
      <img
        src={imgSrc}
        alt={`homepage of ${text} application`}
        className="w-[200px] sm:w-[300px] xl:w-[350px] 2xl:w-[400px] h-auto max-h-[152px] xl:max-h-[200px] rounded-t-sm"
      />
      <p
        className="w-full text-center text-sm sm:text-base py-3 text-[#f2f2f2] bg-[#0e7474] rounded-b-sm"
        style={{ textShadow: "1px 1px 1px #18c9c9" }}
      >
        {text}
      </p>
    </div>
  );
};

export default ProjectCard;
