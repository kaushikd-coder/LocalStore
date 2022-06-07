import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/layout/Header/Header.js";
import WebFont from "webfontloader";
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js";
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions.js";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile.js";
import ProtectedRoute from "./component/Route/ProtectedRoute.js";
import UpdateProfile from "./component/User/UpdateProfile.js";
import UpdatePassword from "./component/User/UpdatePassword.js";
import ForgotPassword from "./component/User/ForgotPassword.js";
import ResetPassword from "./component/User/ResetPassword.js";
import Cart from "./component/Cart/Cart.js";
import Shipping from "./component/Cart/Shipping.js";
import ConfirmOrder from "./component/Cart/ConfirmOrder.js";
import Payment from "./component/Cart/Payment.js";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import OrderSuccess from "./component/Cart/OrderSuccess.js";
import MyOrders from "./component/Order/MyOrders.js";
import OrderDetails from "./component/Order/OrderDetails.js";
import Dashboard from "./component/Admin/Dashboard.js";
import AdminRoute from "./component/Route/AdminRoute";
import ProductList from "./component/Admin/ProductList.js";
import NewProduct from "./component/Admin/NewProduct.js";
import UpdateProduct from "./component/Admin/UpdateProduct.js";
import OrderList from "./component/Admin/OrderList.js";
import ProcessOrder from "./component/Admin/ProcessOrder.js";
import UsersList from "./component/Admin/UsersList.js";
import UpdateUser from "./component/Admin/UpdateUser.js";
import ProductReviews from "./component/Admin/ProductReviews.js";
import Contact from "./component/layout/Contact/Contact.js";
import About from "./component/layout/About/About.js";
import NotFound from "./component/layout/Not Found/NotFound.js";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());

    getStripeApiKey();
  }, []);

  return (
    <Router>
      <Header />

      {isAuthenticated && <UserOptions user={user} />}

      <Routes>
        <Route
          exact
          path="/process/payment"
          element={
            <ProtectedRoute>
              <Elements stripe={loadStripe(stripeApiKey)}>
                {" "}
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />{" "}
        <Route exact path="/products" element={<Products />} />{" "}
        <Route path="/products/:keyword" element={<Products />} />
        <Route exact path="/search" element={<Search />} />{" "}
        <Route exact path="/login" element={<LoginSignUp />} />
        <Route
          exact
          path="/account"
          element={
            <ProtectedRoute>
              {" "}
              <Profile />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/me/update"
          element={
            <ProtectedRoute>
              {" "}
              <UpdateProfile />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/password/update"
          element={
            <ProtectedRoute>
              {" "}
              <UpdatePassword />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/shipping"
          element={
            <ProtectedRoute>
              {" "}
              <Shipping />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/order/confirm"
          element={
            <ProtectedRoute>
              {" "}
              <ConfirmOrder />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/password/forgot"
          element={<ForgotPassword />}
        />{" "}
        <Route
          exact
          path="/password/reset/:token"
          element={<ResetPassword />}
        />
        <Route exact path="/cart" element={<Cart />} />
        <Route
          exact
          path="/success"
          element={
            <ProtectedRoute>
              <OrderSuccess />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/orders"
          element={
            <ProtectedRoute>
              <MyOrders />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/order/:id"
          element={
            <ProtectedRoute>
              <OrderDetails />
            </ProtectedRoute>
          }
        />
        {/* ADMIN-Routes */}
        <Route
          exact
          path="/admin/dashboard"
          element={
            <AdminRoute isAdmin={true}>
              <Dashboard />
            </AdminRoute>
          }
        />
        <Route
          exact
          path="/admin/products"
          element={
            <AdminRoute isAdmin={true}>
              <ProductList />
            </AdminRoute>
          }
        />
        <Route
          exact
          path="/admin/product"
          element={
            <AdminRoute isAdmin={true}>
              <NewProduct />
            </AdminRoute>
          }
        />
        <Route
          exact
          path="/admin/product/:id"
          element={
            <AdminRoute isAdmin={true}>
              <UpdateProduct />
            </AdminRoute>
          }
        />
        <Route
          exact
          path="/admin/orders"
          element={
            <AdminRoute isAdmin={true}>
              <OrderList />
            </AdminRoute>
          }
        />
        <Route
          exact
          path="/admin/order/:id"
          element={
            <AdminRoute isAdmin={true}>
              <ProcessOrder />
            </AdminRoute>
          }
        />
        <Route
          exact
          path="/admin/users"
          element={
            <AdminRoute isAdmin={true}>
              <UsersList />
            </AdminRoute>
          }
        />
        <Route
          exact
          path="/admin/user/:id"
          element={
            <AdminRoute isAdmin={true}>
              <UpdateUser />
            </AdminRoute>
          }
        />
         <Route
          exact
          path="/admin/reviews"
          element={
            <AdminRoute isAdmin={true}>
              <ProductReviews />
            </AdminRoute>
          }
        />

        <Route path="*" exact={true} element={ <NotFound />}/>
        {/* <Route exact path="/account" element={
                              loading === false &&
                              isAuthenticated ?
                              <Profile/> :
                              <Navigate  to="/login" />          
                              } /> */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
