import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import reservationImage from "../../assets/images/Reservation.jpg";
import "./ReservationHighlight.css";

function ReservationHighlight() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-25%", "25%"]);

  return (
    <section
      ref={sectionRef}
      className="reservation-highlight"
      aria-labelledby="reservation-highlight-title"
    >
      <motion.div
        className="reservation-highlight__background"
        style={{
          y: imageY,
          backgroundImage: `url(${reservationImage})`,
        }}
        aria-hidden="true"
      />

      <div className="reservation-highlight__overlay" />

      <div className="reservation-highlight__content">
        <span className="reservation-highlight__eyebrow">Reservation</span>

        <h2 id="reservation-highlight-title">
          Une table
          <br />
          vous attend.
        </h2>

        <p>
          Pour un déjeuner, un dîner ou simplement le plaisir d'un moment à
          part, découvrez notre maison et réservez votre table.
        </p>

        <a href="/reservation" className="reservation-highlight__cta">
          <span>Réserver une table</span>
        </a>
      </div>
    </section>
  );
}

export default ReservationHighlight;
