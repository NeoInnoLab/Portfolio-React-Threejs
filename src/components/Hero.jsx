import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} mx-auto max-w-7xl absolute inset-0 top-[120px] max-w-7xl max-auto flex flex-row items-start gap-5`}
      >
        <div className="flex justify-between items-center mt-5 w-8">
          <div className="w-2 sm:h-80 h-40 violet-gradient"></div>
          <div className="w-2 sm:h-80 h-40 cyan-gradient"></div>
          <div className="w-2 sm:h-80 h-40 pink-gradient"></div>
        </div>
        <div className={`font-['Poppins']`}>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className={`text-[#8ae9f0]`}>Shanda</span>
          </h1>
          <p className={`${styles.heroSubText} text-white`}>
            I develop <span className={`text-[#8ae9f0]`}>Front</span> End,{" "}
            <span className={`text-[#8ae9f0]`}>Full</span> Stack
            <br className="sm:block hidden"></br> for{" "}
            <span className={`text-[#8ae9f0]`}>web</span> applications.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-8 bottom-[48px] w-full flex justify-center items-center">
        <a className="flex align-center w-[32px] h-[50px]" href="#about">
          <div
            className="w-[32px] h-[50px] rounded-3xl 
            border-4 border-pink flex justify-center items-start p-2"
          >
            <motion.dev
              animate={{
                y: [0, 14, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-3 bg-[#e1aaf0] rounded-full mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
