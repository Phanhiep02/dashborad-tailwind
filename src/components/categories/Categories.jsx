import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Categories() {
  const navigate = useNavigate();
  return (
    <div>
      <button className="text-red-600" onClick={() => navigate("/")}>
        Back dashboard
      </button>
      <h1>category</h1>
    </div>
  );
}
