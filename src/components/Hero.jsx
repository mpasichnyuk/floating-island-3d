import React from "react";

const Hero = () => {
  return (
    <>
      <div className="mt-5 flex flex-col gap-3">
        <h1 className="head-text">
          Hello! 👋 I am <br />
          <span className="blue-gradient_text font-semibold drop-shadow">
            Mikhail
          </span>
        </h1>
        <p className=" text-black-500">
          Software engineer based in Charlotte NC <br />
          specializing in Full Stack Web Development <br />
          with additional experience in <br />
          motion design,2d and 2d animation, media creation, finance industry,{" "}
          <br />
          game design and also AI, LLMs and promt engineering
        </p>
      </div>
    </>
  );
};

export default Hero;
