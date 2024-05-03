import { IoMdMenu } from "react-icons/io";

import React, { useState } from "react";
import { Link } from "react-router-dom";
// import AnchorLink from 'react-anchor-link-smooth-scroll'; // Import AnchorLink

const NavBar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="flex items-center text-lg font-semibold gap-5 px-5">
      {/* Menu icon for smaller screens */}
      <div className="lg:hidden relative">
        <button
          onClick={toggleMenu}
          className=" text-white  text-4xl focus:outline-none "
          aria-label="Toggle menu"
        >
          <IoMdMenu />
        </button>
        {/* Dropdown menu for smaller screens */}
        {showMenu && (
          <div
            className="absolute top-full right-0 duration-700 mt-2 w-56 rounded-md shadow-lg text-black bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
            onClick={() => setShowMenu(false)}
          >
            <div
              className="flex flex-col  justify-center items-center p-5 gap-10 py-5"
              role="none"
            >
              <Link to="/">Home</Link>

              {/* <AnchorLink href="#categories"> 
                Categories
              </AnchorLink> */}
              {/* Other navigation links */}
              {/* <Link to="/comparison">Comparison</Link>
              <Link to="/features">Features</Link> */}
            </div>
          </div>
        )}
      </div>

      {/* Navigation items for medium and larger screens */}
      <div className="hidden lg:flex gap-5 lg:items-center">
        <Link to="/">Home</Link>

        {/* <AnchorLink href="#categories"> 
          Categories
        </AnchorLink> */}
        {/* Other navigation links */}
        {/* <Link to="/comparison">Comparison</Link>
        <Link to="/features">Features</Link> */}
      </div>
    </nav>
  );
};

export default NavBar;
