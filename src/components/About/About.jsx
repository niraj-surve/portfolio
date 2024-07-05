import React, { forwardRef } from "react";
import myImage from "../../assets/Me-bg.png";
import { GiGraduateCap } from "react-icons/gi";
import { BsBookmarkStar } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";

const About = forwardRef((props, ref) => {
  return (
    <section id="about" ref={ref} className="min-h-screen pt-14">
      <div className="w-3/4 mx-auto h-full relative flex flex-col items-center">
        <h5 className="text-gray-500">Get To Know</h5>
        <h2 className="text-3xl font-bold mb-16">About Me</h2>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-split justify-center max-md:items-center gap-8">
          <div className="relative mx-auto w-3/4 aspect-square bg-primary rounded-2xl flex max-md:items-center max-md:mb-8">
            <div className="overflow-hidden cursor-pointer w-full bg-blue-300 bg-[url('./assets/sqaure-bg.png')] bg-cover  rounded-2xl transform transition-transform duration-500 hover:rotate-0 -rotate-12 p-4">
              <img
                src={myImage}
                alt="Me"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 max-md:justify-center">
              <div className="h-md:md48-52 bg-gray-800 border border-transparent rounded-xl p-4 flex flex-col max-md:justify-center items-center gap-2 text-center transition duration-500 hover:bg-transparent hover:border-primary cursor-pointer">
                <GiGraduateCap className="text-primary text-2xl" />
                <h5 className="text-lg">Degree</h5>
                <small className="text-sm text-gray-400 flex flex-col gap-2">
                  <span>BE Computer Engineering (UG)</span>
                  <i>University of Mumbai.</i>
                </small>
              </div>

              <div className="h-40 md:h-48 bg-gray-800 border border-transparent rounded-xl p-4 flex flex-col max-md:justify-center items-center gap-2 text-center transition duration-500 hover:bg-transparent hover:border-primary cursor-pointer">
                <BsBookmarkStar className="text-primary text-2xl" />
                <h5 className="text-lg">CGPA</h5>
                <small className="text-sm text-gray-400">8.68</small>
              </div>

              <div className="h-40 md:h-48 bg-gray-800 border border-transparent rounded-xl p-4 flex flex-col max-md:justify-center items-center gap-2 text-center transition duration-500 hover:bg-transparent hover:border-primary cursor-pointer">
                <TfiWorld className="text-primary text-2xl" />
                <h5 className="text-lg">Domains</h5>
                <small className="text-sm text-gray-400">
                  <ul>
                    <li>Full Stack Development</li>
                  </ul>
                </small>
              </div>
            </div>
            <p className="text-gray-400 max-md:text-center">
              I'm a <b>Computer Engineering Undergraduate</b> at the University
              of Mumbai. I'm an enthusiastic and driven Computer Engineering
              student seeking an opportunity to apply and expand my technical
              skills. With a strong academic foundation in software development
              and engineering and hands-on experience in various programming
              languages, I am eager to contribute to innovative projects and
              learn from experienced professionals in the industry. I am a quick
              learner who is always ready to face challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;