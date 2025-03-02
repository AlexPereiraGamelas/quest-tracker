/**
 * Router
 */

import { BrowserRouter, Route, Routes, Navigate, Outlet } from "react-router";
import { Adventure, Home, Login, Register } from "@/pages";
import { useSession } from "@/hooks";

const ProtectedRoute = () => {
  const { session } = useSession(); // Assuming user is null when not authenticated
  if (!session || !session.username) {
    return <Navigate to="/login" replace />; // Redirect to login if not authenticated
  }
  return <Outlet />; // Render the requested route if authenticated
};

const NoSessionRoute = () => {
  const { session } = useSession(); // Assuming user is null when not authenticated
  if (session && session.username) {
    return <Navigate to="/" replace />; // Redirect to login if not authenticated
  }
  return <Outlet />; // Render the requested route if authenticated
};

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NoSessionRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route index element={<Home />} />
          <Route path="/adventure/:id" element={<Adventure />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
