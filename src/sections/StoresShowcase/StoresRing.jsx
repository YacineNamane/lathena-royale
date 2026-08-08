import { motion, useTransform } from "framer-motion";

import StoreCard from "./StoreCard";

const POSITIONS = [-35, -12, 12, 35];

function StoresRing({ progress, stores }) {
  const rotateY = useTransform(progress, [0, 1], [-35, 35]);

  return (
    <motion.div
      className="stores-ring"
      style={{
        rotateY,
      }}
    >
      {stores.map((store, index) => (
        <StoreCard key={store.id} store={store} angle={POSITIONS[index]} />
      ))}
    </motion.div>
  );
}

export default StoresRing;
