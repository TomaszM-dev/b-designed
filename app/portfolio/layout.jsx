import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <h1 className="text-[5.5rem] font-[700] gradientText text-center">
        Our Works
      </h1>
      {children}
    </div>
  );
};

export default Layout;
