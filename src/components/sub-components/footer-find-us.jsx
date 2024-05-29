import Image from "next/image";
import React from "react";
import styled from "styled-components";

const FooterFindUs = ({ heading, text, icon }) => {
  return (
    <FindUs>
      <Image src={icon} alt="" width={21} height={13} />
      <div>
        <h4>{heading}</h4>
        <p>{text}</p>
      </div>
    </FindUs>
  );
};

export default FooterFindUs;

const FindUs = styled.div`
  display: flex;
  align-items: start;
  gap: 0.5rem;
`;
