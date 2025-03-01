/**
 * Router
 */

import { BrowserRouter, Route, Routes } from "react-router";
import { Home, Login } from "@/pages";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
