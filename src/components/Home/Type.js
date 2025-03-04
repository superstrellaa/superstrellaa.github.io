import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Freelancer",
          "Minecraft Modder",
          "Computer Engineer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 35,
      }}
    />
  );
}

export default Type;
