import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

import AboutImage from "./AboutImage";
import { aboutPageData } from "./about.data";
import "./AboutUs.css";

function Reveal({ children, className = "", delay = 0 }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 1.1,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

function AboutButton({ button, light = false }) {
  if (!button) return null;

  const className = `about-button${light ? " about-button--light" : ""}`;

  if (button.href.startsWith("#")) {
    return (
      <a className={className} href={button.href}>
        {button.label}
      </a>
    );
  }

  return (
    <Link className={className} to={button.href}>
      {button.label}
    </Link>
  );
}

function HeroSection({ section, theme, imagePosition }) {
  return (
    <section
      className={`about-hero about-hero--${theme} about-hero--image-${imagePosition}`}
      style={{ "--section-height": section.height }}
    >
      <div className="about-hero__grid">
        <Reveal className="about-hero__content">
          <span className="about-eyebrow">{section.eyebrow}</span>

          <h1>
            {section.title}
            <span>{section.titleHighlight}</span>
          </h1>

          <p>{section.description}</p>

          <AboutButton button={section.button} light={theme === "light"} />
        </Reveal>

        <Reveal className="about-hero__media" delay={0.2}>
          <AboutImage
            src={section.image.src}
            alt={section.image.alt}
            priority
          />
        </Reveal>
      </div>
    </section>
  );
}

function ContentImageSection({ section, theme, imagePosition }) {
  return (
    <section
      id={section.id}
      className={`about-section about-section--${theme} about-section--image-${imagePosition}`}
      style={{ "--section-height": section.height }}
    >
      <div className="about-section__grid">
        <Reveal className="about-section__media">
          <AboutImage src={section.image.src} alt={section.image.alt} />
        </Reveal>

        <Reveal className="about-section__content" delay={0.15}>
          <span className="about-eyebrow">{section.eyebrow}</span>

          <h2>{section.title}</h2>

          <p>{section.text}</p>

          <AboutButton button={section.button} light={theme === "light"} />
        </Reveal>
      </div>
    </section>
  );
}

function ConclusionSection({ section, theme }) {
  return (
    <section
      className={`about-conclusion about-conclusion--${theme}`}
      style={{ "--section-height": section.height }}
    >
      <Reveal className="about-conclusion__content">
        <span className="about-eyebrow">{section.eyebrow}</span>

        <h2>{section.title}</h2>

        <p>{section.text}</p>

        <AboutButton button={section.button} light={theme === "light"} />
      </Reveal>
    </section>
  );
}

function AboutSection({ section, index }) {
  const isDark = index % 2 === 0;

  const theme = isDark ? "dark" : "light";
  const imagePosition = isDark ? "right" : "left";

  switch (section.type) {
    case "hero":
      return (
        <HeroSection
          section={section}
          theme={theme}
          imagePosition={imagePosition}
        />
      );

    case "content-image":
      return (
        <ContentImageSection
          section={section}
          theme={theme}
          imagePosition={imagePosition}
        />
      );

    case "conclusion":
      return <ConclusionSection section={section} theme={theme} />;

    default:
      return null;
  }
}

export default function AboutUs() {
  return (
    <main className="about-page">
      {aboutPageData.sections.map((section, index) => (
        <AboutSection key={section.id} section={section} index={index} />
      ))}
    </main>
  );
}
