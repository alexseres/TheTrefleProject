import React, { useContext } from "react";
import styled from "styled-components";
import { MyThemeProvider } from "../ThemeContext";

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
  text-align: center;
`;
