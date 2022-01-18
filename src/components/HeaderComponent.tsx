import React, { FC } from "react";

export const NAV_LIST = [
  "Home",
  "About Us",
  "Visions",
  "Partnership",
  "Portfolio",
  "Contact",
];

const HeaderComponent: FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={process.env.PUBLIC_URL + '/images/inv-logo.png'} alt="inv-logo" />
      </div>
      <nav className="nav-bar">
        <ul className="nav">
          {NAV_LIST.map((item, index) => (
            <li key={index} className="nav-item">
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComponent;
