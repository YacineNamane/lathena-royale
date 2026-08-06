import { useOutletContext } from "react-router-dom";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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

  const y = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

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
        </motion.div>
      </section>
    </>
  );
}

export default Home;
