import React, { FC } from "react";

const WelcomeComponent: FC = () => {
  return (
    <section className="welcome">
      <div className="wel-content">
        <img
          className="wel-img"
          src={process.env.PUBLIC_URL + "/images/planetary-network.png"}
          alt="planetary-network"
        />
        <div>
          <img
            className="img-title"
            src={process.env.PUBLIC_URL + "/images/inv-ventures.png"}
            alt="inv-ventures"
          />
        </div>
        <span className="sub-title">Here today, looked upon tomorrow!</span>
      </div>
    </section>
  );
};

export default WelcomeComponent;
