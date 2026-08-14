import { useRef } from "react";

import ceoImage from "../../assets/images/CEO.jpg";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

import {
  contactGallery,
  contactSocials,
  contactSubjects,
} from "../../data/contact";

import { FiInstagram, FiFacebook, FiLinkedin } from "react-icons/fi";

import "./ContactSection.css";

const socialIcons = {
  Instagram: <FiInstagram aria-hidden="true" />,
  Facebook: <FiFacebook aria-hidden="true" />,
  LinkedIn: <FiLinkedin aria-hidden="true" />,
};

function ContactIntro() {
  return (
    <section className="contact-intro" aria-labelledby="contact-title">
      <div className="contact-intro__content">
        <div className="contact-intro__heading">
          <h1 id="contact-title">Contact</h1>

          <p className="contact-intro__lead">
            Une question, une envie, une collaboration ?
            <br />
            Nous sommes à votre écoute.
          </p>
        </div>

        <div className="contact-intro__portrait">
          <div className="contact-intro__portrait-block">
            <figure className="contact-intro__portrait-image">
              <img
                src={ceoImage}
                alt="Naomie, Cheffe pâtissière et Fondatrice de L'Athena Royale"
                width="360"
                height="360"
                loading="eager"
                decoding="async"
              />
            </figure>
          </div>

          <blockquote className="contact-intro__quote">
            <p>
              « La pâtisserie commence avec une matière, mais elle prend vie
              dans l'émotion qu'elle laisse. »
            </p>

            <cite>— Naomie, Cheffe pâtissière &amp; Fondatrice</cite>
          </blockquote>
        </div>

        <div className="contact-intro__details">
          <div className="contact-intro__contact">
            <span>Nous écrire</span>

            <a href="mailto:contact@athenaroyale.com">
              contact@athenaroyale.com
            </a>
          </div>

          <div className="contact-intro__contact">
            <span>Nous appeler</span>

            <a href="tel:+33100000000">+33 (0)1 00 00 00 00</a>
          </div>

          <div className="contact-intro__socials">
            <span>Suivez la Maison</span>

            <nav aria-label="Réseaux sociaux">
              <ul>
                {contactSocials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      title={social.label}
                    >
                      {socialIcons[social.label]}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  return (
    <section
      className="contact-form-section"
      aria-labelledby="contact-form-title"
    >
      <form className="contact-form" action="/api/contact" method="post">
        <div className="contact-form__heading">
          <span className="contact-form__eyebrow">Votre message</span>

          <h2 id="contact-form-title">Parlons-nous.</h2>

          <p>Quelques mots suffisent pour commencer une conversation.</p>
        </div>

        <div className="contact-form__grid">
          <div className="contact-form__field">
            <label htmlFor="contact-name">
              Nom <span aria-hidden="true">*</span>
            </label>

            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              required
            />
          </div>

          <div className="contact-form__field">
            <label htmlFor="contact-email">
              Email <span aria-hidden="true">*</span>
            </label>

            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              required
            />
          </div>

          <div className="contact-form__field">
            <label htmlFor="contact-company">Entreprise / Maison</label>

            <input
              id="contact-company"
              name="company"
              type="text"
              autoComplete="organization"
            />
          </div>

          <div className="contact-form__field">
            <label htmlFor="contact-subject">
              Sujet <span aria-hidden="true">*</span>
            </label>

            <select
              id="contact-subject"
              name="subject"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Sélectionner un sujet
              </option>

              {contactSubjects.map((subject) => (
                <option key={subject.value} value={subject.value}>
                  {subject.label}
                </option>
              ))}
            </select>
          </div>

          <div className="contact-form__field contact-form__field--message">
            <label htmlFor="contact-message">
              Message <span aria-hidden="true">*</span>
            </label>

            <textarea
              id="contact-message"
              name="message"
              rows="5"
              maxLength="2000"
              required
            />
          </div>
        </div>

        <div className="contact-form__footer">
          <p>Les champs marqués d'un * sont obligatoires.</p>

          <button type="submit">
            <span>Envoyer le message</span>
            <span aria-hidden="true">↗</span>
          </button>
        </div>
      </form>
    </section>
  );
}

function ContactGallery({ pageRef }) {
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["start start", "end end"],
  });

  const galleryY = useTransform(
    scrollYProgress,
    [0, 1],
    reducedMotion ? ["0%", "0%"] : ["0%", "-75%"],
  );

  return (
    <aside className="contact-gallery" aria-hidden="true">
      <div className="contact-gallery__viewport">
        <motion.div className="contact-gallery__track" style={{ y: galleryY }}>
          {contactGallery.map((image) => (
            <figure key={image.id} className="contact-gallery__item">
              <img
                src={image.src}
                alt=""
                width="900"
                height="1200"
                loading="lazy"
                decoding="async"
              />
            </figure>
          ))}
        </motion.div>
      </div>
    </aside>
  );
}

function ContactSection() {
  const pageRef = useRef(null);

  return (
    <main ref={pageRef} className="contact-page">
      <div className="contact-page__left">
        <ContactIntro />
        <ContactForm />
      </div>

      <ContactGallery pageRef={pageRef} />
    </main>
  );
}

export default ContactSection;
