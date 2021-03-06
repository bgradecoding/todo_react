import TodoMain from "./pages/todo/TodoMain";
import React from "react";
import { useRoutes } from "react-router-dom";
import PublicLayouts from "./layouts/PublicLayouts";
import LoginPage from "./pages/public/LoginPage";
import AuthLayouts from "./layouts/AuthLayouts";
import SignUpPage from "./pages/public/SignUpPage";

type Props = {
  history: any;
};

const App: React.FC<Props> = ({ history }) => {
  const publicRoutes = {
    path: "/",
    element: <PublicLayouts />,
    children: [
      { path: "/", element: <LoginPage /> },
      { path: "/signup", element: <SignUpPage /> },
    ],
  };

  const todoRoutes = {
    path: "/",
    element: <AuthLayouts />,
    children: [{ path: "/todo", element: <TodoMain /> }],
  };

  const routing = useRoutes([publicRoutes, todoRoutes]);

  return <>{routing}</>;
};

export default App;
