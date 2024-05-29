"use client";
import React, { useState } from "react";
import * as StyleX from "@/styles/header_style";
import HeaderLogo from "./sub-components/header-logo";
import HeaderLinks from "./sub-components/header-links";

const Header = ({ mode }) => {
  const [handleMenu, setHandleMenu] = useState(false);

  const HandleHeaderMenu = () => {
    setHandleMenu(!handleMenu);
  };

  return (
    <StyleX.Header>
      <div className=" header-division header-division-1">
        <HeaderLogo />
        <div onClick={HandleHeaderMenu}>MENU</div>

        <StyleX.TabletUList $showHide={handleMenu}>
          <HeaderLinks />
        </StyleX.TabletUList>
      </div>

      <div className=" header-division  header-division-2">
        <HeaderLogo />
        <HeaderLinks />
      </div>
    </StyleX.Header>
  );
};

export default Header;
