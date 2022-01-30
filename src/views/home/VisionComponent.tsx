import { useMediaQuery, useTheme } from "@mui/material";
import React, { FC } from "react";

const VisionComponent: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const temp = isMobile ? " md" : "";
  return (
    <section className={"section-item vision" + temp}>
      <img
        className="bg-img"
        src={process.env.PUBLIC_URL + "/images/bg-visions.png"}
        alt="bg-visions"
      />
      <div className="content">
        <img
          className="img-title"
          src={process.env.PUBLIC_URL + "/images/visions.png"}
          alt="visions"
        />
        <p className="text">
          INV Ventures will partner with project which have started successful
          ideas to change the world for better. INV Ventures has a true long
          term view-our fund is an independent fund, with no end of fund life
          date. Finally, we strive to have a life-long relationship with all our
          blockchain projects.
        </p>
      </div>
    </section>
  );
};

export default VisionComponent;
