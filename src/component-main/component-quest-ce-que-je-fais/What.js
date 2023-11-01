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
          Capable de concevoir des interfaces utilisateur interactives et
          fluides grâce à une maîtrise approfondie de HTML, CSS, JavaScript et
          React. Expérimenté dans l'optimisation de la performance et
          l'amélioration de l'expérience utilisateur pour divers dispositifs et
          tailles d'écran.
        </p>
      </div>

      <div className="icon-box">
        <FaWordpress />
        <h3>WordPress</h3>
        <p>
          Aptitude à développer, personnaliser et gérer des sites web WordPress,
          y compris l'intégration de plugins et la personnalisation de thèmes
          pour répondre à des besoins spécifiques. Expérience dans la résolution
          de problèmes et la mise à jour de sites existants.
        </p>
      </div>

      <div className="icon-box">
        <FaDatabase />
        <h3>Gestion de bases de données</h3>
        <p>
          Capable de concevoir et de gérer des bases de données efficaces,
          d'effectuer des requêtes complexes pour extraire des informations, et
          de garantir la sécurité et l'intégrité des données. Familiarisé avec
          la mise en place et la maintenance de systèmes de sauvegarde.
        </p>
      </div>

      <div className="icon-box">
        <FaMobileAlt />
        <h3>Conception responsive</h3>
        <p>
          Habile à développer des sites web qui s'adaptent automatiquement à
          différents dispositifs, assurant ainsi une expérience utilisateur
          uniforme sur ordinateurs, tablettes et smartphones.
        </p>
      </div>

      <div className="icon-box">
        <FaGit />
        <h3>Utilisation d'outils de versionnement</h3>
        <p>
          Expérimenté dans l'utilisation de Git pour suivre les modifications,
          collaborer avec d'autres développeurs et gérer différentes versions
          d'un projet. Capable de résoudre les conflits de code et de travailler
          avec des branches multiples.
        </p>
      </div>

      <div className="icon-box">
        <FaSearch />
        <h3>Compréhension des principes de SEO</h3>
        <p>
          Compétent dans l'optimisation de sites web pour les moteurs de
          recherche, y compris l'amélioration de la structure du site,
          l'optimisation du contenu et la garantie d'une performance rapide du
          site. Familiarisé avec les outils d'analyse pour suivre et améliorer
          le classement des sites.
        </p>
      </div>
    </div>
  );
};

export default What;
