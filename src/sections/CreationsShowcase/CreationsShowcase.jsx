import { motion } from "framer-motion";
import { creations } from "../../data/creations";
import { useLazyImage } from "../../hooks/useLazyImage";
import "./CreationsShowcase.css";

function CreationCard({ creation, index = 0 }) {
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
      <h2 className="creations-showcase__title">Nos Créations</h2>

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
