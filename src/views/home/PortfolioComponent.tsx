import React,
{ FC } from "react";
import PartnerShip from "../../components/PartnerShip";

const PortfolioComponent: FC = () => {

  const listUrlLogo = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
    "7.png",
    "8.png",
    "9.png",
    "10.png",
    "11.png",
    "12.png",
    "13.png",
    "14.png",
    "15.png",
    "16.png",
    "17.png",
    "18.png",
    "19.png",
    "20.png",]

  const renderLogo = () => {
    return listUrlLogo.map((data) => {
      return (
        <div className="logo_portfolio_area" style={{ width: '100%' }}>
          <img className="logo_portfolio" src={process.env.PUBLIC_URL + "/images/" + data} alt='logo' />
        </div>)
    })
  }

  return (
    <section className="section-item portfolio" style={{ textAlign: "center" }}>
      {/* <img
        className="bg-img"
        src={process.env.PUBLIC_URL + "/images/inv-circle.png"}
        alt="inv-circle"
      /> */}
      <img
        className="img-title"
        src={process.env.PUBLIC_URL + "/images/PORTFOLIO.png"}
        alt="about-us"
      />
      <div className="portfolioList">
        {renderLogo()}
      </div>
    </section>
  );
};

export default PortfolioComponent;
