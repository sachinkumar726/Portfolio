import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <span className="gradient-text-cyan font-semibold">
      <Typewriter
        options={{
          strings: [
            "Java Backend Developer",
            "Spring Boot Engineer",
            "Microservices Architect",
            "Networking OSS Developer",
            "Associate SWE @ BT Group",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 40,
          delay: 60,
        }}
      />
    </span>
  );
}

export default Type;
