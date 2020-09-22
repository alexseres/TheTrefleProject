import React from "react";
import styled from "styled-components";

const Navbar = (props) => {
  return <Header></Header>;
};

const Header = styled.header`
  background-color: #eeefff;
  text-align: center;
  padding: 15px;
  font-family: ${(props) => props.theme.fontFamily};
  &:hover {
    background-color: #eee6ff;
  }
`;

export default Navbar;
