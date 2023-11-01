import React from "react";

const Who = () => {
  return (
    <div id="qui-je-suis">
      <img
        src={process.env.PUBLIC_URL + "../../../images/photo-de-profil.png"}
        alt="Photo de Yacine"
      ></img>
      <div className="bienvenue_item fade-in-bottom">
        <h1>Yacine, Développeur front-end React</h1>
        <p>
          Ici, vous découvrirez l'essence de mon parcours professionnel et de ma
          passion pour le développement. <br></br>Chaque projet reflète une part
          de ma créativité et de mon engagement envers la qualité.<br></br>
          Explorez, inspirez-vous et n'hésitez pas à me contacter pour tout
          échange ou collaboration.
          <br></br>Bonne visite !
        </p>
      </div>
    </div>
  );
};

export default Who;
