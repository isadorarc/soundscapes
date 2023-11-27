import React from "react";
import ReactDOM from "react-dom/client";
import App from "./original-code.js";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const defaultTheme = createTheme({
  palette: {
    radio: {
      colorPrimary: {
        "&$checked": {
          color: "blue",
        },
      },
      checked: {},
    },
    primary: {
      main: "#5e17eb",
    },
    secondary: {
      main: "#a3e6fa",
    },
    neutral: {
      contrastText: "#FFFFFF",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
