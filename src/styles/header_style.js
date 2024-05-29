import styled, { css } from "styled-components";

const HeaderHeight = "100px";
const HeaderHeightTablet = "80px";

// ? Css Helpers......................................
const Var_Flex = css`
  display: flex;
  align-items: center;
`;
const Var_Gap_1_rem = css`
  gap: 1rem;
`;
// ? Css Helpers......................................

// ! Styled Components ?????????????
export const Header = styled.header`
  ${Var_Flex};
  background-color: #22c997;
  color: #fff;
  padding: 0 6%;
  height: ${HeaderHeight};
  position: relative;

  .header-division {
    width: 100%;
    ${Var_Flex};
    justify-content: space-between;
  }
  .header-division-1 {
    display: none;
    @media (max-width: 426px) {
      display: flex;
    }
  }

  .header-division-2 {
    display: flex;
    @media (max-width: 426px) {
      display: none;
    }
  }
  @media (max-width: 768px) {
    padding: 0 5%;
    height: ${HeaderHeightTablet};
  }
  @media (max-width: 425px) {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
  }
`;
export const LogoDiv = styled.div`
  ${Var_Flex};
  ${Var_Gap_1_rem};

  @media (max-width: 768px) {
    gap: 0.5rem;
  }

  img {
    width: 68px;
    height: 68px;

    @media (max-width: 1024px) {
      width: 50px;
      height: 50px;
    }
  }

  h3 {
    font-size: 20px;
    font-weight: 600;
    transition: all ease 0.3s;
    cursor: none;

    &:hover {
      transform: rotateX(360deg);
    }

    @media (max-width: 1024px) {
      font-size: 1rem;
    }
  }
`;
export const UList = styled.ul`
  list-style: none;
  ${Var_Flex};
  gap: 4rem;

  @media (max-width: 1024px) {
    gap: 2rem;
  }
  @media (max-width: 426px) {
    flex-direction: column;
    gap: 2rem;
  }

  li {
    font-size: 20px;
    font-weight: 600;
    position: relative;
    overflow: hidden;
    cursor: pointer;

    &::before {
      content: "";
      width: 0%;
      height: 2px;
      border-radius: 100px;
      background: linear-gradient(to right, white, #22c997, white);
      position: absolute;
      left: 50%;
      bottom: 0;
      transition: all ease 0.3s;
    }
    &:hover::before {
      left: 5%;
      width: 90%;
    }
    &:hover {
      filter: drop-shadow(0 0 13px #fff);
    }
    @media (max-width: 1024px) {
      font-size: 1rem;
    }
    @media (max-width: 426px) {
      font-size: 1.2rem;
    }
  }
`;
export const TabletUList = styled.div`
  width: 100%;
  height: calc(100vh - ${HeaderHeight});
  background-color: #000;
  ${Var_Flex};
  position: fixed;
  top: ${HeaderHeightTablet};
  z-index: 2;
  left: ${(props) => (props.$showHide ? `0px` : `101%`)};
  transition: left ease 0.3s;

  @media (max-width: 768px) {
    height: calc(100vh - ${HeaderHeightTablet});
  }
  @media (max-width: 426px) {
    justify-content: center;
  }
`;
// ! Styled Components ?????????????
