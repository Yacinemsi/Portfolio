import React from "react";

const MenuDesktop = ({ activeSection }) => {
  const handleAnchorClick = (event, anchorId) => {
    event.preventDefault(); // empêche le comportement par défaut du navigateur lors du clic sur un lien

    const targetElement = document.getElementById(anchorId);
    if (targetElement) {
      const topPosition = targetElement.offsetTop; // obtenez la position de l'élément cible
      window.scrollTo({
        top: topPosition,
        behavior: "smooth", // permet un défilement doux
      });
    }
  };

  return (
    <nav id="menu-desktop">
      <ul>
        <li>
          <a
            href="#qui-je-suis"
            onClick={(e) => handleAnchorClick(e, "qui-je-suis")}
            className={activeSection === "qui-je-suis" ? "active-link" : ""}
          >
            Qui je suis
          </a>
        </li>
        <li>
          <a
            href="#projets"
            onClick={(e) => handleAnchorClick(e, "projets")}
            className={activeSection === "projets" ? "active-link" : ""}
          >
            Projets
          </a>
        </li>
        <li>
          <a
            href="#quest-ce-que-je-fais"
            onClick={(e) => handleAnchorClick(e, "quest-ce-que-je-fais")}
            className={
              activeSection === "quest-ce-que-je-fais" ? "active-link" : ""
            }
          >
            Qu'est-ce que je fais
          </a>
        </li>
        <li>
          <a
            href="#contactez-moi"
            onClick={(e) => handleAnchorClick(e, "contactez-moi")}
            className={activeSection === "contactez-moi" ? "active-link" : ""}
          >
            Contactez-moi
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MenuDesktop;
