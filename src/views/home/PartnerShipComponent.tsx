import { useMediaQuery, useTheme } from "@mui/material";
import React, { FC } from "react";
import PartnerShip from "../../components/PartnerShip";

const PartnerShipComponent: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const temp = isMobile ? " md" : "";
  return (
    <section className={"section-item" + temp} style={{ textAlign: "center" }}>
        <img
          className="img-title"
          src={process.env.PUBLIC_URL + "/images/PARTNERSHIP.png"}
          alt="about-us"
        />
        <div className="partnerList">
          <PartnerShip urlImage="/images/stech_logo.png" />
          <PartnerShip urlImage="/images/huobi_logo.png" />
          <PartnerShip urlImage="/images/capital_logo.png" />
        </div>
    </section>
  );
};

export default PartnerShipComponent;
