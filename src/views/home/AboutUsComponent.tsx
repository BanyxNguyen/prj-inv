import { useMediaQuery, useTheme } from "@mui/material";
import React, { FC } from "react";

const AboutUsComponent: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const temp = isMobile ? " md" : "";
  return (
    <section className={"section-item" + temp}>
      <img
        className="bg-img"
        src={process.env.PUBLIC_URL + "/images/inv-circle.png"}
        alt="inv-circle"
      />
      <div className="content">
        <img
          className="img-title"
          src={process.env.PUBLIC_URL + "/images/about-us.png"}
          alt="about-us"
        />
        <p className="text">
          INV Ventures is a VC firm that focuses on making investment in the
          potentail blockchain projects. We aim to discover darling founders or
          teams in this industry into PIONEERS and lead our 4.0 blockchain
          world.
        </p>
      </div>
    </section>
  );
};

export default AboutUsComponent;
