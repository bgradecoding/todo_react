import React from "react";
import { useRoutes } from "react-router-dom";
import PublicLayouts from "./layouts/PublicLayouts";
import LoginPage from "./pages/public/LoginPage";

const App: React.FC = () => {
  const publicRoutes = {
    path: "/",
    element: <PublicLayouts />,
    children: [{ path: "login", element: <LoginPage /> }],
  };

  const routing = useRoutes([publicRoutes]);

  return <>{routing}</>;
};

export default App;
