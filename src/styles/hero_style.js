import Image from "next/image";
import styled, { css, keyframes } from "styled-components";
import img from "@/assets/Images/image 1.svg";
import img2 from "@/assets/Images/image 2.svg";



// ? CSS Helpers ...................
const width_Full_Height_Full = css`
  width: 100%;
  height: 100%;
`;
const Flex_Y_Center = css`
  display: flex;
  align-items: center;
`;
// ? CSS Helpers ...................

// ! Styled Components ????????????????

export const Hero = styled.div`
  ${width_Full_Height_Full};
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1rem;
  }
`;
export const HeroContentContainer = styled.div`
  ${width_Full_Height_Full};
  ${Flex_Y_Center};
  overflow: hidden;
  justify-content: center;
  position: relative;

  @media (max-width: 768px) {
    justify-content: start;
  }
`;
export const IMG = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const HeroTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  padding: 3em 0;

  @media (max-width: 768px) {
    padding: 10% 5%;
  }
  h1 {
    font-weight: 500;
    font-size: 64px;

    @media (max-width: 1280px) {
      font-size: 45px;
    }
    @media (max-width: 1024px) {
      font-size: 35px;
    }
    @media (max-width: 768px) {
      font-size: 45px;
    }
    @media (max-width: 425px) {
      font-size: 30px;
    }
  }
  p {
    font-weight: 400;
    font-size: 24px;

    @media (max-width: 1280px) {
      font-size: 19px;
    }
    @media (max-width: 1024px) {
      font-size: 15px;
    }
    @media (max-width: 768px) {
      font-size: 18px;
    }
    @media (max-width: 425px) {
      font-size: 15px;  
    }
  }
  #ExtraContent {
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: start;
    h3 {
      font-weight: 600;
      font-size: 32px;
      color: #343a40;

      @media (max-width: 1280px) {
        font-size: 26px;
      }
      @media (max-width: 1024px) {
        font-size: 20px;
      }
    }

    #InnerExtraContent {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      .flex {
        align-items: start;
        gap: 0.5rem;

        div {
          display: flex;
          flex-direction: column;
          align-items: start;
          gap: 0.1rem;
        }
      }
      h5 {
        font-family: Inter;
        font-weight: 600;
        font-size: 16px;
        color: #343a40;

        @media (max-width: 1280px) {
          font-size: 16px;
        }
        @media (max-width: 1024px) {
          font-size: 13px;
        }
      }
      p {
        font-family: Inter;
        font-weight: 400;
        font-size: 14px;

        @media (max-width: 1024px) {
          font-size: 12px;
        }
      }
    }
  }
`;
export const FloatContent = styled.div`
  width: 50%;
  ${Flex_Y_Center};
  position: absolute;
  left: 50%;
  bottom: 8%;
  transform: translate(-50%, 8%);
  padding: 0.6rem 0.6rem;
  flex-direction: column;
  background-color: #fff;

  h3 {
    font-weight: 500;
    font-size: 24px;
    color: #0d6e63;
    position: relative;

    &::after {
      content: "";
      width: 95%;
      height: 2px;
      background-color: #22c997;
      position: absolute;
      left: 5%;
      bottom: 0;
      transform: translate(-2.5%, 0%);
    }
    @media (max-width: 1280px) {
      font-size: 20px;
    }
    @media (max-width: 1024px) {
      font-size: 18px;
    }
  }
  h6 {
    margin: 0.8rem 0 0.5rem 0;
    font-size: 16px;
    font-weight: 500;
    color: #343a40;

    @media (max-width: 1280px) {
      font-size: 13px;
    }
    @media (max-width: 1024px) {
      font-size: 12px;
    }
  }
  p {
    font-weight: 400;
    font-size: 1rem;
    color: #343a40;

    @media (max-width: 1280px) {
      font-size: 12px;
    }
    @media (max-width: 1024px) {
      font-size: 10px;
    }
  }
`;
export const LeftArrow = styled.span`
  position: absolute;
  top: 50%;
  left: 1%;
  transform: translate(-0.5%, -50%);
  font-size: 2rem;
  color: #333;
`;
export const RightArrow = styled.span`
  position: absolute;
  top: 50%;
  right: 1%;
  transform: translate(0.5%, -50%);
  font-size: 2rem;
  color: #333;
`;
export const Shader = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000;
  position: absolute;
  top: 0;
  left: 0;
`;
// ! Styled Components ????????????????
