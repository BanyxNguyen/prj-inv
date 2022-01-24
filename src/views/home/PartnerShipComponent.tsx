import React, { FC } from "react";
import PartnerShip from "../../components/PartnerShip";

const PartnerShipComponent: FC = () => {
  return (
    <section className="section-item" style={{textAlign: "center"}}>
      <div>
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
      </div>
    </section>
  );
};

export default PartnerShipComponent;
