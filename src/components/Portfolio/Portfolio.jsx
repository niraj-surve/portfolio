import React, { forwardRef } from "react";
import { projects } from "../../data.js";

const Portfolio = forwardRef((props, ref) => {
  const renderProjects = () => {
    return projects.map((prj, index) => (
      <div
        key={index}
        className="w-full flex flex-col items-center gap-8 rounded-2xl hover:bg-transparent border border-transparent hover:border-white fade bg-gray-800 p-8"
      >
        <img
          src={prj.image}
          alt={prj.title}
          className="w-96 h-32 border bg-white rounded-lg"
        />
        <div className="flex flex-col gap-4 items-center">
          <h3 className="text-xl font-bold text-center">{prj.title}</h3>
          <span className="text-muted text-center text-sm">
            {prj.technology}
          </span>
        </div>
        <div className="grid grid-cols-splitBtns gap-4 text-sm">
          {prj.github && (
            <button className="bg-transparent border border-primary rounded-lg hover:bg-white hover:text-dark hover:border-transparent fade px-5 py-4">
              <a href={prj.github} target="_blank">
                Github
              </a>
            </button>
          )}
          {prj.website && (
            <button className="w-full bg-primary border border-primary rounded-lg hover:bg-white hover:text-dark hover:border-transparent fade px-5 py-4">
              <a
                href={prj.website === "this" ? "#home" : prj.website}
                target={prj.website === "this" ? "_self" : "_blank"}
              >
                Visit Website
              </a>
            </button>
          )}
        </div>
      </div>
    ));
  };

  return (
    <section id="portfolio" ref={ref} className="min-h-screen py-14">
      <div className="w-3/4 mx-auto h-full relative flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-8">Portfolio</h2>
        <div className="w-92 grid grid-cols-1 md:grid-cols-3 gap-8 max-md:px-8">{renderProjects()}</div>
      </div>
    </section>
  );
});

export default Portfolio;
