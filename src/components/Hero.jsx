import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto px-4 sm:px-6 ${styles.paddingX} flex flex-col sm:flex-row items-start gap-5`}
      >
        <div className="flex flex-row sm:flex-col justify-start sm:justify-center items-center sm:items-center mt-5 gap-3 sm:gap-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 h-20 sm:h-80 violet-gradient" />
        </div>

        <div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white">
            Hi, I'm <span className="text-[#915EFF]">Abhishek Kumar</span>
          </h1>
          <p className="text-white/90 mt-2 text-base sm:text-lg max-w-md">
            I develop 3D visuals, user <br className="sm:block hidden" />
            interfaces and web applications
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
