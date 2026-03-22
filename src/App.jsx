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
import { ToastContainer, toast } from "react-toastify";
import AllProducts from "./pages/allproducts/AllProducts";
function App() {
  return (
    <MyState>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/order"
          element={
            <ProtectedRoutes>
              <Order />
            </ProtectedRoutes>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoutesForAdmin>
              <Dashboard />
            </ProtectedRoutesForAdmin>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/allproducts" element={<AllProducts />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/productinfo/:id" element={<ProductInfo />} />
       
        <Route
          path="/addproduct"
          element={
            <ProtectedRoutesForAdmin>
              <AddProduct />
            </ProtectedRoutesForAdmin>
          }
        />


        <Route
          path="/updateproduct"
          element={
            <ProtectedRoutesForAdmin>
              <UpdateProduct />
            </ProtectedRoutesForAdmin>
          }
        />


        <Route path="*" element={<NoPage />} />
      </Routes>
      <ToastContainer />
    </MyState>
  );
}

export default App;

//user
export const ProtectedRoutes = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

// admin

export const ProtectedRoutesForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));

  if (admin?.user?.email === "amitbhivsane@gmail.com") {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};
