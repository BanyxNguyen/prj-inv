import React, { FC } from "react";
import { Facebook, Twitter, YouTube, Telegram } from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";

export const SOCIAL_LIST = [
  {
    icon: Facebook,
    link: "https://www.facebook.com/INV-Ventures-108485651538625",
  },
  {
    icon: Twitter,
    link: "https://twitter.com/invventures01",
  },
  {
    icon: YouTube,
    link: "https://www.youtube.com/channel/UCLXKIMq9Eb0T-kCXaFDBxnQ",
  },
  {
    icon: Telegram,
    link: "https://t.me/inv_community",
  },
];

const FooterComponent: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const temp = isMobile ? " md" : "";
  return (
    <footer className={"footer" + temp}>
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
          {SOCIAL_LIST.map((item, index) => {
            const TIcon = item.icon;
            return (
              <li key={index}>
                <a target="_blank" href={item.link}>
                  <TIcon sx={{ fontSize: 26, color: "#fff" }} />
                </a>
              </li>
            );
          })}
        </ul>
        </div>
        <div className="item menu-item">
          <ul className="nav-footer bd-bottom">
            <li className="nav-item">Home</li>
            <li className="nav-item">About Us</li>
            <li className="nav-item">Visions</li>
          </ul>
        </div>
        <div className="item menu-item">
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
