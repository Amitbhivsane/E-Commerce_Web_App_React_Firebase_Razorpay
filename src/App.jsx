import React from "react";
import Home from "./pages/home/Home";
import Order from "./pages/Order/Order";
import Cart from "./pages/cart/Cart";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import NoPage from "./pages/nopage/NoPage";
import { Navigate, Route, Routes } from "react-router-dom";
import MyState from "./context/data/myState";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import ProductInfo from "./pages/productInfo/ProductInfo";
import AddProduct from "./pages/admin/pages/AddProduct";
import UpdateProduct from "./pages/admin/pages/UpdateProduct";
import { ToastContainer } from "react-toastify";
import AllProducts from "./pages/allproducts/AllProducts";

function App() {
  return (
    <MyState>
      <Routes>
        {/* ================= PUBLIC ROUTES ================= */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/productinfo/:id" element={<ProductInfo />} />

        {/* ================= USER PROTECTED ================= */}
        <Route
          path="/order"
          element={
            <ProtectedRoutes>
              <Order />
            </ProtectedRoutes>
          }
        />

        {/* ================= ADMIN PROTECTED ================= */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoutesForAdmin>
              <Dashboard />
            </ProtectedRoutesForAdmin>
          }
        />

        <Route
          path="/addproduct"
          element={
            <ProtectedRoutesForAdmin>
              <AddProduct />
            </ProtectedRoutesForAdmin>
          }
        />

        {/* ✅ FIXED: dynamic id */}
        <Route
          path="/updateproduct/:id"
          element={
            <ProtectedRoutesForAdmin>
              <UpdateProduct />
            </ProtectedRoutesForAdmin>
          }
        />

        {/* ================= FALLBACK ================= */}
        <Route path="*" element={<NoPage />} />
      </Routes>

      <ToastContainer />
    </MyState>
  );
}

export default App;

///////////////////////////////////////////////////////////
// ✅ USER PROTECTED ROUTE
///////////////////////////////////////////////////////////

export const ProtectedRoutes = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user") || "null");

  return user ? children : <Navigate to="/login" />;
};

///////////////////////////////////////////////////////////
// ✅ ADMIN PROTECTED ROUTE
///////////////////////////////////////////////////////////

export const ProtectedRoutesForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user") || "null");

  return admin?.user?.email === "amitbhivsane@gmail.com" ? (
    children
  ) : (
    <Navigate to="/login" />
  );
};
