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
import { GrAlarm } from "react-icons/gr";

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
  //sticky

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */

  const isSticky = (e) => {
    const header = document.querySelector(".header-section");
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };
  // modal openar

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`w-full transition-all duration-300 bg-transparent relative z-[99999]`}
    >
      {/* top Navbar */}
      <header className="bg-[linear-gradient(to_right,_#002244,_#002244,_#002244)] relative z-10 overflow-hidden md:block">
        <div className="Container flex items-center justify-between h-[50px]">
          <div className="flex items-center gap-10">
            <p className="font-Nunito text-white font-bold sm:flex hidden items-center gap-1">
              <CiLocationOn className="text-xl relative bottom-[2px] text-white font-black" />
               C-145, Okhla Phase-1,New Delhi-110020
            </p>
            <Link
              to={"/"}
              className="font-Nunito text-white font-bold md:flex items-center gap-2 hidden"
            >
              <HiOutlineMailOpen size={"16"} className="text-white font-black" />
              contact@binaryglobal.com
            </Link>
          </div>
          <div className="flex items-center gap-16">
            <ul className="flex gap-3 items-center">
              <li>
                <Link
                  to={"/"}
                  className="transition-all duration-500 text-white hover:text-[#00FFFF]"
                >
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="transition-all duration-500 text-white hover:text-[#00FFFF]"
                >
                  <FaXTwitter />
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="transition-all duration-500 text-white hover:text-[#00FFFF]"
                >
                  <FaLinkedinIn />
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="transition-all duration-500 text-white hover:text-[#00FFFF]"
                >
                  <FaPinterestP />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      {/* top Navbar */}
      <header
        className="header-section bg-white"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <div className="Container">
          {/* main Navbar */}
          <div className="flex flex-col lg:flex-row items-center justify-between lg:h-[100px] ">
            {/* website Logo */}
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
            {/* small screen size */}
            <div className="flex h-[70px] w-full items-center gap-3 p-3 lg:hidden">
              <div className="w-32">
                <Link to="/">
                  <img
                    draggable="false"
                    src="/binary-img/binarylogoblue.png"
                    className="block w-full lg:hidden"
                    alt="constre_website_logo"
                  />
                </Link>
              </div>
              <button
                type="button"
                aria-label="Search"
                className="ml-auto shrink-0 text-HeadingColor-0 transition-colors hover:text-PrimaryColor-0"
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
            <div
              className={`${
                isOpen ? "block" : "hidden"
              } w-full lg:ml-2 lg:flex lg:flex-1 lg:items-center lg:gap-4 xl:ml-6 2xl:ml-10`}
            >
              <ul
                id="primary-navigation"
                className="flex w-full flex-col gap-1 border-t border-gray-200 bg-white px-3 py-3 text-left font-Nunito lg:w-auto lg:flex-1 lg:flex-row lg:flex-nowrap lg:items-center lg:justify-between lg:gap-3 lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 xl:gap-5 2xl:gap-7"
              >
                {[
                  {
                    title: "What We Offer",
                    to: "/service",
                  },
                  {
                    title: "How We Deliver",
                    to: "/service",
                  },
                  {
                    title: "Why Binary Global",
                    to: "/about",
                  },
                  {
                    title: "Who We Serve",
                    to: "/project",
                  },
                  {
                    title: "Financing",
                    to: "/pricing_inner", 
                  },
                  {
                    title: "Resources",
                    to: "/blog_grid",
                  },
                  {
                    title: "Contact Us",
                    to: "/contact", 
                  },
                ].map(({ title, to }) => (
                  <li key={title} className="min-w-0">
                    <NavLink
                      to={to}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `block px-1 py-2 transition-colors duration-300 hover:text-PrimaryColor-0 lg:py-1 xl:px-2 ${
                          isActive
                            ? "text-PrimaryColor-0"
                            : "text-HeadingColor-0"
                        }`
                      }
                    >
                      <span className="block whitespace-nowrap text-sm font-bold lg:text-[11px] xl:text-xs 2xl:text-sm">
                        {title}
                      </span>
                    </NavLink>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                aria-label="Search"
                className="hidden shrink-0 text-HeadingColor-0 transition-colors hover:text-PrimaryColor-0 lg:block"
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
