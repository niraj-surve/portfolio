import React, { useState } from "react";
import { AiOutlineHome, AiOutlineThunderbolt } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { FaLaptopCode } from "react-icons/fa";
import { GoChecklist } from "react-icons/go";
import { BiMessageSquareDetail } from "react-icons/bi";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { PiSuitcaseSimple, PiSuitcaseSimpleBold } from "react-icons/pi";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav className="bg-black bg-opacity-30 w-max px-5 py-4 z-10 fixed left-1/2 transform -translate-x-1/2 bottom-8 flex gap-4 rounded-full backdrop-blur-md">
      <a
        href="#home"
        onClick={() => setActiveNav("#")}
        className={`${
          activeNav === "#"
            ? "bg-primary text-black"
            : "bg-transparent text-white hover:bg-black hover:bg-opacity-40 fade"
        } p-2.5 rounded-full flex text-light text-lg`}
      >
        <AiOutlineHome />
      </a>
      <a
        title="About Me"
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={`${
          activeNav === "#about"
            ? "bg-primary text-bg"
            : "bg-transparent text-white hover:bg-black hover:bg-opacity-40 fade"
        } p-2.5 rounded-full flex text-light text-lg`}
      >
        <BiUser />
      </a>
      <a
        title="My Skills"
        href="#skills"
        onClick={() => setActiveNav("#skills")}
        className={`${
          activeNav === "#skills"
            ? "bg-primary text-bg"
            : "bg-transparent text-white hover:bg-black hover:bg-opacity-40 fade"
        } p-2.5 rounded-full flex text-light text-lg`}
      >
        <AiOutlineThunderbolt />
      </a>
      <a
        title="Experience"
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={`${
          activeNav === "#experience"
            ? "bg-primary text-bg"
            : "bg-transparent text-white hover:bg-black hover:bg-opacity-40 fade"
        } p-2.5 rounded-full flex text-light text-lg`}
      >
        <FaLaptopCode />
      </a>
      <a
        title="Portfolio"
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={`${
          activeNav === "#portfolio"
            ? "bg-primary text-bg"
            : "bg-transparent text-white hover:bg-black hover:bg-opacity-40 fade"
        } p-2.5 rounded-full flex text-light text-lg`}
      >
        <PiSuitcaseSimple />
      </a>
      <a
        title="Contact Me"
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={`${
          activeNav === "#contact"
            ? "bg-primary text-bg"
            : "bg-transparent text-white hover:bg-black hover:bg-opacity-40 fade"
        } p-2.5 rounded-full flex text-light text-lg`}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Navbar;