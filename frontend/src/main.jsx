import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AuthContaxt from "./context/authContaxt.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthContaxt>
      <App />
    </AuthContaxt>
  </BrowserRouter>,
);
