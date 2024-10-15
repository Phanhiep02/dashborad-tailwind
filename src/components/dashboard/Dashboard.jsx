import React from "react";
import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div>
      <h1>Dash board</h1>
      <Link className="underline" to="/products">
        go to product
      </Link>
    </div>
  );
}
