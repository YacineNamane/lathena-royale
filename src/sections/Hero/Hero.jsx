import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useLoading } from "../../context/LoadingContext";

import atmosphereWebm from "../../assets/videos/hero/atmosphere.webm";
import atmosphereMp4 from "../../assets/videos/hero/atmosphere.mp4";

import craftWebm from "../../assets/videos/hero/craft.webm";
import craftMp4 from "../../assets/videos/hero/craft.mp4";

import creationWebm from "../../assets/videos/hero/creation.webm";
import creationMp4 from "../../assets/videos/hero/creation.mp4";

import "./Hero.css";

const heroScenes = [
  {
    id: "atmosphere",
    title: "L'Athena Royale",
    subtitle: "Maison de haute pâtisserie française.",
    cta: {
      label: "Découvrir les créations",
      href: "/creations",
    },
    video: {
      webm: atmosphereWebm,
      mp4: atmosphereMp4,
    },
  },

  {
    id: "craft",
    title: "Le Savoir-Faire",
    subtitle: "Chaque création naît d'un geste précis.",
    cta: {
      label: "Notre héritage",
      href: "/about",
    },
    video: {
      webm: craftWebm,
      mp4: craftMp4,
    },
  },

  {
    id: "creation",
    title: "Nos Créations",
    subtitle: "Inspirées par les saisons et façonnées avec patience.",
    cta: {
      label: "Explorer la collection",
      href: "/creations",
    },
    video: {
      webm: creationWebm,
      mp4: creationMp4,
    },
  },
];

function LuxuryTitle({ children }) {
  return (
    <h1 className="hero__title">
      {children.split("").map((letter, index) => (
        <motion.span
          key={`${letter}-${index}`}
          className="hero__title-letter"
          initial={{
            y: "100%",
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.9,
            delay: index * 0.035,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </h1>
  );
}

function LuxurySubtitle({ children }) {
  return (
    <>
      {children.split(" ").map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="hero__subtitle-word"
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: index * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </>
  );
}

function Hero() {
  const { finishLoading } = useLoading();

  const videoRef = useRef(null);

  const [activeScene, setActiveScene] = useState(0);
  const [isChangingVideo, setIsChangingVideo] = useState(false);

  const scene = heroScenes[activeScene];

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.src = scene.video.mp4;
    video.load();

    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(error);
        }
      }
    };

    video.addEventListener("loadeddata", playVideo, { once: true });

    return () => {
      video.removeEventListener("loadeddata", playVideo);
    };
  }, [activeScene]);

  const handleVideoEnd = async () => {
    if (isChangingVideo) return;

    setIsChangingVideo(true);

    // temps du fade out CSS
    await new Promise((resolve) => setTimeout(resolve, 700));

    setActiveScene((current) =>
      current === heroScenes.length - 1 ? 0 : current + 1,
    );

    // laisse la nouvelle vidéo charger
    await new Promise((resolve) => setTimeout(resolve, 100));

    // fade in
    setIsChangingVideo(false);
  };

  return (
    <section className="hero">
      <div className="hero__media">
        <video
          ref={videoRef}
          className={`hero__video ${
            isChangingVideo ? "is-changing" : "is-active"
          }`}
          muted
          playsInline
          preload="auto"
          onEnded={handleVideoEnd}
          onLoadedData={() => {
            if (activeScene === 0) {
              finishLoading();
            }
          }}
        />
      </div>

      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__content">
        <AnimatePresence mode="wait">
          <motion.div
            key={scene.id}
            className="hero__copy"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,

              transition: {
                duration: 0.7,
              },
            }}
          >
            <LuxuryTitle>{scene.title}</LuxuryTitle>

            <motion.p className="hero__subtitle">
              <LuxurySubtitle>{scene.subtitle}</LuxurySubtitle>
            </motion.p>
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="hero__cta-wrapper"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.4,
            delay: 1.4,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Link className="hero__cta" to={scene.cta.href}>
            <span>{scene.cta.label}</span>
          </Link>
        </motion.div>
      </div>

      <div className="hero__progress">
        {heroScenes.map((item, index) => (
          <span
            key={item.id}
            className={index === activeScene ? "is-active" : ""}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
