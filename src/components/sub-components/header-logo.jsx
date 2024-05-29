"use client";
import React from "react";
import Image from "next/image";
import * as Asset from "@/assets/header_assets";
import * as StyleX from "@/styles/header_style";

const HeaderLogo = () => {
  return (
    <StyleX.LogoDiv>
      <Image
        src={Asset.NavLogo}
        alt="Description of the image"
        width={68}
        height={68}
        priority={true}
      />
      <h3>LOGO</h3>
    </StyleX.LogoDiv>
  );
};

export default HeaderLogo;
