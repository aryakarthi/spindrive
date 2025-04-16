import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { LuMenu, LuX } from "react-icons/lu";
import { PhoneCall } from "lucide-react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  // const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  // const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // const toggleMobileAbout = () => {
  //   setIsMobileAboutOpen(!isMobileAboutOpen);
  // };
  return (
    <header className="h-20 w-full fixed inset-0 flex items-center bg-slate-50 shadow-sm z-50">
      <div className="container">
        <nav className="w-full flex items-center justify-between px-2 md:px-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={"/logo.png"} alt="Spin Drive Logo" className="w-36" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="rounded-md p-2 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <LuX className="text-2xl" />
              ) : (
                <LuMenu className="text-2xl" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            <NavLink
              to="/"
              className="text-md font-medium text-zinc-700 transition-colors hover:text-cyan-600"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="text-md font-medium text-zinc-700 transition-colors hover:text-cyan-600"
            >
              About
            </NavLink>
            <NavLink
              to="/cars"
              className="text-md font-medium text-zinc-700 transition-colors hover:text-cyan-600"
            >
              Our Cars
            </NavLink>
            {/* <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setIsAboutDropdownOpen(true)}
              onMouseLeave={() => setIsAboutDropdownOpen(false)}
            >
              <button className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none">
                About
                <svg
                  className={`ml-1 h-4 w-4 transition-transform ${
                    isAboutDropdownOpen ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isAboutDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                  <NavLink
                    to="/about/link1"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Link 1
                  </NavLink>
                  <NavLink
                    to="/about/link2"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Link 2
                  </NavLink>
                  <NavLink
                    to="/about/link3"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Link 3
                  </NavLink>
                </div>
              )}
            </div> */}
            <NavLink
              to="/contact"
              className="text-md font-medium text-zinc-700 transition-colors hover:text-cyan-600"
            >
              Contact
            </NavLink>

            <a
              href="tel:+919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-cyan-600 px-4 py-3 text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 cursor-pointer transition-colors"
            >
              <PhoneCall size={18} />
              Call Now
            </a>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`absolute left-0 right-0 top-20 z-50 bg-white px-4 py-2 shadow-md md:hidden ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col items-center space-y-4 pb-3 pt-2">
              <NavLink
                to="/"
                className="block px-3 py-2 text-base font-medium text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
                onClick={toggleMenu}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="block px-3 py-2 text-base font-medium text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
                onClick={toggleMenu}
              >
                About
              </NavLink>
              <NavLink
                to="/cars"
                className="block px-3 py-2 text-base font-medium text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
                onClick={toggleMenu}
              >
                Our Cars
              </NavLink>
              {/* <div className="relative">
                <button
                  onClick={toggleMobileAbout}
                  className="flex w-full items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                >
                  About
                  <svg
                    className={`h-5 w-5 transition-transform ${
                      isMobileAboutOpen ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isMobileAboutOpen && (
                  <div className="mt-1 space-y-1 pl-6">
                    <NavLink
                      to="/about/link1"
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      onClick={toggleMenu}
                    >
                      Link 1
                    </NavLink>
                    <NavLink
                      to="/about/link2"
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      onClick={toggleMenu}
                    >
                      Link 2
                    </NavLink>
                    <NavLink
                      to="/about/link3"
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      onClick={toggleMenu}
                    >
                      Link 3
                    </NavLink>
                  </div>
                )}
              </div> */}
              <NavLink
                to="/contact"
                className="block px-3 py-2 text-base font-medium text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
                onClick={toggleMenu}
              >
                Contact
              </NavLink>
              <div className="px-3 py-2">
                {/* <button className="w-full rounded-md bg-cyan-600 px-4 py-2 text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2">
                  Call Now
                </button> */}
                {/* added PhoneCall Button */}
                <a
                  href="tel:+916380442901"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-cyan-600 px-4 py-3 text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 cursor-pointer transition-colors"
                >
                  <PhoneCall size={18} />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
