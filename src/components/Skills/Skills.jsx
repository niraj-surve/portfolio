import React, { forwardRef } from "react";
import { skills } from "../../data.js";

const Skills = forwardRef((props, ref) => {
  const renderSkills = (category) => {
    return skills
      .filter((skill) => skill.category === category)
      .map((skill, index) => {
        const IconComponent = skill.icon;
        return (
          <div key={index} className="flex gap-4">
            <IconComponent className="text-primary text-3xl mt-1" />
            <div className="flex flex-col">
              <h5 className="text-sm">{skill.title}</h5>
              <span className="text-muted text-sm">{skill.level}</span>
            </div>
          </div>
        );
      });
  };

  return (
    <section id="skills" ref={ref} className="min-h-screen py-14">
      <div className="w-3/4 mx-auto h-full relative flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">My Skills</h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-full h-[20.5rem] flex flex-col items-center gap-8 rounded-2xl hover:bg-transparent border border-transparent hover:border-white fade bg-gray-800 p-8">
            <h3 className="text-primary">Frontend Development</h3>
            <div className="w-full grid grid-cols-2 gap-8 md:ml-12">
              {renderSkills("Frontend")}
            </div>
          </div>
          <div className="w-full h-[20.5rem] flex flex-col items-center gap-8 rounded-2xl hover:bg-transparent border border-transparent hover:border-white fade bg-gray-800 p-8">
            <h3 className="text-primary">Backend Development</h3>
            <div className="w-full grid grid-cols-2 gap-8 md:ml-12">
              {renderSkills("Backend")}
            </div>
          </div>
          <div className="w-full h-[20.5rem] flex flex-col items-center gap-8 rounded-2xl hover:bg-transparent border border-transparent hover:border-white fade bg-gray-800 p-8">
            <h3 className="text-primary">Other skills</h3>
            <div className="w-full grid grid-cols-2 gap-8 md:ml-12">
              {renderSkills("Other")}
            </div>
          </div>
          <div className="w-full h-[20.5rem] flex flex-col items-center gap-8 rounded-2xl hover:bg-transparent border border-transparent hover:border-white fade bg-gray-800 p-8">
            <h3 className="text-primary">Tools I use</h3>
            <div className="w-full grid grid-cols-2 gap-8 md:ml-12">
              {renderSkills("Tools")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Skills;