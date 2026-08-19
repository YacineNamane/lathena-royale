import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { creations } from "../../data/creations";
import { useLazyImage } from "../../hooks/useLazyImage";
import "./CreationsShowcase.css";

function FlashTitle() {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.6,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [started]);

  const letters = "Nos Créations".split("");

  return (
    <h2
      ref={ref}
      className={`creations-showcase__title ${started ? "is-flashing" : ""}`}
      aria-label="Nos Créations"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={`${letter}-${index}`}
          className="creations-showcase__letter"
          initial={{ opacity: 0 }}
          animate={
            started
              ? {
                  opacity: [0, 1, 0.15, 1, 0, 1],
                }
              : {
                  opacity: 0,
                }
          }
          transition={
            started
              ? {
                  duration: 0.45 + Math.random() * 0.35,
                  delay: Math.random() * 2.3,
                  ease: "linear",
                }
              : {}
          }
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </h2>
  );
}

export function CreationCard({ creation, index = 0 }) {
  const { ref, visible } = useLazyImage();

  return (
    <motion.article
      ref={ref}
      className="creation-card"
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={
        visible
          ? {
              opacity: 1,
              y: 0,
            }
          : {
              opacity: 0,
              y: 40,
            }
      }
      transition={{
        duration: 1,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {visible && (
        <motion.img
          src={creation.coverImage}
          alt={creation.name}
          initial={{
            opacity: 0,
            scale: 1.08,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.2,
            delay: index * 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      )}

      <div className="creation-card__info">
        <h3>{creation.name}</h3>
        <span>{creation.season}</span>
      </div>
    </motion.article>
  );
}

function CreationsShowcase() {
  const firstRow = creations.slice(0, 2);
  const secondRow = creations.slice(2, 5);
  const thirdRow = creations.slice(5, 7);

  return (
    <section className="creations-showcase">
      <FlashTitle />

      <div className="creations-showcase__row creations-showcase__row--large">
        {firstRow.map((creation, index) => (
          <CreationCard key={creation.id} creation={creation} index={index} />
        ))}
      </div>

      <div className="creations-showcase__row creations-showcase__row--medium">
        {secondRow.map((creation, index) => (
          <CreationCard key={creation.id} creation={creation} index={index} />
        ))}
      </div>

      <div className="creations-showcase__row creations-showcase__row--large">
        {thirdRow.map((creation, index) => (
          <CreationCard key={creation.id} creation={creation} index={index} />
        ))}
      </div>
    </section>
  );
}

export default CreationsShowcase;
