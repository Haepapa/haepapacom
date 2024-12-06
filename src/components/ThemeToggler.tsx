import React from "react";
import SunIcon from "./images/SunIcon";
import MoonIcon from "./images/MoonIcon";

function ThemeToggler() {
  const [theme, setTheme] = React.useState("light");
  const nextTheme = theme === "light" ? "dark" : "light";

  React.useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <span onClick={() => setTheme(nextTheme)}>
      {theme === "light" ? <SunIcon /> : <MoonIcon />}
    </span>
  );
}

export default ThemeToggler;
