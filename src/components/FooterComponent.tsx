import React, { FC } from "react";
import { Facebook, Twitter, YouTube } from "@mui/icons-material";

const SOCIAL_LIST = [Facebook, Twitter, YouTube];

const FooterComponent: FC = () => {
  return (
    <footer className="footer">
      <div
        className="content-footer bg-footer"
        style={{
          backgroundImage: "url(/images/bg-footer.png)",
        }}
      >
        <div className="item logo-item">
          <div className="logo">
            <img
              src={process.env.PUBLIC_URL + "/images/inv-logo.png"}
              alt="inv-logo"
            />
          </div>
          <ul className="social">
            {SOCIAL_LIST.map((Item, index) => {
              return (
                <li key={index}>
                  <Item sx={{ fontSize: 26 }} />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="item">
          <ul className="nav-footer">
            <li className="nav-item">Home</li>
            <li className="nav-item">About Us</li>
            <li className="nav-item">Visions</li>
          </ul>
        </div>
        <div className="item">
          <ul className="nav-footer">
            <li className="nav-item">Partnership</li>
            <li className="nav-item">Portfolio</li>
            <li className="nav-item">Contact</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
