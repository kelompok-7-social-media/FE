import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="navbar px-2 bg-gradient-to-b from-bgpurple to-bgpink md:px-5">
      <div className="navbar-start">
        <img className="w-12" src="src/assets/logo-white.svg" alt="logo" />
        <p className="normal-case text-white font-bold mx-1 md:hidden">
          Timeline
        </p>
      </div>
      <div className="navbar-center hidden md:flex">
        <p className="normal-case text-white font-bold">Timeline</p>
      </div>
      <div className="navbar-end">
        <p className="text-white font-medium text-sm hidden md:flex">
          John Doe
        </p>
        <img
          className="w-12 rounded-full mx-2"
          src="src/assets/photo1.jpg"
          alt="photo"
        />
        <div className="text-white">
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
