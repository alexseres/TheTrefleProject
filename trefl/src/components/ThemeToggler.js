import React, { useContext } from "react";
import ThemeContext from "./context/ThemeContext";

const ThemeTogglerStyle = {
  cursor: "pointer",
};

const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  return (
    <div
      style={ThemeTogglerStyle}
      onClick={() => {
        setThemeMode(themeMode === "light" ? "dark" : "light");
      }}
    >
      <span title="switch theme">{themeMode === "light" ? "🌙" : "☀️"}</span>
    </div>
  );
};

export default ThemeToggler;
