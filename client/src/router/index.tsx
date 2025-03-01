/**
 * Router
 */

import { BrowserRouter, Route, Routes } from "react-router";
import { Home, Login, Register } from "@/pages";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
