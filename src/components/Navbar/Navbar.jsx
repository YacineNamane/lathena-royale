import { Link } from "react-router-dom";
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";

import LogoARB from "../../assets/images/LogoARB.png";
import LogoAR from "../../assets/images/LogoAR.png";

import navLinks from "./navLinks";
import "./Navbar.css";

function LogoLetter({ letter, index, progress }) {
  const start = 0.15 + index * 0.025;

  const opacity = useTransform(progress, [start, start + 0.15], [1, 0]);

  const y = useTransform(progress, [start, start + 0.15], [0, 35]);

  return (
    <motion.span
      className="navbar__logo-letter"
      style={{
        opacity,
        y,
      }}
    >
      {letter === " " ? "\u00A0" : letter}
    </motion.span>
  );
}

function Navbar({ heroProgress }) {
  const fallback = useMotionValue(0);

  const source = heroProgress ?? fallback;

  const progress = useSpring(source, {
    stiffness: 70,
    damping: 30,
    mass: 0.8,
  });

  const blackLogoOpacity = useTransform(progress, [0.45, 0.6], [1, 0]);

  const goldLogoOpacity = useTransform(progress, [0.45, 0.6], [0, 1]);

  return (
    <motion.header className="navbar">
      <Link to="/" className="navbar__brand">
        <div className="navbar__logo-wrapper">
          <motion.img
            src={LogoARB}
            alt="Logo Athena Royale noir"
            className="navbar__logo-black"
            style={{
              opacity: blackLogoOpacity,
            }}
          />

          <motion.img
            src={LogoAR}
            alt="Logo Athena Royale or"
            className="navbar__logo-gold"
            style={{
              opacity: goldLogoOpacity,
            }}
          />
        </div>

        <span className="navbar__logo-text">
          {"L'Athena Royale".split("").map((letter, index) => (
            <LogoLetter
              key={`${letter}-${index}`}
              letter={letter}
              index={index}
              progress={progress}
            />
          ))}
        </span>
      </Link>

      <nav>
        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}

export default Navbar;
