/**
 * Router
 */

import { BrowserRouter, Route, Routes, Navigate, Outlet } from "react-router";
import { Home, Login, Register } from "@/pages";
import { useSession } from "@/hooks";

const ProtectedRoute = () => {
  const { session } = useSession(); // Assuming user is null when not authenticated
  if (!session || !session.username) {
    return <Navigate to="/login" replace />; // Redirect to login if not authenticated
  }
  return <Outlet />; // Render the requested route if authenticated
};

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/*Public Routes*/}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/*Private Routes*/}
        <Route element={<ProtectedRoute />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
