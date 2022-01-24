import React, { FC } from "react";

interface Props {
  urlImage: string
}

const PartnerShip: FC<Props> = ({urlImage}) => {
  return (
      <div className="logo_partner" style={{width: '100%'}}>
        <img className="partnerBg" src={process.env.PUBLIC_URL + '/images/partnerShipBg.png'} alt='bg'/>
        <img className="partnerLg" src={process.env.PUBLIC_URL + urlImage} alt='logo'/> 
      </div>
  );
};

export default PartnerShip;
