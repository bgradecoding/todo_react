import React from "react";
import { Outlet } from "react-router-dom";
import { users } from "../data/rootSelector";

const AuthLayouts: React.FC = (): JSX.Element => {

  
  return (
    <div className="h-14 relative min-h-screen flex items-center justify-center bg-purple-300 py-12 px-4 sm:px-6 lg:px-8 ">
      <div>todo</div>
      <Outlet />
    </div>
  );
};

export default AuthLayouts;
