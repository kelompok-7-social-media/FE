import { IoIosArrowDown } from "react-icons/io";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar px-2 bg-gradient-to-b from-bgpurple to-bgpink sm:px-5 mb-1">
      <div className="navbar-start">
        <img className="w-12" src="src/assets/logo-white.svg" alt="logo" />
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
          <label tabIndex={0} className="text-white flex items-center">
            <img
              className="w-12 rounded-full mx-2"
              src="src/assets/photo1.jpg"
              alt="photo"
            />
            <IoIosArrowDown />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-50 menu my-5 p-2 shadow border-2 border-gray-300 bg-gray-100 rounded-box w-40"
          >
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
