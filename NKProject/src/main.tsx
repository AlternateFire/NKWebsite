import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material";

const mainTheme = createTheme({
  palette: {
    primary: {
      main: "#161b22",
    },
    secondary: {
      main: "#202731",
    },
    text: {
      primary: "#ffffff",
    },
    background: {
      default: "#222222",
    },
  },

  typography: {
    h1: {
      fontSize: "3rem",
      fontWeight: 600,
      fontFamily: "sans-serif"
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    h6: {
      fontSize: "1.5rem",
      fontWeight: 500,
      fontFamily: "serif",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
