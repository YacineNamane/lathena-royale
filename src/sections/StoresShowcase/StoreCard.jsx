function StoreCard({ store, angle }) {
  return (
    <article
      className="store-card"
      style={{
        "--angle": `${angle}deg`,
      }}
    >
      <div className="store-card__viewport">
        <img src={store.image} alt={store.title} />
      </div>

      <div className="store-card__info">
        <h3>{store.title}</h3>

        <p>{store.description}</p>
      </div>
    </article>
  );
}

export default StoreCard;
