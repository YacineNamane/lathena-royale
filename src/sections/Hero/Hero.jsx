import { useEffect, useRef, useState } from "react";

import atmosphereWebm from "../../assets/videos/hero/atmosphere.webm";
import atmosphereMp4 from "../../assets/videos/hero/atmosphere.mp4";

import craftWebm from "../../assets/videos/hero/craft.webm";
import craftMp4 from "../../assets/videos/hero/craft.mp4";

import creationWebm from "../../assets/videos/hero/creation.webm";
import creationMp4 from "../../assets/videos/hero/creation.mp4";

import "./Hero.css";

const heroVideos = [
  {
    id: "atmosphere",
    webm: atmosphereWebm,
    mp4: atmosphereMp4,
  },
  {
    id: "craft",
    webm: craftWebm,
    mp4: craftMp4,
  },
  {
    id: "creation",
    webm: creationWebm,
    mp4: creationMp4,
  },
];

function Hero() {
  const [activeVideo, setActiveVideo] = useState(0);

  const videoRefs = useRef([]);

 
  useEffect(() => {
    const currentVideo = videoRefs.current[activeVideo];

    if (!currentVideo) return;

    currentVideo.currentTime = 0;

    currentVideo.play().catch(() => {});
  }, [activeVideo]);

 
  const handleVideoEnd = () => {
    setActiveVideo((current) =>
      current === heroVideos.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__media" aria-hidden="true">
        {heroVideos.map((video, index) => (
          <video
            key={video.id}
            ref={(element) => {
              videoRefs.current[index] = element;
            }}
            className={`
              hero__video
              ${index === activeVideo ? "is-active" : ""}
              
            `}
            muted
            playsInline
            preload={index === activeVideo ? "auto" : "metadata"}
            onEnded={index === activeVideo ? handleVideoEnd : undefined}
          >
            <source src={video.webm} type="video/webm" />

            <source src={video.mp4} type="video/mp4" />
          </video>
        ))}
      </div>

      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__content">
        <h1 id="hero-title">L'Athena Royale</h1>

        <p>Maison de haute pâtisserie française</p>
      </div>
    </section>
  );
}

export default Hero;
