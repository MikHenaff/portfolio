const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#094a4a]">
      <div className="flex flex-col h-full justify-center px-[10%] text-sm sm:text-lg md:text-2xl">
        <p className="text-xl sm:text-2xl text-[#18c9c9] font-bold">
          Hi! My name is
        </p>
        <h1 className="highlighted-text text-4xl sm:text-5xl py-5 font-bold">
          Mik Henaff
        </h1>
        <h2 className="text-[#b8bcbd] text-3xl sm:text-5xl font-bold pb-5">
          I&apos;m a frontend developer.
        </h2>
        <div className="max-w-[700px] text-[#b8bcbd]">
          <p className="pb-4">
            <span className="highlighted-text">Passionate</span> about the world
            of <strong className="highlighted-text">React</strong>, I&apos;m a
            beginner determined to explore its environment and create amazing
            user experiences.
          </p>
          <p className="pb-4">
            My portfolio reflects my learning journey, budding creativity, and
            commitment to growing as a{" "}
            <strong className="highlighted-text">frontend developer</strong>.{" "}
          </p>
          <p>
            I&apos;m{" "}
            <span className="highlighted-text">available for hire</span> and{" "}
            <span className="highlighted-text">mobile</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
