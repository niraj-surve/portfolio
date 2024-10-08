import React from "react";
import CV from "../../assets/Resume - Niraj Surve.pdf";

const CTA = () => {
  return (
    <div className="cta mt-10 flex gap-4 justify-center font-poppins">
      <a
        href={CV}
        download
        className="btn border border-primary text-primary hover:bg-white hover:text-dark hover:border-white fade py-3 px-5 rounded text-sm"
      >
        Download CV
      </a>
      <a
        href="#contact"
        className="btn btn-primary border border-primary bg-primary text-white hover:bg-white hover:border-white hover:text-dark fade py-3 px-5 rounded text-sm"
      >
        Contact Me
      </a>
    </div>
  );
};

export default CTA;
