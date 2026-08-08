import { useOutletContext } from "react-router-dom";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

import StoresShowcase from "../../sections/StoresShowcase/StoresShowcase";
import Hero from "../../sections/Hero/Hero";
import CreationsShowcase from "../../sections/CreationsShowcase/CreationsShowcase";

import "./Home.css";

function Home() {
  const { heroRef } = useOutletContext();

  const curtainRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: curtainRef,
    offset: ["start bottom", "start top"],
  });

  const rawY = useTransform(scrollYProgress, [0.05, 0.85], ["100%", "0%"]);

  const y = useSpring(rawY, {
    stiffness: 25,
    damping: 18,
    mass: 1.4,
  });

  return (
    <>
      <section ref={heroRef} className="hero-stage">
        <div className="hero-sticky">
          <Hero />
        </div>

        <motion.div
          ref={curtainRef}
          className="creations-curtain"
          style={{
            y,
          }}
        >
          <CreationsShowcase />
          <StoresShowcase />
        </motion.div>
      </section>
    </>
  );
}

export default Home;
