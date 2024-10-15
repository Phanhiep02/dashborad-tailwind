import React from "react";
import { Link, NavLink } from "react-router-dom";
// import { FcBullish } from "react-icons/fc";
export default function SliderBar() {
  return (
    <div className="bg-neutral-900 w-60 text-white flex flex-col p-3">
      <div className="flex-1">
        <div className="flex align-center gap-2 px-1 py-3">
          <span className="">icon</span>
          <span>Open shop</span>
          {/* <FcBullish /> */}
        </div>
        <div className="flex flex-col">
          <NavLink to="/categories">categories</NavLink>
          <NavLink to="/products">product</NavLink>
        </div>
      </div>
      <div className="">bottom bart</div>
    </div>
  );
}
