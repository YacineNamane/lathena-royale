import { Link } from "react-router-dom";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import LogoARB from "../../assets/images/LogoARB.png";
import LogoAR from "../../assets/images/LogoAR.png";
import navLinks from "./navLinks";

import "./Navbar.css";

function LogoLetter({ letter, index }) {
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    mass: 0.5,
  });

  const start = 0.15 + index * 0.025;

  const opacity = useTransform(smoothProgress, [start, start + 0.18], [1, 0]);

  const y = useTransform(smoothProgress, [start, start + 0.18], [0, 40]);

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

function Navbar() {
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    mass: 0.5,
  });

  const blackLogoOpacity = useTransform(smoothProgress, [0, 0.65], [1, 0]);

  const goldLogoOpacity = useTransform(smoothProgress, [0.45, 1], [0, 1]);

  return (
    <motion.header className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__brand">
          <span className="navbar__logo-icon">
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
          </span>

          <span className="navbar__logo-text">
            {"L'Athena Royale".split("").map((letter, index) => (
              <LogoLetter key={index} letter={letter} index={index} />
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
      </div>
    </motion.header>
  );
}

export default Navbar;
