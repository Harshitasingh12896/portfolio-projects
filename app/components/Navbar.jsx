"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Navbar = ({IsDarkmode,setIsDarkMode}) => {
  const[isScroll,setIsScroll]=useState(false)
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(0)"; // Open the menu
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(100%)"; // Close the menu
  };
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(scrollY>50){
        setIsScroll(true)

      }else{
        setIsScroll(false)

      }
    })

  },[])
  
  return (
    <div>
    <div className="fixed top-0 right-0 w-11/12 z-50 translate-y-[-80%]dark:hidden">
  <Image
    src="/assets/header-bg-color.png"
    alt="header"
    fill
    className="object-cover"
  />
  </div>

      {/* Navbar */}
      <nav
   className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50
    ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`}
>
        <a href="#top">
          <Image
            src={IsDarkmode ? "/assets/manu.jpg" : "/assets/portfolio.jpg"}
            alt="Logo"
            width={120}
            height={50}
            className="object-contain"
          />
  
        </a>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-10 lg:gap-8 rounded-full px-20 py-3 bg-white shadow-sm bg-opacity-50 dark:border 
        dark:border-white/50 dark:bg-transparent"
        >
          <li>
            <a className="font-Ovo text-xl hover:text-blue-600" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo text-xl hover:text-blue-600" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="font-Ovo text-xl hover:text-blue-600" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo text-xl hover:text-blue-600" href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ovo text-xl hover:text-blue-600" href="#contact">
              Contact me
            </a>
          </li>
        </ul>

        {/* Dark mode toggle and mobile menu */}
        <div className="flex items-center gap-4">
          <button onClick={()=>setIsDarkMode(prev=>!prev)}>
            <Image
              src={IsDarkmode?"/assets/sun_icon.png" :"/assets/moon_icon.png"}
              alt="moon-icon"
              width={25}
              height={25}
            />
          </button>

          <a
            href="#contact"
            className="hidden  text-xl lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo
            dark:border-white/50"
          >
            Contact{" "}
            <Image
              src={IsDarkmode?"/assets/arrow-icon-dark.png":"/assets/arrow-icon.png"}
              alt="arrow"
              width={20}
              height={20}
              className="object-contain"
            />
          </a>

          {/* Menu icon */}
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={IsDarkmode?"/assets/menu-white.png":"/assets/menu-black.png"}
              alt="menu icon"
              width={20}
              height={20}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-transform transform translate-x-full duration-500
          dark:text-black"
        >
          {/* Close icon */}
          <div
            className="absolute right-6 top-6 cursor-pointer"
            onClick={closeMenu}
          >
            <Image
              src="/assets/close-black.png"
              alt="close-icon"
              width={20}
              height={20}
            />
          </div>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#about">
              About Me
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#contact">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
   </div>
  );
};

export default Navbar;
