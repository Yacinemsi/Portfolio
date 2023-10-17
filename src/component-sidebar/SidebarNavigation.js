import React, { useState, useEffect } from "react";

const SidebarNavigation = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // Logique d'animation au chargement de la page
    const listItems = document.querySelectorAll(".sidebar-navigation li");
    listItems.forEach((li, index) => {
      setTimeout(() => {
        li.classList.add("fade-in-bottom-side");
      }, 600 * index); // 200ms de délai entre chaque élément
    });

    // Logique de suivi du scroll
    const handleScroll = () => {
      const bienvenue = document.getElementById("bienvenue").offsetTop;
      const quiJeSuis = document.getElementById("qui-je-suis").offsetTop;
      const questCeQueJeFais = document.getElementById(
        "quest-ce-que-je-fais"
      ).offsetTop;
      const contactezMoi = document.getElementById("contactez-moi").offsetTop;

      if (window.scrollY >= contactezMoi) {
        setActiveSection("contactez-moi");
      } else if (window.scrollY >= questCeQueJeFais) {
        setActiveSection("quest-ce-que-je-fais");
      } else if (window.scrollY >= quiJeSuis) {
        setActiveSection("qui-je-suis");
      } else if (window.scrollY >= bienvenue) {
        setActiveSection("bienvenue");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sidebar-navigation">
      <nav>
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
    </header>
  );
};

export default SidebarNavigation;
