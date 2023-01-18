import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { useContext } from "react";

import logo from "src/assets/logo-white.svg";
import photo1 from "src/assets/photo1.jpg";
import { ThemeContext } from "utils/context";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  function handleTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <div className="navbar px-2 bg-gradient-to-b from-bgpurple to-bgpink sm:px-5">
      <div className="navbar-start">
        <Link to="/timeline">
          <img
            className="w-12 duration-300 active:scale-90 hover:cursor-pointer"
            src={logo}
            alt="logo"
          />
        </Link>
        <p className="normal-case text-white font-bold mx-1 sm:hidden">Title</p>
      </div>
      <div className="navbar-center hidden sm:flex">
        <p className="normal-case text-white font-bold">Title</p>
      </div>
      <div className="navbar-end">
        <p className="text-white font-medium text-sm hidden sm:flex">
          John Doe
        </p>
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="text-white flex items-center duration-300 active:scale-110 hover:cursor-pointer"
          >
            <img className="w-12 rounded-full mx-2" src={photo1} alt="photo" />
            <IoIosArrowDown />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-50 menu my-5 p-2 shadow border-2 border-gray-300 bg-gray-100 rounded-box w-60 text-sm"
          >
            <li>
              <a className="justify-between">
                Dark Mode
                <span className="badge">
                  <label className="swap">
                    <input type="checkbox" onClick={() => handleTheme()} />
                    <div className="swap-on">ON</div>
                    <div className="swap-off">OFF</div>
                  </label>
                </span>
              </a>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
