import { motion, useReducedMotion } from "framer-motion";

function StorytellingChapter({ chapter, index, active, onClick }) {
  const reducedMotion = useReducedMotion();

  return (
    <button
      type="button"
      className={`storytelling-chapter ${
        active ? "storytelling-chapter--active" : ""
      }`}
      aria-expanded={active}
      aria-controls={`storytelling-panel-${chapter.id}`}
      onClick={onClick}
    >
      <span className="storytelling-chapter__number">{chapter.number}</span>

      <span className="storytelling-chapter__content">
        <span className="storytelling-chapter__title">{chapter.title}</span>

        <motion.span
          id={`storytelling-panel-${chapter.id}`}
          className="storytelling-chapter__text"
          initial={false}
          animate={
            active
              ? {
                  opacity: 1,
                  height: "auto",
                  y: 0,
                }
              : {
                  opacity: 0,
                  height: 0,
                  y: reducedMotion ? 0 : 10,
                }
          }
          transition={{
            duration: reducedMotion ? 0 : 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {chapter.text}
        </motion.span>
      </span>
    </button>
  );
}

export default StorytellingChapter;
