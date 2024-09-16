import React from "react";
import {
  FaCode,
  FaWordpress,
  FaDatabase,
  FaMobileAlt,
  FaGit,
  FaSearch,
} from "react-icons/fa";

const What = () => {
  return (
    <div id="quest-ce-que-je-fais">
      <div className="icon-box">
        <FaCode />
        <h3>Développement Front-end</h3>
        <p>
          Conception d'interfaces utilisateur interactives et fluides avec HTML,
          CSS(SASS), JavaScript, React, TailwindCSS et VueJs. Optimisation de la
          performance et amélioration de l'expérience utilisateur.
        </p>
      </div>

      <div className="icon-box">
        <FaWordpress />
        <h3>WordPress</h3>
        <p>
          Développement, personnalisation et gestion de sites WordPress.
          Intégration de plugins et personnalisation de thèmes.
        </p>
      </div>

      <div className="icon-box">
        <FaDatabase />
        <h3>Gestion de bases de données</h3>
        <p>
          Conception et gestion de bases de données efficaces. Requêtes
          complexes et garantie de la sécurité des données.
        </p>
      </div>

      <div className="icon-box">
        <FaMobileAlt />
        <h3>Conception responsive</h3>
        <p>
          Développement de sites web adaptatifs pour ordinateurs, tablettes et
          smartphones.
        </p>
      </div>

      <div className="icon-box">
        <FaGit />
        <h3>Utilisation d'outils de versionnement</h3>
        <p>
          Utilisation de Git pour suivre les modifications, collaborer et gérer
          les versions de projets.
        </p>
      </div>

      <div className="icon-box">
        <FaSearch />
        <h3>Compréhension des principes de SEO</h3>
        <p>
          Optimisation de sites web pour les moteurs de recherche. Amélioration
          de la structure et du contenu du site.
        </p>
      </div>
    </div>
  );
};

export default What;
