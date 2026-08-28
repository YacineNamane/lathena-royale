import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import reservationHoursImage from "../../assets/images/stores/BT3.jpg";

import "./Reservation.css";

const reservationOptions = [
  {
    number: "01",
    title: "Une table",
    description:
      "Pour un café, un déjeuner ou une douceur à savourer sur place.",
  },
  {
    number: "02",
    title: "Une célébration",
    description:
      "Un anniversaire ou une occasion particulière à partager à la Maison.",
  },
  {
    number: "03",
    title: "Un événement",
    description:
      "Pour vos rendez-vous professionnels ou réceptions en petit comité.",
  },
  {
    number: "04",
    title: "Une privatisation",
    description:
      "Un espace plus confidentiel pour donner une autre dimension à votre événement.",
  },
];

const openingHours = [
  { day: "Lundi", hours: "09:00 — 19:00" },
  { day: "Mardi", hours: "09:00 — 19:00" },
  { day: "Mercredi", hours: "09:00 — 19:00" },
  { day: "Jeudi", hours: "09:00 — 19:00" },
  { day: "Vendredi", hours: "09:00 — 20:00" },
  { day: "Samedi", hours: "09:00 — 20:00" },
  { day: "Dimanche", hours: "Fermé", closed: true },
];

function ReservationSection() {
  const handleReservation = () => {
    console.log("Reservation UI");
  };

  const hoursRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: hoursRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <main className="reservation-page">
      <section
        className="reservation-page__hero"
        aria-labelledby="reservation-title"
      >
        <div className="reservation-page__hero-inner">
          <h1 id="reservation-title">
            Votre table
            <br />
            votre moment.
          </h1>

          <p>
            Installez-vous à la Maison, autour d'un café, d'un déjeuner ou d'une
            création à partager.
          </p>

          <button
            type="button"
            className="reservation-page__hero-cta"
            onClick={handleReservation}
          >
            Réserver une table
          </button>
        </div>
      </section>

      <section
        className="reservation-page__occasions"
        aria-labelledby="reservation-occasions-title"
      >
        <div className="reservation-page__occasions-heading">
          <h2 id="reservation-occasions-title">Pour chaque occasion.</h2>
        </div>

        <div className="reservation-page__occasions-list">
          {reservationOptions.map((option) => (
            <article key={option.number} className="reservation-page__occasion">
              <span className="reservation-page__occasion-number">
                {option.number}
              </span>

              <div className="reservation-page__occasion-content">
                <h3>{option.title}</h3>

                <p>{option.description}</p>
              </div>

              <span
                className="reservation-page__occasion-arrow"
                aria-hidden="true"
              >
                ↗
              </span>
            </article>
          ))}
        </div>
      </section>

      <section
        ref={hoursRef}
        className="reservation-page__hours"
        aria-labelledby="reservation-hours-title"
      >
        <motion.figure
          ref={hoursRef}
          className="reservation-page__hours-media"
          style={{ y: imageY }}
        >
          <img
            src={reservationHoursImage}
            alt="Tableau des horaires à l'entrée de L'Athena Royale"
          />
        </motion.figure>

        <div className="reservation-page__hours-content">
          <div className="reservation-page__hours-heading">
            <h2 id="reservation-hours-title">Horaires</h2>
          </div>

          <div className="reservation-page__hours-list">
            {openingHours.map((item) => (
              <div
                key={item.day}
                className={`reservation-page__hours-row ${
                  item.closed ? "is-closed" : ""
                }`}
              >
                <div className="reservation-page__hours-day">
                  <span
                    className="reservation-page__hours-status"
                    aria-hidden="true"
                  />

                  <span>{item.day}</span>
                </div>

                <strong>{item.hours}</strong>
              </div>
            ))}
          </div>

          <p className="reservation-page__hours-note">
            Les horaires peuvent varier lors des jours fériés et événements
            exceptionnels.
          </p>
        </div>
      </section>
    </main>
  );
}

export default ReservationSection;
