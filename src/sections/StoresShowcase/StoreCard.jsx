import { motion, useTransform } from "framer-motion";

function StoreCard({ store, angle, progress }) {
  const imageX = useTransform(progress, [0, 0.5, 1], ["-14%", "0%", "14%"]);

  const imageY = useTransform(progress, [0, 0.5, 1], ["-6%", "0%", "6%"]);

  return (
    <article
      className="store-card"
      style={{
        "--angle": `${angle}deg`,
      }}
    >
      <div className="store-card__viewport">
        <motion.img
          src={store.image}
          alt={store.city}
          style={{
            x: imageX,
            y: imageY,
          }}
        />
      </div>

      <div className="store-card__locations">
        <span className="store-card__city">{store.city}</span>

        <span className="store-card__address">{store.address}</span>
      </div>
    </article>
  );
}

export default StoreCard;
