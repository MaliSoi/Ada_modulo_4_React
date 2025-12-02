import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeToggler() {
    const {theme, toggleTheme } = useContext(ThemeContext);

    return(
        <div
      style={{
        padding: "20px",
        borderRadius: "8px",
        textAlign: "center",
        backgroundColor: theme === "light" ? "#f4f4f4" : "#333",
        color: theme === "light" ? "#333" : "#fff",
        transition: "0.3s ease",
      }}
    >
      <p>Tema actual: <strong>{theme}</strong></p>
      <button onClick={toggleTheme}>
        Cambiar a {theme === "light" ? "dark" : "light"}
      </button>
    </div>
  );
}