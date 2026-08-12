import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";

import StorytellingChapter from "./StorytellingChapter";
import { storytellingChapters } from "../../data/storytelling";

import "./StorytellingShowcase.css";

function StorytellingShowcase() {
  const sectionRef = useRef(null);
  const reducedMotion = useReducedMotion();

  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const nextIndex = Math.min(
      storytellingChapters.length - 1,
      Math.floor(latest * storytellingChapters.length),
    );

    setActiveIndex(nextIndex);
  });

  return (
    <section
      ref={sectionRef}
      className="storytelling"
      aria-labelledby="storytelling-title"
    >
      <div className="storytelling__sticky">
        <header className="storytelling__header">
          <span className="storytelling__eyebrow">L'Athena Royale</span>

          <h2 id="storytelling-title">L'art de la présence</h2>
        </header>

        <div className="storytelling__layout">
          <div className="storytelling__chapters">
            {storytellingChapters.map((chapter, index) => (
              <StorytellingChapter
                key={chapter.id}
                chapter={chapter}
                index={index}
                active={index === activeIndex}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>

          <div className="storytelling__visual">
            {storytellingChapters.map((chapter, index) => (
              <motion.figure
                key={chapter.id}
                className="storytelling__image"
                initial={false}
                animate={{
                  opacity: index === activeIndex ? 1 : 0,
                }}
                transition={{
                  duration: reducedMotion ? 0 : 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                aria-hidden={index !== activeIndex}
              >
                <img
                  src={chapter.image}
                  alt={chapter.imageAlt}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
              </motion.figure>
            ))}
          </div>
        </div>

        <div className="storytelling__progress" aria-hidden="true">
          <span>{String(activeIndex + 1).padStart(2, "0")}</span>

          <div className="storytelling__progress-track">
            <motion.div
              className="storytelling__progress-bar"
              style={{
                scaleX: scrollYProgress,
              }}
            />
          </div>

          <span>{String(storytellingChapters.length).padStart(2, "0")}</span>
        </div>
      </div>
    </section>
  );
}

export default StorytellingShowcase;
