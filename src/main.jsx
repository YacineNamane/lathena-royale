import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { LoadingProvider } from "./context/LoadingContext.jsx";

import "./styles/reset.css";
import "./styles/fonts.css";
import "./styles/variables.css";
import "./styles/globals.css";
import router from "./router/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoadingProvider>
      <RouterProvider router={router} />
    </LoadingProvider>
  </StrictMode>,
);
