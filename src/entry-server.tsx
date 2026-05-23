import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { StrictMode } from "react";
import App from "./App";

export function render(url: string): string {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  );
}
