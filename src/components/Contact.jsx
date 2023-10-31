import { GoMail } from "react-icons/go";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen flex flex-col justify-center items-center text-[#b8bcbd] text-lg md:text-2xl bg-[#094a4a] pt-[90px]"
    >
      <div className="flex flex-col items-center">
        <h2
          className="text-[#18c9c9] text-3xl sm:text-5xl text-center mb-24 underline underline-offset-4"
          style={{ textShadow: "1px 1px 1px #f2f2f2" }}
        >
          Contact me
        </h2>
        <form
          action="https://getform.io/f/0437ae29-34e4-48d0-ba4d-df3bf8437de0"
          method="POST"
          className="flex flex-col items-center w-full sm:w-[500px] text-[#041f1f]"
        >
          <p className="mb-3 text-[#b8bcbd]">Send me a message...</p>
          <input
            type="text"
            name="name"
            required
            placeholder="Your full name..."
            className="w-full pl-2 py-2 mb-2 text-base md:text-lg bg-[#7eb9b9] placeholder-gray-600 rounded"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your email..."
            className="w-full pl-2 py-2 mb-2 text-base md:text-lg bg-[#7eb9b9] placeholder-gray-600 rounded"
          />
          <textarea
            name="message"
            required
            rows="10"
            placeholder="Your message..."
            className="w-full pl-2 py-2 mb-5 text-base md:text-lg bg-[#7eb9b9] placeholder-gray-600 rounded"
          ></textarea>
          <button className="bg-[#094a4a] text-[#18c9c9] text-base md:text-lg border-[#18c9c9] hover:text-[#094a4a] hover:bg-[#18c9c9] hover:border-[#18c9c9] w-fit border-2 px-3 py-2 mb-10 rounded-md">
            Send message
          </button>
        </form>
        <div className="flex flex-col items-center pt-5">
          <p className="mb-3">...or send me an email !</p>
          <a href="mailto:mikhenaff@yahoo.fr" title="mikhenaff@yahoo.fr">
            <GoMail className=" w-[40px] h-[40px] md:w-[50px] md:h-[50px] text-[#18c9c9] hover:text-[#1df4f4]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
