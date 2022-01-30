import { useMediaQuery, useTheme } from "@mui/material";
import React, { FC } from "react";

const WelcomeComponent: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const temp = isMobile ? " md" : "";
  return (
    <section className={"welcome" + temp}>
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
        <div className="sub-title">
          <span className="text">Here today, looked upon tomorrow!</span>
        </div>
      </div>
    </section>
  );
};

export default WelcomeComponent;
