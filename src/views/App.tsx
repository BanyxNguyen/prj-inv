import React, { FC } from "react";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import HomeComponent from "./home/HomeComponent";

const App: FC = () => {
  return (
    <div className="container-app">
      <HeaderComponent />
      <HomeComponent />
      <FooterComponent />
    </div>
  );
};

export default App;
