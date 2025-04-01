"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => {
  return (
    <TypeAnimation
      sequence={["Full Stack Developer", 2000, "DevOps Enthusiast", 2000]}
      wrapper="span"
      speed={50}
      className="font-heading tracking-wide font-bold lg:text-3xl text-transparent bg-clip-text bg-accent"
      style={{ display: "inline-block", minWidth: "280px" }}
      repeat={Infinity}
    />
  );
};

export default TypingAnimation;
