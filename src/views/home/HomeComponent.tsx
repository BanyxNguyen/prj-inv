import React, { FC } from "react";
import WelcomeComponent from "./WelcomeComponent";

const HomeComponent: FC = () => {
  return (
    <div className="home">
      <WelcomeComponent/>
    </div>
  );
};

export default HomeComponent;
