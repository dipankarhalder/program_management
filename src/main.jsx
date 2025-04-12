import "./styles/styles.scss";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";

const rootelem = document.getElementById("root");
createRoot(rootelem).render(
  <StrictMode>
    <App />
  </StrictMode>
);
