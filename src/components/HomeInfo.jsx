import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import { motion } from "framer-motion";

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

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hello, I am
      <span className="font-semibold mx-2 text-white">Mikhail</span>
      👋
      <br />A Software Engineer based in Charlotte, NC
    </h1>
  ),
  2: (
    <InfoBox
      text="Full Stack Mid-level Software engineer with additional experience in Finance, and also Video, Design and Animation"
      link="/about"
      btnText={"Learn more"}
    />
  ),
  3: (
    <InfoBox
      text="See a portfolio of my projects at my github page"
      link="/projects"
      btnText={"Look at projects"}
    />
  ),
  4: (
    <InfoBox
      text="Looking for a developer? Need a project done? Don't be a stranger, contact me!"
      link="/contacts"
      btnText={"Connect"}
    />
  ),
  5: <h1>1</h1>,
};

const HomeInfo = ({ currentStage }) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }} // Initial state
      animate={{ y: 0, opacity: 1 }} // Animation state
      transition={{ duration: 0.5 }} // Transition duration
    >
      {renderContent[currentStage] || null}
    </motion.div>
  );
};

export default HomeInfo;
