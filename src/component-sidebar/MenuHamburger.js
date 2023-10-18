import React, { useState } from "react";
import Modal from "react-modal";
import "../sass/MenuHamburger.scss"; // Continuez à utiliser ce fichier pour vos styles.

Modal.setAppElement("#root"); // Ceci est nécessaire pour les besoins d'accessibilité.

function MenuHamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    if (window.innerWidth <= 768) {
      setIsOpen(true);
    }
  };

  return (
    <>
      <div className="menu-icon" onClick={handleOpenModal}>
        &#9776;
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        className="modal"
        overlayClassName="overlay"
      >
        <span className="close" onClick={() => setIsOpen(false)}>
          &times;
        </span>
        <nav>
          <ul>
            <li>
              <a href="#bienvenue">Bienvenue</a>
            </li>
            <li>
              <a href="#qui-je-suis">Qui je suis</a>
            </li>
            <li>
              <a href="#quest-ce-que-je-fais">Qu'est-ce que je fais</a>
            </li>
            <li>
              <a href="#contactez-moi">Contactez-moi</a>
            </li>
          </ul>
        </nav>
      </Modal>
    </>
  );
}

export default MenuHamburger;
