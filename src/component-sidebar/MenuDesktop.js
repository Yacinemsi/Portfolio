import React from "react";

const MenuDesktop = ({ activeSection }) => {
  return (
    <nav id="menu-desktop">
      <ul>
        <li>
          <a
            href="#bienvenue"
            className={activeSection === "bienvenue" ? "active-link" : ""}
          >
            Bienvenue
          </a>
        </li>
        <li>
          <a
            href="#qui-je-suis"
            className={activeSection === "qui-je-suis" ? "active-link" : ""}
          >
            Qui je suis
          </a>
        </li>
        <li>
          <a
            href="#quest-ce-que-je-fais"
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
