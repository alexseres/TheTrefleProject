import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooter>
      <p>Footer</p>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  position: fixed;
  left: 0%;
  bottom: 0;
  width: 100%;
  background-color: #006600;
  color: white;
  text-align: center;
  margin-bottom: 20px;
`;
