import React from "react";
import styled from "styled-components";

const MapContent = () => {
  return (
    <StyledContainer>
      <div>Clinic Name</div>

      <iframe
        className="w-[100%]"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d106277.44568957966!2d72.97715206797137!3d33.65275214128753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1716812925859!5m2!1sen!2s"
        height="300"
        loading="lazy"
      ></iframe>
    </StyledContainer>
  );
};

export default MapContent;

const StyledContainer = styled.div`
  div {
    background-color: rgb(13, 110, 99);
    color: #fff;
    font-size: 1.3rem;
    padding: 1rem 0;
  }
`;
