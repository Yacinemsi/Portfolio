import React, { useState, useEffect } from "react";
import MenuDesktop from "./MenuDesktop";
import MenuHamburger from "./MenuHamburger";

const SidebarNavigation = () => {
  const [activeSection, setActiveSection] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
      const quiJeSuis = document.getElementById("qui-je-suis").offsetTop;
      const projets = document.getElementById("projets").offsetTop;
      const questCeQueJeFais = document.getElementById(
        "quest-ce-que-je-fais"
      ).offsetTop;
      const contactezMoi = document.getElementById("contactez-moi").offsetTop;
      if (window.scrollY >= contactezMoi) {
        setActiveSection("contactez-moi");
      } else if (window.scrollY >= questCeQueJeFais) {
        setActiveSection("quest-ce-que-je-fais");
      } else if (window.scrollY >= projets) {
        setActiveSection("projets");
      } else if (window.scrollY >= quiJeSuis) {
        setActiveSection("qui-je-suis");
      } else {
        setActiveSection(""); // pour aucune section, si vous êtes tout en haut de la page
      }
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="sidebar-navigation">
      {windowWidth < 769 ? (
        <MenuHamburger activeSection={activeSection} />
      ) : (
        <MenuDesktop activeSection={activeSection} />
      )}
    </header>
  );
};

export default SidebarNavigation;
