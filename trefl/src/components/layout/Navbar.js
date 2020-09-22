import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import img from './headerGreenPicture2.png'


const Navbar = (props) => {
  return<Header>
          <Title primary>Green Power Rangers</Title>
          <Link style={linkStyle} to="/">Home </Link> |
          <Link style={linkStyle} to="/search"> Search </Link> |
          <Link style={linkStyle} to="/plant-details"> Plant Details </Link> |
        </Header>;
};

const Header = styled.header`
  border: 1px solid #000;
  background-image: url(${img});
  /* background-color: #66ff99; */
  text-align: center;
  padding: 15px;
  /* font-family: ${(props) => props.theme.fontFamily};
  &:hover {
    background-color: #eee6ff;
  } */
  font-family: "Comic Sans MS";
  img{
    max-width: 100%;
    height:auto
  }
`;

const linkStyle = {
  color: 'white',
  textDecoration: 'none'
}

const Title = styled.h1`
  font-family: "Comic Sans MS";
  font-size: 1.em;
  text-align: center;
  color: green;
`




export default Navbar;
