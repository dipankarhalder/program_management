import "./styles/styles.scss";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

const rootelem = document.getElementById("root");
createRoot(rootelem).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
