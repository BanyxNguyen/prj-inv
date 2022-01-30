import { Drawer, IconButton, useMediaQuery, useTheme } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { Menu, Close } from "@mui/icons-material";

export const NAV_LIST = [
  "Home",
  "About Us",
  "Visions",
  "Partnership",
  "Portfolio",
  "Social",
  "Contact",
];

const HeaderComponent: FC = () => {
  const [isBg, setIsBg] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleUIEvent = (e: any) => {
    let t = window.pageYOffset;
    if (t <= 0) {
      setIsBg(false);
    } else if (!isBg) {
      setIsBg(true);
    }
  };

  const _renderNavBar = () => {
    if (isMobile) return <DrawerMenu />;

    return (
      <ul className="nav">
        {NAV_LIST.map((item, index) => (
          <li key={index} className="nav-item">
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", handleUIEvent);
  }, []);
  const temp = isBg ? " show-bg" : "";
  const clsMobile = isMobile ? " rp-md" : "";
  return (
    <header className={"header" + clsMobile + temp}>
      <div className="logo">
        <img
          src={process.env.PUBLIC_URL + "/images/inv-logo.png"}
          alt="inv-logo"
        />
      </div>
      <nav className="nav-bar">{_renderNavBar()}</nav>
    </header>
  );
};

export default HeaderComponent;

const DrawerMenu: FC = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const temp = openDrawer ? " hidden" : "";
  const temp2 = !openDrawer ? " hidden" : "";
  return (
    <>
      <Drawer
        className="drawer-nav-mobile"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <div className="logo">
          <img
            src={process.env.PUBLIC_URL + "/images/inv-logo.png"}
            alt="inv-logo"
          />
        </div>
        <ul className="nav">
          {NAV_LIST.map((item, index) => (
            <li key={index} className="nav-item">
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Drawer>
      <IconButton
        className={"menu-icon" + temp}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <Menu sx={{ fontSize: 35, color: "#ffffff" }} />
      </IconButton>
      <IconButton
        className={"close-icon" + temp2}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <Close sx={{ fontSize: 35, color: "#ffffff" }} />
      </IconButton>
    </>
  );
};
