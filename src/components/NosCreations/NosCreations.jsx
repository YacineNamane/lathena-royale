import { useMemo, useState } from "react";
import { creations } from "../../data/creations";
import { CreationCard } from "../../sections/CreationsShowcase/CreationsShowcase";
import "./NosCreations.css";

function FilterGroup({ label, options, value, onChange }) {
  return (
    <div className="creations-filters__group">
      <span className="creations-filters__label">{label}</span>

      <div className="creations-filters__options">
        {options.map((option) => {
          const active = value === option.value;

          return (
            <button
              key={option.value}
              type="button"
              className={`creations-filters__option ${
                active ? "is-active" : ""
              }`}
              onClick={() => onChange(option.value)}
              aria-pressed={active}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function NosCreations() {
  const [category, setCategory] = useState("all");
  const [season, setSeason] = useState("all");

  const categoryOptions = useMemo(() => {
    const categories = [
      ...new Set(creations.map((creation) => creation.category)),
    ];

    return [
      { value: "all", label: "Toutes" },
      ...categories.map((category) => ({
        value: category,
        label: category,
      })),
    ];
  }, []);

  const seasonOptions = useMemo(() => {
    const seasons = [...new Set(creations.map((creation) => creation.season))];

    return [
      { value: "all", label: "Toutes" },
      ...seasons.map((season) => ({
        value: season,
        label: season,
      })),
    ];
  }, []);

  const filteredCreations = useMemo(() => {
    return creations.filter((creation) => {
      const matchesCategory =
        category === "all" || creation.category === category;

      const matchesSeason = season === "all" || creation.season === season;

      return matchesCategory && matchesSeason;
    });
  }, [category, season]);

  const resetFilters = () => {
    setCategory("all");
    setSeason("all");
  };

  const hasFilters = category !== "all" || season !== "all";

  const firstRow = filteredCreations.slice(0, 2);
  const secondRow = filteredCreations.slice(2, 5);
  const thirdRow = filteredCreations.slice(5, 7);

  return (
    <main className="creations-page">
      <header className="creations-page__header">
        <div className="creations-page__heading">
          <h1>Nos créations</h1>

          <p>
            Des créations pensées comme des pièces uniques, entre précision,
            matière et émotion.
          </p>
        </div>

        <span className="creations-page__count">
          {filteredCreations.length.toString().padStart(2, "0")} créations
        </span>
      </header>

      <section className="creations-filters" aria-label="Filtrer les créations">
        <FilterGroup
          label="Collection"
          options={categoryOptions}
          value={category}
          onChange={setCategory}
        />

        <FilterGroup
          label="Saison"
          options={seasonOptions}
          value={season}
          onChange={setSeason}
        />

        {hasFilters && (
          <button
            type="button"
            className="creations-filters__reset"
            onClick={resetFilters}
          >
            Réinitialiser
          </button>
        )}
      </section>

      <section
        className="creations-showcase creations-page__results"
        aria-live="polite"
      >
        {filteredCreations.length > 0 ? (
          <>
            {firstRow.length > 0 && (
              <div className="creations-showcase__row creations-showcase__row--large">
                {firstRow.map((creation, index) => (
                  <CreationCard
                    key={creation.id}
                    creation={creation}
                    index={index}
                  />
                ))}
              </div>
            )}

            {secondRow.length > 0 && (
              <div className="creations-showcase__row creations-showcase__row--medium">
                {secondRow.map((creation, index) => (
                  <CreationCard
                    key={creation.id}
                    creation={creation}
                    index={index + 2}
                  />
                ))}
              </div>
            )}

            {thirdRow.length > 0 && (
              <div className="creations-showcase__row creations-showcase__row--large">
                {thirdRow.map((creation, index) => (
                  <CreationCard
                    key={creation.id}
                    creation={creation}
                    index={index + 5}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="creations-page__empty">
            <p>Aucune création ne correspond à votre sélection.</p>

            <button type="button" onClick={resetFilters}>
              Voir toutes les créations
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default NosCreations;
