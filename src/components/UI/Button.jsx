import React from "react";
import styled from "styled-components";

export const Button = ({ children, type, onClick, ...rest }) => {
  return (
    <StyledButton type={type} onClick={onClick} {...rest}>
      {children}
    </StyledButton>
  );
};
const StyledButton = styled.button`
  border: none;
  cursor: pointer;
`;
