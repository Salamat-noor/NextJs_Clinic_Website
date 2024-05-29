import React, { useEffect, useState } from "react";
import Image from "next/image";
import * as Asset from "@/assets/hero_assets";
import * as StyleX from "@/styles/hero_style";
import Button from "./sub-components/button";
import FormContent from "./sub-components/hero-form";
import MapContent from "@/components/sub-components/hero-map";

const Hero = () => {
  const [checkImg, setCheckImg] = useState(null);

  return (
    // *!_____________HERO-GRID-VIEW_____________
    <StyleX.Hero>
      {Asset.HeroAsset &&
        Asset.HeroAsset.map((data, index) => (
          <StyleX.HeroContentContainer key={data.id}>
            {!data.src && (
              <StyleX.HeroTextBox>
                <div>
                  {data.heading1 && <h1>{data.heading1}</h1>}
                  {data.heading2 && <h1>{data.heading2}</h1>}
                </div>
                <div>
                  {data.text && <p>{data.text}</p>}
                  {data.textLineTwo && <p>{data.textLineTwo}</p>}
                  {data.textLineThree && <p>{data.textLineThree}</p>}
                </div>

                {data.category === "subsub" && (
                  <div id="ExtraContent">
                    <div>{data.subheading && <h3>{data.subheading}</h3>}</div>
                    <div>
                      {data.subtext && <p>{data.subtext}</p>}
                      {data.subtextLineTwo && <p>{data.subtextLineTwo}</p>}
                      {data.subtextLineThree && <p>{data.subtextLineThree}</p>}
                    </div>
                    <div id="InnerExtraContent">
                      <div className="flex">
                        <Image
                          src={data.phoneIMG}
                          alt=""
                          width={22}
                          height={"auto"}
                        />
                        <div>
                          {data.subSubHeading && <h5>{data.subSubHeading}</h5>}
                          {data.subSubHeadingTxT && (
                            <p>{data.subSubHeadingTxT}</p>
                          )}
                        </div>
                      </div>
                      <div className="flex">
                        <Image
                          src={data.whatsAppIMG}
                          alt=""
                          width={22}
                          height={"auto"}
                        />
                        <div>
                          {data.subSubHeading2 && (
                            <h5>{data.subSubHeading2}</h5>
                          )}
                          {data.subSubHeadingTxT2 && (
                            <p>{data.subSubHeadingTxT2}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {data.btnTxT && <Button title={data.btnTxT} />}
              </StyleX.HeroTextBox>
            )}

            {/* //?__________________IMG-CONTENT- START___________________*/}
            {data.src && (
              <>
                  <StyleX.IMG
                    src={data.src}
                    alt={data.id}
                    width={100}
                    height={100}
                    onMouseEnter={() => setCheckImg(index)}
                    onMouseLeave={() => setCheckImg(null)}
                  />

                {index === checkImg && <StyleX.Shader></StyleX.Shader>}

                {/* //todo________________FLOATING-CONTENT-ON-IMAGE-ID-6___________________*/}
                {data.category === "floatContent" && (
                  <StyleX.FloatContent>
                    {data.drName && <h3>{data.drName}</h3>}
                    {data.profession && <h6>{data.profession}</h6>}
                    {data.intro && <p>{data.intro}</p>}
                    {data.intro2 && <p>{data.intro2}</p>}
                    {data.intro3 && <p>{data.intro3}</p>}
                  </StyleX.FloatContent>
                )}
                {/* //todo________________FLOATING-CONTENT-ON-IMAGE-ID-6___________________*/}
                {/* //todo ________________NAVIGATE-ARROWS-ON-IMAGE-6__________________*/}
                {data.arrow === "arrows" && (
                  <>
                    <StyleX.LeftArrow> {"<"} </StyleX.LeftArrow>
                    <StyleX.RightArrow> {">"} </StyleX.RightArrow>
                  </>
                )}
                {/* //todo________________NAVIGATE-ARROWS-ON-IMAGE-6__________________*/}
              </>
            )}
            {/* //? --------------IMG Content  ENDDDDDD-------------------- */}
          </StyleX.HeroContentContainer>
        ))}
      <FormContent />
      <div>
        <MapContent />
        <MapContent />
        <MapContent />
      </div>

      {/* // *!_____________HERO-GRID-VIEW_____________ */}
    </StyleX.Hero>
  );
};

export default Hero;
