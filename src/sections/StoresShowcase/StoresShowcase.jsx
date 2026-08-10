import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

import StoresRing from "./StoresRing";
import { stores } from "../../data/stores";

import "./StoresShowcase.css";

function StoresShowcase() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    mass: 0.4,
  });

  return (
    <section ref={sectionRef} className="stores-showcase">
      <div className="stores-showcase__sticky">
        <header className="stores-showcase__title">
          <h2>Nos Maisons</h2>
        </header>

        <div className="stores-showcase__scene">
          <StoresRing progress={progress} stores={stores} />
        </div>
      </div>
    </section>
  );
}

export default StoresShowcase;
