import React from "react";
import projetsData from "../../data/projets.json";

const Projets = () => {
  return (
    <div id="projets">
      {projetsData.projets.map((projet) => (
        <div className="projet-container" key={projet.id} data-id={projet.id}>
          <div className="projet-image">
            <img src={projet.image} alt={projet.nom} />
          </div>
          <div className="projet-details">
            <h2>{projet.nom}</h2>
            <p>{projet.description}</p>
            <ul className="projet-technologies">
              {projet.technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            {projet.codeSource && (
              <a
                href={projet.codeSource}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="path_to_github_icon.png" alt="Github" />
                Code Source
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projets;
