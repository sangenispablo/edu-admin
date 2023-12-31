import { BrowserRouter } from "react-router-dom";

import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme";

export const App = () => {
  return (
    <AppTheme>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AppTheme>
  );
};
