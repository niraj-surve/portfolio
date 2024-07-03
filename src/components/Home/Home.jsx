import React, { forwardRef } from "react";
import me from "../../assets/Me.png";
import CallToAction from "./CallToAction.jsx";
import Socials from "./Socials.jsx";

const Home = forwardRef((props, ref) => {
  return (
    <section id="home" ref={ref} className="h-screen pt-16">
      <div className="w-3/4 mx-auto h-full px-40 relative flex flex-col items-center">
        <h5 className="text-gray-500">Hi I'm</h5>
        <h1 className="text-[40px] font-bold text-white font-poppins">
          Niraj Surve
        </h1>
        <h5 className="text-[14px] text-primary font-medium font-poppins">
          Computer Engineering Undergraduate
        </h5>
        <CallToAction />
        <Socials />
        <div className="group">
          <div className="w-72 h-120 absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-16 rounded-full overflow-hidden p-4 z-[2]">
            <img src={me} alt="me" className="cursor-pointer border-8 border-primary rounded-full" />
          </div>
        </div>
        <a
          href="#contacts"
          className="scroll__down absolute right-0 bottom-[160px] rotate-90 text-sm text-primary hover:text-white hover:scale-105 fade poppins-light"
        >
          Scroll Down
        </a>
      </div>
    </section>
  );
});

export default Home;