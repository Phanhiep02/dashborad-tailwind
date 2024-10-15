import { Routes, Route } from "react-router-dom";
import Products from "./components/Products/Products";
import Layout from "./components/shared/Layout";
import Dashboard from "./components/dashboard/Dashboard";
import Categories from "./components/categories/Categories";
export default function App() {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<Layout></Layout>}>
            <Route index element={<Dashboard></Dashboard>}></Route>
            <Route path="products" element={<Products></Products>}></Route>
            <Route
              path="categories"
              element={<Categories></Categories>}
            ></Route>
          </Route>
          <Route path="/login" element={<div>login</div>}></Route>
        </Routes>
      </div>
    </div>
  );
}
