import React from "react";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <div>
      <h1>Products</h1>
      <Link className="underline" to="/">
        go to dashboard
      </Link>
    </div>
  );
}
