const creationImages = import.meta.glob("../assets/images/creations/G*.webp", {
  eager: true,
  query: "?url",
  import: "default",
});

const image = (number) =>
  creationImages[`../assets/images/creations/G${number}.webp`];

const gallery = (...numbers) => numbers.map(image);

export const creations = [
  {
    id: "creation-01",
    name: "L'Écrin Athena",
    category: "Signature",
    season: "Collection permanente",
    description:
      "Une pièce emblématique de la Maison, pensée comme un écrin de gourmandise. Une silhouette élégante, des contrastes subtils et une présence qui transforme chaque dégustation en un instant précieux.",
    coverImage: image(1),
    gallery: gallery(1, 2, 3),
    featured: true,
  },
  {
    id: "creation-02",
    name: "Le Jardin Royal",
    category: "Entremets",
    season: "Printemps",
    description:
      "Une promenade au cœur d'un jardin en pleine floraison. Cette création célèbre la fraîcheur, la légèreté et l'harmonie dans une composition lumineuse et délicate.",
    coverImage: image(2),
    gallery: gallery(2, 4, 5),
    featured: true,
  },
  {
    id: "creation-03",
    name: "La Perle Vanille",
    category: "Création saisonnière",
    season: "Automne",
    description:
      "La douceur intemporelle de la vanille s'exprime ici avec une élégance rare. Une création tout en finesse, où la rondeur des saveurs rencontre une délicatesse presque aérienne.",
    coverImage: image(3),
    gallery: gallery(3, 6, 7),
    featured: true,
  },
  {
    id: "creation-04",
    name: "L'Instant Chocolat",
    category: "Chocolat",
    season: "Hiver",
    description:
      "Une interprétation intense et raffinée du chocolat. Profonde, enveloppante et généreuse, cette création révèle toute la noblesse d'une gourmandise au caractère affirmé.",
    coverImage: image(4),
    gallery: gallery(4, 8),
    featured: false,
  },
  {
    id: "creation-05",
    name: "Le Souffle Floral",
    category: "Éphémère",
    season: "Été",
    description:
      "Une parenthèse délicate inspirée par la poésie des fleurs. Une création légère et expressive, imaginée pour éveiller les sens avec douceur et subtilité.",
    coverImage: image(5),
    gallery: gallery(5, 9),
    featured: false,
  },
  {
    id: "creation-06",
    name: "L'Éclat Doré",
    category: "Signature",
    season: "Collection permanente",
    description:
      "Un éclat de gourmandise aux accents précieux. Son allure lumineuse et son caractère affirmé incarnent l'élégance singulière des créations de la Maison.",
    coverImage: image(6),
    gallery: gallery(6, 10),
    featured: false,
  },
  {
    id: "creation-07",
    name: "La Collection Royale",
    category: "Maison",
    season: "Édition limitée",
    description:
      "Une collection imaginée comme une célébration de l'art pâtissier. Chaque détail compose une expérience généreuse, où élégance et gourmandise se rencontrent.",
    coverImage: image(7),
    gallery: gallery(7, 11),
    featured: false,
  },
  {
    id: "creation-08",
    name: "La Dernière Création",
    category: "Nouveauté",
    season: "2026",
    description:
      "Une nouvelle expression de la créativité de la Maison. Audacieuse dans son allure, délicate dans son esprit, elle invite à découvrir une autre facette de la gourmandise.",
    coverImage: image(8),
    gallery: gallery(8, 12),
    featured: false,
  },
  {
    id: "creation-09",
    name: "Le Cœur Praliné",
    category: "Entremets",
    season: "Hiver",
    description:
      "Une invitation à retrouver le plaisir des saveurs profondes et réconfortantes. Cette création joue sur les contrastes et laisse place à une gourmandise intensément généreuse.",
    coverImage: image(9),
    gallery: gallery(9, 13),
    featured: false,
  },
  {
    id: "creation-10",
    name: "La Rose d'Orient",
    category: "Création saisonnière",
    season: "Printemps",
    description:
      "Inspirée par la délicatesse des jardins orientaux, cette création déploie une personnalité raffinée et enveloppante. Une rencontre entre poésie, élégance et douceur.",
    coverImage: image(10),
    gallery: gallery(10, 14),
    featured: false,
  },
  {
    id: "creation-11",
    name: "Le Noir Intense",
    category: "Chocolat",
    season: "Collection permanente",
    description:
      "Une création au tempérament affirmé, dédiée aux amateurs de sensations cacaotées. Son esthétique sobre dissimule une expérience profonde et résolument sophistiquée.",
    coverImage: image(11),
    gallery: gallery(11, 15),
    featured: false,
  },
  {
    id: "creation-12",
    name: "La Parenthèse Fruitée",
    category: "Éphémère",
    season: "Été",
    description:
      "Une escapade pleine de fraîcheur et de légèreté. Cette création évoque les beaux jours, les instants spontanés et le plaisir d'une gourmandise tout en éclat.",
    coverImage: image(12),
    gallery: gallery(12, 16),
    featured: false,
  },
  {
    id: "creation-13",
    name: "L'Héritage de la Maison",
    category: "Maison",
    season: "Collection permanente",
    description:
      "Un hommage à l'identité de la Maison et à son univers. Une création empreinte de caractère, où l'élégance classique rencontre une sensibilité contemporaine.",
    coverImage: image(13),
    gallery: gallery(13, 17),
    featured: false,
  },
  {
    id: "creation-14",
    name: "Le Jardin d'Ambre",
    category: "Signature",
    season: "Automne",
    description:
      "Comme une lumière douce à la fin d'une journée d'automne, cette création révèle une personnalité chaleureuse et délicate. Une composition pleine de nuances et de profondeur.",
    coverImage: image(14),
    gallery: gallery(14, 18),
    featured: false,
  },
  {
    id: "creation-15",
    name: "La Tentation Cacao",
    category: "Chocolat",
    season: "Édition limitée",
    description:
      "Une tentation assumée, imaginée autour de l'intensité et du raffinement. Une création de caractère qui célèbre la gourmandise dans son expression la plus élégante.",
    coverImage: image(15),
    gallery: gallery(15, 19),
    featured: false,
  },
  {
    id: "creation-16",
    name: "L'Instant Précieux",
    category: "Nouveauté",
    season: "2026",
    description:
      "Un instant suspendu, imaginé pour les grandes occasions comme pour les petits plaisirs. Une création précieuse dont chaque détail invite à prendre le temps de savourer.",
    coverImage: image(16),
    gallery: gallery(16, 20),
    featured: false,
  },
  {
    id: "creation-17",
    name: "Le Délice des Saisons",
    category: "Création saisonnière",
    season: "Automne",
    description:
      "Une ode aux changements de saison et à leurs inspirations. Cette création évoque une nature généreuse, des nuances délicates et une gourmandise qui évolue au fil du temps.",
    coverImage: image(17),
    gallery: gallery(17, 1),
    featured: false,
  },
  {
    id: "creation-18",
    name: "La Douceur Royale",
    category: "Entremets",
    season: "Printemps",
    description:
      "Une douceur à l'allure délicate et à l'esprit généreux. Une création harmonieuse qui privilégie l'équilibre, la finesse et le plaisir d'une dégustation tout en douceur.",
    coverImage: image(18),
    gallery: gallery(18, 2),
    featured: false,
  },
  {
    id: "creation-19",
    name: "L'Édition Privilège",
    category: "Éphémère",
    season: "Édition limitée",
    description:
      "Une édition confidentielle imaginée pour les instants qui méritent une attention particulière. Une création singulière, élégante et volontairement exclusive.",
    coverImage: image(19),
    gallery: gallery(19, 3),
    featured: false,
  },
  {
    id: "creation-20",
    name: "La Signature Athena",
    category: "Signature",
    season: "Collection permanente",
    description:
      "L'expression la plus personnelle de l'univers Athena. Une signature qui rassemble élégance, créativité et gourmandise dans une création à l'identité affirmée.",
    coverImage: image(20),
    gallery: gallery(20, 4),
    featured: false,
  },
];
