import { useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  House,
  CakeSlice,
  Store,
  Mail,
  CalendarDays,
  Search,
  ChevronRight,
  X,
} from "lucide-react";

import LogoAR from "../../../assets/images/LogoAR.png";
import ownerPhoto from "../../../assets/images/CEO.jpg";
import navLinks from "../navLinks";

import "./MobileNavigation.css";

const navigationIcons = {
  Home: House,
  Créations: CakeSlice,
  About: Store,
  Contact: Mail,
  Réservation: CalendarDays,
};

function MobileNavigation() {
  const location = useLocation();

  const [isExpanded, setIsExpanded] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [localHour, setLocalHour] = useState(() => new Date().getHours());

  const isOwnerAvailable = localHour >= 9 && localHour < 20;

  const filteredLinks = useMemo(() => {
    const query = searchQuery.trim().toLocaleLowerCase("fr");

    if (!query) return navLinks;

    return navLinks.filter((link) =>
      link.label.toLocaleLowerCase("fr").includes(query),
    );
  }, [searchQuery]);

  useEffect(() => {
    setIsSearchOpen(false);
    setSearchQuery("");
  }, [location.pathname]);

  useEffect(() => {
    const updateHour = () => {
      setLocalHour(new Date().getHours());
    };

    updateHour();

    const intervalId = window.setInterval(updateHour, 60_000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (!isSearchOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsSearchOpen(false);
        setSearchQuery("");
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isSearchOpen]);

  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery("");
  };

  return (
    <motion.aside
      className="mobile-navigation"
      aria-label="Navigation mobile"
      initial={false}
      animate={{ width: isExpanded ? 180 : 68 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 32,
      }}
    >
      <button
        type="button"
        className="mobile-navigation__toggle"
        aria-label={
          isExpanded ? "Réduire la navigation" : "Développer la navigation"
        }
        aria-expanded={isExpanded}
        onClick={() => setIsExpanded((current) => !current)}
      >
        <ChevronRight size={15} className={isExpanded ? "is-rotated" : ""} />
      </button>

      <div className="mobile-navigation__brand">
        <img src={LogoAR} alt="L’Athéna Royale" />

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.span
              className="mobile-navigation__brand-name"
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -5 }}
              transition={{ duration: 0.18 }}
            >
              L’Athéna Royale
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      <div className="mobile-navigation__search">
        <button
          type="button"
          className="mobile-navigation__search-button"
          aria-label="Rechercher une page"
          aria-expanded={isSearchOpen}
          onClick={() => setIsSearchOpen((current) => !current)}
        >
          <Search size={19} strokeWidth={1.6} />
        </button>

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.span
              className="mobile-navigation__search-label"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Search
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      <span className="mobile-navigation__section-label">
        {isExpanded ? "MENU PRINCIPAL" : "MENU"}
      </span>

      <nav
        className="mobile-navigation__links"
        aria-label="Navigation principale"
      >
        {navLinks.map((link) => {
          const Icon = navigationIcons[link.label] ?? Store;

          return (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              aria-label={link.label}
              title={!isExpanded ? link.label : undefined}
              className={({ isActive }) =>
                ["mobile-navigation__link", isActive ? "is-active" : ""]
                  .filter(Boolean)
                  .join(" ")
              }
            >
              <Icon size={19} strokeWidth={1.6} />

              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.span
                    className="mobile-navigation__link-label"
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -5 }}
                    transition={{ duration: 0.15 }}
                  >
                    {link.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </NavLink>
          );
        })}
      </nav>

      <div className="mobile-navigation__bottom">
        <div className="mobile-navigation__profile">
          <div className="mobile-navigation__avatar">
            <img src={ownerPhoto} alt="Propriétaire de L’Athéna Royale" />

            <span
              className={`mobile-navigation__status ${
                isOwnerAvailable ? "is-online" : "is-offline"
              }`}
              role="img"
              aria-label={
                isOwnerAvailable
                  ? "Disponible de 9 h à 20 h"
                  : "Indisponible de 20 h à 9 h"
              }
            />
          </div>

          <AnimatePresence initial={false}>
            {isExpanded && (
              <motion.div
                className="mobile-navigation__profile-info"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <span>L’Athéna Royale</span>
                <small>PÂTISSERIE</small>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {isSearchOpen && (
          <motion.section
            className="mobile-navigation__search-panel"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            transition={{ duration: 0.18 }}
            aria-label="Recherche"
          >
            <div className="mobile-navigation__panel-header">
              <span>Recherche</span>

              <button
                type="button"
                aria-label="Fermer la recherche"
                onClick={closeSearch}
              >
                <X size={17} />
              </button>
            </div>

            <label className="mobile-navigation__input">
              <Search size={16} />

              <input
                type="search"
                placeholder="Rechercher une page..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                autoFocus
              />
            </label>

            <div className="mobile-navigation__results">
              {filteredLinks.length > 0 ? (
                filteredLinks.map((link) => {
                  const Icon = navigationIcons[link.label] ?? Store;

                  return (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      end={link.path === "/"}
                      onClick={closeSearch}
                      className={({ isActive }) =>
                        [
                          "mobile-navigation__result",
                          isActive ? "is-active" : "",
                        ]
                          .filter(Boolean)
                          .join(" ")
                      }
                    >
                      <Icon size={16} />
                      <span>{link.label}</span>
                      <ChevronRight size={15} />
                    </NavLink>
                  );
                })
              ) : (
                <p className="mobile-navigation__empty">Aucun résultat.</p>
              )}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </motion.aside>
  );
}

export default MobileNavigation;
