import React from "react";
import * as Asset from "@/assets/header_assets";
import * as StyleX from "@/styles/header_style";

const HeaderLinks = () => {
  return (
    <StyleX.UList>
      {Asset &&
        Asset.NavAsset.map((data) => <li key={data.id}>{data.title}</li>)}
    </StyleX.UList>
  );
};

export default HeaderLinks;
