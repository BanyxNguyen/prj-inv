import React, { FC } from "react";
import AboutUsComponent from "./AboutUsComponent";
import VisionComponent from "./VisionComponent";
import WelcomeComponent from "./WelcomeComponent";

const HomeComponent: FC = () => {
  return (
    <div className="home">
      <WelcomeComponent/>
      <AboutUsComponent/>
      <VisionComponent/>
    </div>
  );
};

export default HomeComponent;
