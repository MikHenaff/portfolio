import NavbarLink from "./NavbarLink";
import NavbarBurgerLink from "./NavbarBurgerLink";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const Navbar = ({ burger, handleBurger }) => {
  return (
    <div className="fixed flex w-full items-center justify-between text-2xl px-5 py-3 text-[#18c9c9] bg-[#094a4a] z-10">
      <div>
        <Link to="home" smooth={true} duration={500} className="cursor-pointer">
          <p className="logo-text font-bold">&lt;MH/&gt;</p>
        </Link>
      </div>
      <ul className="hidden md:flex ">
        <NavbarLink text="Home" />
        <span>|</span>
        <NavbarLink text="About" />
        <span>|</span>
        <NavbarLink text="Skills" />
        <span>|</span>
        <NavbarLink text="Work" />
        <span>|</span>
        <NavbarLink text="Contact" />
      </ul>
      <div onClick={handleBurger} className="z-10 md:hidden">
        {burger ? <FaTimes /> : <FaBars />}
      </div>
      <ul
        className={
          burger
            ? "absolute top-0 left-0 flex flex-col w-full min-h-screen items-center justify-center bg-[#094a4a] md:hidden"
            : "hidden"
        }
      >
        <NavbarBurgerLink text="Home" handleBurger={handleBurger} />
        <NavbarBurgerLink text="About" handleBurger={handleBurger} />
        <NavbarBurgerLink text="Skills" handleBurger={handleBurger} />
        <NavbarBurgerLink text="Work" handleBurger={handleBurger} />
        <NavbarBurgerLink text="Contact" handleBurger={handleBurger} />
      </ul>
    </div>
  );
};

export default Navbar;
