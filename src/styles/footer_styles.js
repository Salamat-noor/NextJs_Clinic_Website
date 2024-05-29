import styled from "styled-components";

export const Footer = styled.div`
  height: 540px;
  display: flex;
  align-items: center;
  padding: 0 1%;
  background-color: rgb(13, 110, 99);
  color: #fff;

  @media (max-width: 1024px) {
    height: auto;
    padding: 5% 0;
  }
  div.content {
    display: grid;
    grid-template-columns: 35% 35% 15%;
    justify-content: space-around;

    @media (max-width: 1024px) {
      grid-template-columns: 40% 40%;
      grid-gap: 3rem;
    }

    @media (max-width: 768px) {
      grid-template-columns: 95%;
    }
    .footer-division {
      display: flex;
      flex-direction: column;
      align-items: start;
      text-align: left;
      gap: 1rem;
      height: 100%;

      @media (max-width: 768px) {
        width: 100%;
        padding: 0 5%;
      }
      h2 {
        font-size: 22px;
      }
      p {
        font-size: 18px;
      }

      #Icons {
        display: flex;
        align-items: center;
        gap: 12px;
        div {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          border: 1px solid #e9ecef;
          padding: 9px;
          border-radius: 8px;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .footer-division:first-child {
      h1 {
        font-size: 2rem;
      }
      p {
        font-size: 23px;
      }
    }
  }
`;
