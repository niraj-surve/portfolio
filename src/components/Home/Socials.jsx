import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials flex flex-col items-center gap-4 absolute left-0 bottom-24 after:content-[''] after:w-px after:h-8 after:bg-primary">
      <a
        title="LinkedIn"
        href="https://www.linkedin.com/in/niraj-surve07"
        target="_blank"
        rel="noreferrer"
        className="hover:scale-110 fade"
      >
        <BsLinkedin className="text-xl text-primary hover:text-white fade" />
      </a>
      <a
        title="Github"
        href="https://github.com/niraj-surve"
        target="_blank"
        rel="noreferrer"
        className="hover:scale-110 fade"
      >
        <BsGithub className="text-xl text-primary hover:text-white fade" />
      </a>
    </div>
  );
};

export default HeaderSocials;
