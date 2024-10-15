import React from "react";
import { Outlet } from "react-router-dom";
import SliderBar from "./SliderBar";
export default function Layout() {
  return (
    // h-screen để full màn hình
    <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
      <SliderBar></SliderBar>
      <div className="p-4">
        <div className="bg-teal-200">header</div>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
      <div>Footer</div>
    </div>
  );
}
