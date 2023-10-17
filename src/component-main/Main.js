import React from "react";
import Bienvenue from "./component-bienvenue/Bienvenue";
import Who from "./component-qui-je-suis/Who";
import What from "./component-quest-ce-que-je-fais/What";
import Contact from "./component-contact/Contact";
import Footer from "../component-footer/Footer";

const Main = () => {
  return (
    <main>
      <Bienvenue />
      <Who />
      <What />
      <Contact />
      <Footer />
    </main>
  );
};

export default Main;
