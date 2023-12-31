import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Heading from "./Heading";
import SideNavBar from "../components/SideNavBar";
import RightBar from "../components/RightBar";

export default function RootLayout() {
  const location = useLocation();

  return (
    <div className="grid relative min-h-screen grid-rows-rootLayout font-Libre">
      <Heading />
      <div className="grid grid-cols-rootColLayout pt-4 justify-center relative">
        <SideNavBar />
        <Outlet />
        {location.pathname === "/" ? <RightBar /> : <div></div>}
      </div>
    </div>
  );
}
