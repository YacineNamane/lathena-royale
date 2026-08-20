import "./Newsletter.css";

function Newsletter() {
  return (
    <section className="newsletter" aria-labelledby="newsletter-title">
      <div className="newsletter__content">
        <span className="newsletter__eyebrow">Newsletter</span>

        <h2 id="newsletter-title">
          Entrez dans l'univers
          <br />
          de L'<span className="AR">A</span>thena <span className="AR">R</span>
          oyale.
        </h2>

        <p className="newsletter__description">
          Nouvelles créations, douceurs de saison & nouvelles adresses.
        </p>

        <form
          className="newsletter__form"
          method="POST"
          action={import.meta.env.VITE_BREVO_NEWSLETTER_URL}
          data-type="subscription"
        >
          <div className="newsletter__field">
            <label htmlFor="newsletter-email">Votre adresse email</label>

            <input
              id="newsletter-email"
              type="email"
              name="EMAIL"
              placeholder="votre@email.com"
              autoComplete="email"
              required
            />

            <button type="submit">
              <span>S'inscrire</span>
              <span aria-hidden="true">↗</span>
            </button>
          </div>

          <small className="newsletter__legal">
            Soyez parmi les premiers à les découvrir.
          </small>

          <input
            type="text"
            name="email_address_check"
            tabIndex="-1"
            autoComplete="off"
            aria-hidden="true"
            className="newsletter__honeypot"
          />

          <input type="hidden" name="locale" value="fr" />
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
