import { Route, Routes } from "react-router-dom";

import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { HomeRoutes } from "../edu/routes/HomeRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      {/* Login y Register */}
      <Route path="/auth/*" element={<AuthRoutes />} />

      {/* Rutas cuando se esta logeado */}
      <Route path="/*" element={<HomeRoutes />} />
    </Routes>
  );
};
