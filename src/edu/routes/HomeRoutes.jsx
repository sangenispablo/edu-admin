import { Navigate, Route, Routes } from "react-router-dom";

import { HomePage } from "../pages/HomePage";

export const HomeRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* Si se pone cualquier cosa en el home lo lleva al home */}
      <Route path="/*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};
