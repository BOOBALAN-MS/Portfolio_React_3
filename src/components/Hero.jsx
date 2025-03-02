import { motion } from "framer-motion";
import { styles } from "../styles";
import { Image } from "../assets";
import { cv } from "../assets";
import { ComputersCanvas } from "./canvas";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Boobalan.Ms</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A{" "}
            <span className={`${styles.heroSubText}, text-[#915eff]`}>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Front End Developer",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Back End Developer",
                  1000,
                  "Full Stack Developer",
                  1000,
                  "React Developer",
                  1000,
                  "Angular Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                // style={{ fontSize: '2em', display: 'inline-block' }}
                repeat={Infinity}
              />{" "}
            </span>{" "}
            <br />
            with <span className="text-[#915eff]">3</span>+ <span className="text-[#915eff]">years</span>   of hands-on experience in creating dynamic and
            innovative web applications. My passion for technology is coupled
            with a strong foundation in both front-end and back-end development.
          </p>
          {/* className="flex justify-around items-center" */}
          <div className={`xl:mt-5 flex xl:flex-row flex-col-reverse gap-10 justify-around items-center`}>
            <div>
              <a
                href={cv} // Path to your CV in the public folder
                download="Boobalan_CV.pdf" // Suggested file name for download
                className="bg-[#915EFF] hover:bg-[#7a4ce9] text-white font-medium py-3 px-6 rounded-lg transition duration-300"
              >
                Download CV
              </a>
            </div>
            <div>
             <img src={Image} alt="Coding" width={300} style={{color:"red"}}/>
            </div>
          </div>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      {/* <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
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
      </div> */}
    </section>
  );
};

export default Hero;
