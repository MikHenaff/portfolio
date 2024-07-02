import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="w-full h-screen flex justify-center bg-[#094a4a]">
      <div className="flex flex-col h-full justify-center items-center px-[10%] text-sm sm:text-lg md:text-2xl">
        <p className="text-xl sm:text-2xl text-[#18c9c9] font-bold">
          Hi! My name is
        </p>
        <p className="highlighted-text logo-text text-4xl sm:text-6xl md:text-7xl py-5 font-bold">
          Mik Henaff
        </p>
        <p className="text-[#b8bcbd] text-3xl sm:text-5xl text-center font-bold pb-16">
          I&apos;m a frontend developer.
        </p>
        <p className="text-xl sm:text-2xl text-[#18c9c9] py-5 font-bold">
          And you, my friend, you seem lost in the darkness of the...
        </p>
        <p className="highlighted-text logo-text text-3xl sm:text-5xl text-center pt-5 pb-16 font-bold">
          404 ERROR
        </p>
        <p className="text-xl sm:text-2xl text-[#18c9c9] font-bold py-5">
          I can save you, but you have to offer me a...
        </p>
        <p className="highlighted-text logo-text text-3xl sm:text-5xl text-center pt-5 pb-16 font-bold">
          F***ing job !!!
        </p>
        <Link
          to="/portfolio"
          className="bg-[#094a4a] text-[#18c9c9] text-sm sm:text-base md:text-lg border-[#18c9c9] hover:text-[#094a4a] hover:bg-[#18c9c9] hover:border-[#18c9c9] w-fit border-2 px-3 py-2 rounded-md"
        >
          Back to Portfolio
        </Link>
      </div>
    </div>
  );
};

export default Error404;
