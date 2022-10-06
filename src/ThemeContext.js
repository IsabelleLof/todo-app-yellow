import { createContext } from "react";

export const themes = {
    dark: "",
    light: "light-content", 
    backgroundColor: "black",
};

export const ThemeContext = createContext({
    theme: themes.dark,
   changeTheme: () => {} 
});