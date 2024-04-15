import { motion, AnimatePresence } from "framer-motion";
import draghandIcon from "../assets/icons/drag.png";

const Hint = ({ isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key={"drag-icon-animate"}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="flex flex-col items-center justify-center border-solid border-red-600">
            <div className="filter brightness-0 invert transition-transform duration-100 ease-in-out animate-left-right top-10 w-[20%] ">
              <img src={draghandIcon} />
            </div>
            {/* <p className="text-slate-300">Click & drag to explore</p> */}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Hint;
