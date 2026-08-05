import G1 from "../assets/images/creations/G1.jpg";
import G2 from "../assets/images/creations/G2.jpg";
import G3 from "../assets/images/creations/G3.jpg";
import G4 from "../assets/images/creations/G4.jpg";
import G5 from "../assets/images/creations/G5.jpg";
import G6 from "../assets/images/creations/G6.jpg";
import G7 from "../assets/images/creations/G7.jpg";
import G8 from "../assets/images/creations/G8.jpg";

export const creations = [
  {
    id: "creation-01",

    name: "L'Écrin Athena",

    category: "Signature",

    season: "Collection permanente",

    coverImage: G1,

    gallery: [G1, G2, G3],

    featured: true,
  },

  {
    id: "creation-02",

    name: "Le Jardin Royal",

    category: "Entremets",

    season: "Printemps",

    coverImage: G2,

    gallery: [G2, G4, G5],

    featured: true,
  },

  {
    id: "creation-03",

    name: "La Perle Vanille",

    category: "Création saisonnière",

    season: "Automne",

    coverImage: G3,

    gallery: [G3, G6, G7],

    featured: true,
  },

  {
    id: "creation-04",

    name: "L'Instant Chocolat",

    category: "Chocolat",

    season: "Hiver",

    coverImage: G4,

    gallery: [G4, G8],

    featured: false,
  },

  {
    id: "creation-05",

    name: "Le Souffle Floral",

    category: "Éphémère",

    season: "Été",

    coverImage: G5,

    gallery: [G5],

    featured: false,
  },

  {
    id: "creation-06",

    name: "L'Éclat Doré",

    category: "Signature",

    season: "Collection permanente",

    coverImage: G6,

    gallery: [G6],

    featured: false,
  },

  {
    id: "creation-07",

    name: "La Collection Royale",

    category: "Maison",

    season: "Édition limitée",

    coverImage: G7,

    gallery: [G7],

    featured: false,
  },

  {
    id: "creation-08",

    name: "La Dernière Création",

    category: "Nouveauté",

    season: "2026",

    coverImage: G8,

    gallery: [G8],

    featured: false,
  },
];
