import { Route, Routes } from "react-router-dom";

import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { HomeRoutes } from "../edu/routes/HomeRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/*" element={<HomeRoutes />} />
    </Routes>
  );
};
