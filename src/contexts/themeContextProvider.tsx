import { useState } from "react";
import { ThemeContext } from "./themeContext";
import { ThemeContextType } from "./themeContext";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const themeContextValue: ThemeContextType = {
    theme,
    toggleTheme,
  };
  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
