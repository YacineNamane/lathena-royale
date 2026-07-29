import { AnimatePresence, motion } from "framer-motion";
import { useLoading } from "../../context/LoadingContext";

import "./ArLoader.css";

function ArLoader() {
  const { isLoading } = useLoading();

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="ar-loader"
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.div
            className="ar-loader__panel"
            initial={{
              scaleY: 0,
            }}
            animate={{
              scaleY: 1,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          <motion.div
            className="ar-loader__line"
            initial={{
              scaleX: 0,
            }}
            animate={{
              scaleX: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ArLoader;
