import React, { useState } from "react";
import Modal from "react-modal";
import "../sass/MenuHamburger.scss"; // Continuez à utiliser ce fichier pour vos styles.

Modal.setAppElement("#root"); // Ceci est nécessaire pour les besoins d'accessibilité.

function MenuHamburger({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    if (window.innerWidth <= 768) {
      setIsOpen(true);
    }
  };

  return (
    <>
      <div
        className={`menu-icon ${isOpen ? "open" : ""}`}
        onClick={() => {
          if (isOpen) {
            setIsOpen(false);
          } else {
            handleOpenModal();
          }
        }}
      >
        <div className="bar bar1"></div>
        <div className="bar bar2"></div>
        <div className="bar bar3"></div>
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        className="modal"
        overlayClassName="overlay"
      >
        <nav>
          <ul>
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
                href="#projets"
                className={activeSection === "projets" ? "active-link" : ""}
              >
                Projets
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
                className={
                  activeSection === "contactez-moi" ? "active-link" : ""
                }
              >
                Contactez-moi
              </a>
            </li>
          </ul>
        </nav>
      </Modal>
    </>
  );
}

export default MenuHamburger;
