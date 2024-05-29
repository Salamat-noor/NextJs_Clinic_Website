import React from "react";
import * as Asset from "@/assets/footer_assets";
import * as StyleX from "@/styles/footer_styles";
import FooterFindUs from "./sub-components/footer-find-us";
import Image from "next/image";

const Footer = () => {
  return (
    <StyleX.Footer>
      <div className="content">
        <div className="footer-division">
          {Asset.FooterColOneAsset.heading && (
            <h1>{Asset.FooterColOneAsset.heading}</h1>
          )}
          {Asset.FooterColOneAsset.text && (
            <p>{Asset.FooterColOneAsset.text}</p>
          )}
        </div>

        <div className="footer-division">
          <h2>Find Us</h2>
          {Asset.FooterColTwoAsset &&
            Asset.FooterColTwoAsset.map((data) => (
              <FooterFindUs
                heading={data.heading}
                text={data.text}
                icon={data.icon}
                key={data.id}
              />
            ))}
        </div>

        <div className="footer-division">
          <h2>{Asset.FooterCoLThreeAsset.heading}</h2>
          <p>{Asset.FooterCoLThreeAsset.text}</p>
          <p>{Asset.FooterCoLThreeAsset.text2}</p>

          <div id="Icons">
            {Asset.FooterCoLThreeAsset.icons.map((data) => (
              <div key={data.id}>
                <Image src={data.src} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </StyleX.Footer>
  );
};

export default Footer;
