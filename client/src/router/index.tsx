/**
 * Router
 */

import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "@/pages";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
