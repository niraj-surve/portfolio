import React, { forwardRef } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="h-full bg-primary">
      <div className="w-3/4 mx-auto flex flex-col items-center justify-evenly gap-10 p-8 text-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold mt-8 cursor-pointer hover:text-white fade">
          Niraj Surve
        </h2>
        <ul className="flex gap-4 items-center font-thin max-md:text-sm">
          <li className="hover:text-white fade">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-white fade">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-white fade">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:text-white fade">
            <a href="#experience">Experience</a>
          </li>
          <li className="hover:text-white fade">
            <a href="#portfolio">Portfolio</a>
          </li>
        </ul>
        <div className="flex gap-4">
          <div
            title="LinkedIn"
            className="group bg-gray-800 hover:bg-transparent text-white group-hover:text-gray-800 border border-transparent hover:border-gray-800 cursor-pointer fade p-3 rounded-lg"
          >
            <a
              href="https://www.linkedin.com/in/niraj-surve07"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin className="text-sm" />
            </a>
          </div>
          <div
            title="Github"
            className="bg-gray-800 hover:bg-transparent text-white group-hover:text-gray-800 fade border border-transparent hover:border-gray-800 cursor-pointer fade p-3 rounded-lg"
          >
            <a
              href="https://github.com/niraj-surve"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub className="text-sm" />
            </a>
          </div>
        </div>
        <span className="text-xs mt-8 mb-20">
          © <a className="hover:text-white fade" href="#home">Niraj Surve</a>. All rights reserved.
        </span>
      </div>
    </div>
  );
});

export default Footer;