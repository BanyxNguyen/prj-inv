import React, { FC } from "react";
import AboutUsComponent from "./AboutUsComponent";
import PartnerShipComponent from "./PartnerShipComponent";
import VisionComponent from "./VisionComponent";
import WelcomeComponent from "./WelcomeComponent";

const HomeComponent: FC = () => {
  return (
    <div className="home">
      <WelcomeComponent/>
      <AboutUsComponent/>
      <VisionComponent/>
      <PartnerShipComponent/>
    </div>
  );
};

export default HomeComponent;
