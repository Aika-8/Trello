import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { HeaderWelcomePage } from "../components/HeaderWelcomePage";

export const PublicLayout = () => {
  const location = useLocation();
  const isSignUpPage = location.pathname === "/signUp";
  return (
    <div>
      {!isSignUpPage && <HeaderWelcomePage />}
      <Outlet />
    </div>
  );
};
