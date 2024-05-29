import React from "react";
import styled from "styled-components";

const Button = (props) => {
  return <StyledButton type="button">{props.title}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  font-weight: 600;
  font-size: 20px;
  color: #0d6e63;
  border: 1px solid #0d6e63;
  border-radius: 8px;
  padding: 1rem 3rem;
`;
