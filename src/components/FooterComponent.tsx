import React, { FC } from "react";
import { NAV_LIST } from "./HeaderComponent";
import {
  LocalPhone,
  Email,
  Facebook,
  Twitter,
  Telegram,
  YouTube,
} from "@mui/icons-material";

const SOCIAL_LIST = [Facebook, Twitter, Telegram, YouTube];

const FooterComponent: FC = () => {
  return (
    <footer className="footer">
      <div className="content-footer">
        <div className="item">
          <div className="logo">LOGO</div>
          <ul className="contact">
            <li>
              <span className="icon">
                <LocalPhone sx={{ fontSize: 20 }} />
              </span>
              <span className="text">+84909999909</span>
            </li>
            <li>
              <span className="icon">
                <Email sx={{ fontSize: 20 }} />
              </span>
              <span className="text">example@gmail.com</span>
            </li>
          </ul>
        </div>
        <div className="item">
          <ul className="nav-footer">
            {NAV_LIST.map((item, index) => (
              <li key={index} className="nav-item">
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="item">
          <h2>Sign up receive message</h2>
          <div>Keep track of the latest projects from Titans Ventures</div>
          <div></div>
          <ul className="social">
            {SOCIAL_LIST.map((Item, index) => {
              return (
                <li key={index}>
                  <Item />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="copyright">@2022 INV. Copyright by INV.</div>
    </footer>
  );
};

export default FooterComponent;
