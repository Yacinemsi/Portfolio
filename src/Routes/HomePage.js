import React from "react";
import SidebarNavigation from "../component-sidebar/SidebarNavigation.js";
import Main from "../component-main/Main.js";

const HomePage = () => (
  <div className="container">
    <SidebarNavigation />
    <Main />
  </div>
);

export default HomePage;
