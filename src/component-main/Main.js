import React from "react";
import Who from "./component-qui-je-suis/Who";
import Projets from "./component-projets/Projets";
import What from "./component-quest-ce-que-je-fais/What";
import Contact from "./component-contact/Contact";
import Footer from "../component-footer/Footer";

const Main = () => {
  return (
    <main>
      <Who />
      <Projets />
      <What />
      <Contact />
      <Footer />
    </main>
  );
};

export default Main;
