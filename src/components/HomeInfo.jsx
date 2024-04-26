import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import { motion, AnimatePresence } from "framer-motion";

const InfoBox = ({ text, link, btnText }) => {
  return (
    <div className="info-box">
      <p className="font-medium sm:text-xl text-center">{text}</p>
      <Link to={link} className="neo-brutalism-white neo-btn">
        {btnText}
        <img src={arrow} className="w-4 h-4 object-contain" />
      </Link>
    </div>
  );
};

const contentObject = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hello, I am
      <span className="font-semibold mx-2 text-white">Mikhail</span>
      👋
      <br />
      Full Stack Software Engineer based in Charlotte, NC
    </h1>
  ),
  2: (
    <InfoBox
      text="I'm a Full Stack Software Engineer with additional experience in 2d and 3d design, animation, motion graphics, video production and video editing. I also worked in Finance industry, which is my main area of education."
      link="/about"
      btnText={"Learn more"}
    />
  ),
  3: (
    <InfoBox
      text="See a portfolio of my personal projects and their source code."
      link="/projects"
      btnText={"Look at projects"}
    />
  ),
  4: (
    <InfoBox
      text="Looking for a developer? Have a job in mind? Don't be a stranger, contact me!"
      link="/contacts"
      btnText={"Connect"}
    />
  ),
};

const HomeInfo = ({ currentStage, isVisible }) => {
  return (
    <>
      {isVisible && (
        <>
          <div
            className={
              isVisible
                ? "animate-fadeInAndMoveUp"
                : "animate-fadeOutAndMoveDown"
            }
          >
            {isVisible ? contentObject[currentStage] : null}
          </div>
        </>
      )}
    </>
  );
  // animated version
  // return (
  //   <AnimatePresence>
  //     {isVisible && (
  //       <motion.div
  //         key={"home-info-popup"}
  //         initial={{ y: 100, opacity: 0 }}
  //         animate={{ y: 0, opacity: 1 }}
  //         transition={{ duration: 0.5 }}
  //         exit={{ opacity: 0 }}
  //       >
  //         {contentObject[currentStage]}
  //       </motion.div>
  //     )}
  //   </AnimatePresence>
  // );
};

export default HomeInfo;
