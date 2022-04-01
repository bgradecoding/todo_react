import React from "react";
import { Outlet } from "react-router-dom";

const PublicLayouts: React.FC = (): JSX.Element => {
  return (
    <div className="h-14 relative min-h-screen flex items-center justify-center bg-purple-300 py-12 px-4 sm:px-6 lg:px-8 ">
      <Outlet />
    </div>
  );
};

export default PublicLayouts;
