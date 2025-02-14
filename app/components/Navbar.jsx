"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Navbar = ({ IsDarkmode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sideMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  return (
    <div>
      {/* Top Background */}
      <div className="fixed top-0 right-0 w-11/12 z-50 translate-y-[-80%] dark:hidden">
        <Image src="/assets/header-bg-color.png" alt="Header Background" fill className="object-cover" />
      </div>

      {/* Navbar */}
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScroll
            ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
            : ""
        }`}
      >
        {/* Logo */}
        <a href="#top">
          <Image
            src={IsDarkmode ? "/assets/manu.jpg" : "/assets/portfolio.jpg"}
            alt="Portfolio Logo"
            width={120}
            height={50}
            className="object-contain"
          />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 lg:gap-8 rounded-full px-20 py-3 bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent">
          {["Home", "About", "Services", "My Work", "Contact Me"].map((item, index) => (
            <li key={index}>
              <a className="font-Ovo text-xl hover:text-blue-600" href={`#${item.toLowerCase().replace(" ", "")}`}>
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Dark Mode Toggle & Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            <Image
              src={IsDarkmode ? "/assets/sun_icon.png" : "/assets/moon_icon.png"}
              alt="Toggle Dark Mode"
              width={25}
              height={25}
            />
          </button>

          {/* Contact Button */}
          <a
            href="#contact"
            className="hidden text-xl lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50"
          >
            Contact
            <Image
              src={IsDarkmode ? "/assets/arrow-icon-dark.png" : "/assets/arrow-icon.png"}
              alt="Arrow Icon"
              width={20}
              height={20}
              className="object-contain"
            />
          </a>

          {/* Mobile Menu Icon */}
          <button className="block md:hidden ml-3" onClick={() => setIsMenuOpen(true)}>
            <Image
              src={IsDarkmode ? "/assets/menu-white.png" : "/assets/menu-black.png"}
              alt="Menu Icon"
              width={20}
              height={20}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          ref={sideMenuRef}
          className={`fixed right-0 top-0 bottom-0 w-64 h-screen bg-rose-50 dark:text-black transition-transform duration-500 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Icon */}
          <div className="absolute right-6 top-6 cursor-pointer" onClick={() => setIsMenuOpen(false)}>
            <Image src="/assets/close-black.png" alt="Close Menu Icon" width={20} height={20} />
          </div>

          {/* Mobile Menu Links */}
          <ul className="flex flex-col gap-4 py-20 px-10">
            {["Home", "About Me", "Services", "My Work", "Contact Me"].map((item, index) => (
              <li key={index}>
                <a className="font-Ovo" onClick={() => setIsMenuOpen(false)} href={`#${item.toLowerCase().replace(" ", "")}`}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
