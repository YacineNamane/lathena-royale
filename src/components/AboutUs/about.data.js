import heroImage from "../../assets/images/about/hero.png";
import houseImage from "../../assets/images/about/hero.png";
import signatureImage from "../../assets/images/about/hero.png";
import craftImage from "../../assets/images/about/hero.png";

export const aboutPageData = {
  sections: [
    {
      id: "hero",
      type: "hero",
      height: "100vh",
      theme: "dark",
      eyebrow: "L’ATHÉNA ROYALE · MAISON DE PÂTISSERIE",
      title: "Notre maison,",
      titleHighlight: "notre histoire.",
      description: "Bienvenue dans l'univers de L’Athéna Royale.",
      button: {
        label: "DÉCOUVRIR LA MAISON",
        href: "#house",
      },
      image: {
        src: heroImage,
        alt: "Création pâtissière signature de L’Athéna Royale",
      },
    },
    {
      id: "house",
      type: "content-image",
      height: "70vh",
      theme: "light",
      imagePosition: "left",
      eyebrow: "LA MAISON",
      title: "L’Athéna Royale",
      text: "La pâtisserie est avant tout une histoire de goût, de travail et de partage. À travers ses créations, L’Athéna Royale souhaite proposer des pâtisseries soignées, pensées pour être aussi agréables à regarder qu'à déguster.",
      button: {
        label: "DÉCOUVRIR NOS CRÉATIONS",
        href: "/creations",
      },
      image: {
        src: houseImage,
        alt: "Univers de la maison L’Athéna Royale",
      },
    },
    {
      id: "signature",
      type: "content-image",
      height: "85vh",
      theme: "dark",
      imagePosition: "right",
      eyebrow: "NOTRE SIGNATURE",
      title: "Le soin apporté à chaque création.",
      text: "Le choix des saveurs, l'association des textures et le travail des finitions participent à la personnalité de chaque pâtisserie. Rien n'est laissé au hasard.",
      image: {
        src: signatureImage,
        alt: "Entremets au chocolat révélant ses différentes textures",
      },
    },
    {
      id: "craft",
      type: "content-image",
      height: "90vh",
      theme: "light",
      imagePosition: "left",
      eyebrow: "NOTRE SAVOIR-FAIRE",
      title: "Derrière chaque création.",
      text: "De la préparation aux dernières finitions, chaque étape demande du temps et de la précision. C'est ce travail, souvent invisible, qui donne naissance à une pâtisserie aboutie.",
      image: {
        src: craftImage,
        alt: "Mains d'un pâtissier réalisant les finitions d'une pâtisserie",
      },
    },
    {
      id: "conclusion",
      type: "conclusion",
      height: "75vh",
      theme: "dark",
      eyebrow: "L’ATHÉNA ROYALE",
      title: "À découvrir et à partager.",
      text: "Découvrez les créations de L’Athéna Royale et trouvez celle qui accompagnera votre prochain moment gourmand.",
      button: {
        label: "EXPLORER NOS CRÉATIONS",
        href: "/creations",
      },
    },
  ],
};
