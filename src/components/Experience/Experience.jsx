import React, { forwardRef } from "react";
import { experience } from "../../data.js";

const Experience = forwardRef((props, ref) => {
  const renderExperience = () => {
    return experience.map((exp, index) => (
      <div
        key={index}
        className="w-full flex flex-col items-center gap-2 rounded-2xl hover:bg-transparent border border-transparent hover:border-white fade bg-gray-800 p-8"
      >
        <img
          src={exp.image}
          alt={exp.company}
          className="w-32 h-32 object-cover border bg-white rounded-full mb-4"
        />
        <h3 className="text-2xl font-bold">{exp.role}</h3>
        <h4 className="text-xl">{exp.company}</h4>
        <p className="text-muted text-sm">{exp.type}</p>
        <p className="text-muted text-sm">
          {exp.startDate} - {exp.endDate}
        </p>
      </div>
    ));
  };

  return (
    <section id="experience" ref={ref} className="min-h-screen py-14">
      <div className="w-3/4 mx-auto h-full relative flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-8">Experience</h2>
        <div className="w-92 flex">
          {renderExperience()}
        </div>
      </div>
    </section>
  );
});

export default Experience;