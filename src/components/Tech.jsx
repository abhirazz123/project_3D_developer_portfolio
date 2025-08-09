import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <section
      aria-label="Technologies used"
      className="flex flex-wrap justify-center gap-10 py-10"
    >
      {technologies.map((technology) => (
        <div
          key={technology.name}
          className="w-20 h-20 sm:w-28 sm:h-28"
          title={technology.name}
          aria-label={technology.name}
        >
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </section>
  );
};

export default SectionWrapper(Tech, "tech");
