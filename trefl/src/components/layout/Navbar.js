import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import img from "./headerGreenPicture2.png";
import ThemeContext from "../context/ThemeContext";
import AppTheme from "../Colors";
import ThemeToggler from "../ThemeToggler";

const Navbar = (props) => {
  const [theme, setTheme] = useContext(ThemeContext);
  const currentTheme = AppTheme[theme];

  return (
    <Header style={{ color: "white" }}>
      <Title primary>Green Power Rangers</Title>
      <Link style={linkStyle} to="/">
        Home{" "}
      </Link>{" "}
      |
      <Link style={linkStyle} to="/search">
        {" "}
        Search{" "}
      </Link>{" "}
      |
      <Link style={linkStyle} to="/plant-details">
        {" "}
        Plant Details{" "}
      </Link>{" "}
      |
      <ThemeToggler style={{ float: "right" }} />
    </Header>
  );
};

const Header = styled.header`
  border: 1px solid #000;
  background-image: url(${img});
  text-align: center;
  padding: 15px;
  font-family: "Comic Sans MS";
  img {
    max-width: 100%;
    height: auto;
  }
`;

const linkStyle = {
  color: "white",
  textDecoration: "none",
};

const Title = styled.h1`
  font-family: "Comic Sans MS";
  font-size: 1em;
  text-align: center;
  color: green;
`;

export default Navbar;
