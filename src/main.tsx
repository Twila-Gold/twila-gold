import { StrictMode } from "react";
import { hydrateRoot, createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "@/App";
import "@/styles.css";

const rootEl = document.getElementById("root")!;
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

if (rootEl.innerHTML.trim()) {
  hydrateRoot(rootEl, app);
} else {
  createRoot(rootEl).render(app);
}
