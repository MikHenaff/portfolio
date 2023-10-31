import { Link } from "react-scroll";

const NavbarBurgerLink = ({ text, handleBurger }) => {
  return (
    <li className="p-5 text-3xl cursor-pointer relative inline-block transition-all duration-500 before:content-[''] before:absolute before:bottom-3 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-[#18c9c9] hover:before:w-3/5 hover:before:opacity-100">
      <Link
        onClick={handleBurger}
        to={text.toLowerCase()}
        smooth={true}
        duration={500}
      >
        {text}
      </Link>
    </li>
  );
};

export default NavbarBurgerLink;
