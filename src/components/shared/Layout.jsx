import React from "react";
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <>
      <div className="bg-sky-100">Slider bar</div>
      <div className="bg-teal-200">header</div>
      <div>
        <Outlet></Outlet>
      </div>
      <div>Footer</div>
    </>
  );
}
