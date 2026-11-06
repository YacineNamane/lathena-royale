import { useMemo, useState } from "react";
import { creations } from "../../data/creations";
import { CreationCard } from "../../sections/CreationsShowcase/CreationsShowcase";
import CreationModal from "../../sections/CreationsShowcase/CreationModal";
import { AnimatePresence } from "framer-motion";
import "./NosCreations.css";

const ROW_PATTERN = [2, 3, 2];

function FilterGroup({ title, options, active, onChange }) {
  return (
    <div className="creations-filters__group">
      <span className="creations-filters__label">{title}</span>

      <div className="creations-filters__options">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            className={`creations-filters__option ${
              active === option ? "is-active" : ""
            }`}
            onClick={() => onChange(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

function NosCreations() {
  const [activeCategory, setActiveCategory] = useState("Toutes");
  const [activeSeason, setActiveSeason] = useState("Toutes");
  const [selectedCreation, setSelectedCreation] = useState(null);

  const categories = [
    "Toutes",
    "Signature",
    "Entremets",
    "Création saisonnière",
    "Chocolat",
    "Éphémère",
    "Maison",
    "Nouveauté",
  ];

  const seasons = [
    "Toutes",
    "Collection permanente",
    "Printemps",
    "Automne",
    "Hiver",
    "Été",
    "Édition limitée",
    "2026",
  ];

  const filteredCreations = useMemo(() => {
    return creations.filter((creation) => {
      const matchesCategory =
        activeCategory === "Toutes" || creation.category === activeCategory;

      const matchesSeason =
        activeSeason === "Toutes" || creation.season === activeSeason;

      return matchesCategory && matchesSeason;
    });
  }, [activeCategory, activeSeason]);

  const rows = useMemo(() => {
    const result = [];
    let currentIndex = 0;
    let patternIndex = 0;

    while (currentIndex < filteredCreations.length) {
      const rowSize = ROW_PATTERN[patternIndex % ROW_PATTERN.length];

      result.push({
        type: rowSize === 3 ? "medium" : "large",
        items: filteredCreations.slice(currentIndex, currentIndex + rowSize),
      });

      currentIndex += rowSize;
      patternIndex++;
    }

    return result;
  }, [filteredCreations]);

  const resetFilters = () => {
    setActiveCategory("Toutes");
    setActiveSeason("Toutes");
  };

  const toggleCategory = (option) => {
    setActiveCategory((current) => (current === option ? "Toutes" : option));
  };

  const toggleSeason = (option) => {
    setActiveSeason((current) => (current === option ? "Toutes" : option));
  };

  return (
    <section className="creations-page">
      <header className="creations-page__header">
        <div className="creations-page__heading">
          <span className="creations-page__eyebrow">L'Athéna Royale</span>

          <h1>Nos créations</h1>

          <p>
            Découvrez nos créations pâtissières, imaginées avec passion et
            façonnées avec exigence.
          </p>
        </div>

        <div className="creations-page__count">
          {filteredCreations.length} créations
        </div>
      </header>

      <div className="creations-filters">
        <FilterGroup
          title="Collection"
          options={categories}
          active={activeCategory}
          onChange={toggleCategory}
        />

        <FilterGroup
          title="Saison"
          options={seasons}
          active={activeSeason}
          onChange={toggleSeason}
        />

        <button
          type="button"
          className="creations-filters__reset"
          onClick={resetFilters}
        >
          Réinitialiser les filtres
        </button>
      </div>

      {filteredCreations.length > 0 ? (
        <div className="nos-creations__grid">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`creations-showcase__row creations-showcase__row--${row.type}`}
            >
              {row.items.map((creation, index) => (
                <CreationCard
                  key={creation.id}
                  creation={creation}
                  index={index}
                  onSelect={setSelectedCreation}
                />
              ))}
            </div>
          ))}
        </div>
      ) : (
        <div className="creations-page__empty">
          <p>Aucune création ne correspond à votre recherche.</p>

          <button type="button" onClick={resetFilters}>
            Voir toutes les créations
          </button>
        </div>
      )}

      <AnimatePresence>
        {selectedCreation && (
          <CreationModal
            creation={selectedCreation}
            onClose={() => setSelectedCreation(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

export default NosCreations;
