/* eslint-disable no-unused-vars */
import { Link, NavLink } from "react-router-dom";
import {
  FaBars,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";
import Logo from "/images/logo.png";
import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { HiOutlineMailOpen } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";

const GreatPlaceToWorkBadge = ({ className }) => (
  <div className={`relative shrink-0 duration-150 ${className}`}>
    <a
      href="https://www.greatplacetowork.in/great/company/binary-global-limited"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="View Binary Global's Great Place to Work certification"
    >
      <img
        src="/binary-img/great-place-to-work-logo.jpg"
        alt="Great Place to Work Certified"
        className="absolute inset-0 h-full w-full object-contain"
      />
    </a>
  </div>
);

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 150) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`transition-all duration-300 w-full z-[99999] ${
        isSticky
          ? "fixed top-0 left-0 shadow-md bg-white animate-fadeIn"
          : "absolute top-0 left-0 bg-transparent"
      }`}
    >
      {/* Top Navbar - hides when scrolling down to save space */}
      <div
        className={`bg-[linear-gradient(to_right,_#002244,_#0b3866,_#0b3866)] relative z-10 overflow-hidden transition-all duration-300 md:block ${
          isSticky ? "hidden" : "block"
        }`}
      >
        <div className="Container flex items-center justify-between h-[50px]">
          <div className="flex items-center gap-10">
            <p className="font-Nunito text-white font-bold sm:flex hidden items-center gap-1 text-xs lg:text-sm">
              <CiLocationOn className="text-xl relative bottom-[2px] text-white font-black" />
              C-145, Okhla Phase-1, New Delhi-110020
            </p>
            <Link
              to={"/"}
              className="font-Nunito text-white font-bold md:flex items-center gap-2 hidden text-xs lg:text-sm"
            >
              <HiOutlineMailOpen size={"16"} className="text-white font-black" />
              contact@binaryglobal.com
            </Link>
          </div>
          <div className="flex items-center gap-16">
            <ul className="flex gap-3 items-center text-white">
              <li>
                <Link to={"/"} className="transition-all duration-500 hover:text-[#62f4f9]">
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link to={"/"} className="transition-all duration-500 hover:text-[#62f4f9]">
                  <FaXTwitter />
                </Link>
              </li>
              <li>
                <Link to={"/"} className="transition-all duration-500 hover:text-[#62f4f9]">
                  <FaLinkedinIn />
                </Link>
              </li>
              <li>
                <Link to={"/"} className="transition-all duration-500 hover:text-[#62f4f9]">
                  <FaPinterestP />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main Navbar Section */}
      <header
        className={`header-section transition-all duration-300 ${
          isSticky ? "bg-white shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="Container">
          <div className="flex flex-col lg:flex-row items-center justify-between lg:h-[90px]">
            {/* Website Logo */}
            <div className="hidden w-48 lg:block lg:w-52">
              <Link to="/">
                <img
                  draggable="false"
                  src="/binary-img/binarylogoblue.png"
                  className="hidden w-full lg:block"
                  alt="website_logo"
                />
              </Link>
            </div>

            {/* Small Screen Size Navbar Header */}
            <div className="flex h-[70px] w-full items-center gap-3 p-3 lg:hidden bg-white/90 backdrop-blur-md">
              <div className="w-32">
                <Link to="/">
                  <img
                    draggable="false"
                    src="/binary-img/binarylogoblue.png"
                    className="block w-full lg:hidden"
                    alt="website_logo"
                  />
                </Link>
              </div>
              <button
                type="button"
                aria-label="Search"
                className="ml-auto shrink-0 text-HeadingColor-0 transition-colors hover:text-[#62f4f9]"
              >
                <IoSearch className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isOpen}
                aria-controls="primary-navigation"
                className="shrink-0 p-2 text-HeadingColor-0 focus:outline-none"
                onClick={toggleNavbar}
              >
                {isOpen ? (
                  <IoMdClose className="w-6 h-6 text-HeadingColor-0" />
                ) : (
                  <FaBars className="w-5 h-5 text-HeadingColor-0" />
                )}
              </button>
              <GreatPlaceToWorkBadge className="relative -right-3 h-[60px] w-10 sm:h-[90px] sm:w-16" />
            </div>

            {/* Navigation Links */}
            <div
              className={`${
                isOpen ? "block bg-white shadow-xl p-4 rounded-b-lg" : "hidden"
              } w-full lg:ml-2 lg:flex lg:flex-1 lg:items-center lg:gap-4 xl:ml-6 2xl:ml-10`}
            >
              <ul
                id="primary-navigation"
                className="flex w-full flex-col gap-1 border-t border-gray-200 lg:border-0 bg-transparent px-0 py-3 text-left font-Nunito lg:w-auto lg:flex-1 lg:flex-row lg:flex-nowrap lg:items-center lg:justify-between lg:gap-3 xl:gap-5 2xl:gap-7"
              >
                {[
                  { title: "What We Offer", to: "/service" },
                  { title: "How We Deliver", to: "/service" },
                  { title: "Why Binary Global", to: "/about" },
                  { title: "Who We Serve", to: "/project" },
                  { title: "Financing", to: "/pricing_inner" },
                  { title: "Resources", to: "/blog_grid" },
                  { title: "Contact Us", to: "/contact" },
                ].map(({ title, to }) => (
                  <li key={title} className="min-w-0">
                    <NavLink
                      to={to}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `block px-1 py-2 transition-colors duration-300 hover:text-[#62f4f9] lg:py-1 xl:px-2 ${
                          isActive
                            ? "text-[#62f4f9] font-bold"
                            : isSticky
                            ? "text-HeadingColor-0"
                            : "text-HeadingColor-0 lg:text-white"
                        }`
                      }
                    >
                      <span className="block whitespace-nowrap text-sm font-bold lg:text-[12px] xl:text-xs 2xl:text-sm">
                        {title}
                      </span>
                    </NavLink>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                aria-label="Search"
                className={`hidden shrink-0 transition-colors hover:text-[#62f4f9] lg:block ${
                  isSticky ? "text-HeadingColor-0" : "text-white"
                }`}
              >
                <IoSearch className="h-5 w-5" />
              </button>
              <GreatPlaceToWorkBadge className="hidden h-[90px] w-16 lg:relative lg:-right-3 lg:block" />
            </div>
          </div>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;