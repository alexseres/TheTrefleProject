import React, { createContext, useState, setState, useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import { backgroundColor, textColor } from "../theme";

const ThemeToggleContext = createContext({
  toggle: () => {
    console.log("toggle coming next");
  },
});

export const useTheme = () => useContext(ThemeToggleContext);

export const MyThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = useState({
    mode: "light",
  });

  const toggle = () => {
    const mode = themeState.mode === "light" ? "dark" : "light";

    setThemeState({ mode: mode });
  };

  const Wrapper = styled.div`
    background-color: ${backgroundColor};
    color: ${textColor};
  `;

  return (
    <ThemeToggleContext.Provider value={{ toggle: toggle }}>
      <ThemeProvider theme={{ mode: themeState.mode }}>
        <Wrapper>{children}</Wrapper>
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};

export default ThemeProvider;
