import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import AppRouter from "./router/index";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./global.scss";
import "./assets/fonts/Roboto/Roboto-Regular.ttf";
import "./assets/fonts/Roboto/Roboto-Light.ttf";
import "./assets/fonts/Roboto/Roboto-Bold.ttf";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  </StrictMode>
);
