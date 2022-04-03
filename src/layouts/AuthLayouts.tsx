import React from "react";
import { Outlet } from "react-router-dom";
import { users } from "../data/rootSelector";

const AuthLayouts: React.FC = (): JSX.Element => {
  return (
    <div className="min-h-screen flex bg-purple-300 py-12 px-2 sm:px-3 lg:px-3 ">
      <Outlet />
    </div>
  );
};

export default AuthLayouts;
