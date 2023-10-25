import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AddProduct from "./Components/AddProduct";
import Registration from "./Authentications/Registration";
import RootLayout from "./Components/RootLayout";
import Home from "./Components/Home";
import ErrorPage from "./Components/ErrorPage";

import MyCart from "./Components/MyCart";
import Login from "./Authentications/Login";
import AuthProvider from "./Provider/AuthProvider";
import PrivateRoute from "./Privateroute/PrivateRoute";
import Products from "./Components/Products";
import ProductDetails from "./Components/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout> </RootLayout>,
    errorElement: <ErrorPage> </ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home> </Home>,
        // loader: () => fetch("/data.json"),
        loader: () => fetch("/data.json"),
      },

      {
        path: "/AddProduct",
        element: (
          <PrivateRoute>
            <AddProduct> </AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/mycart",
        element: (
          <PrivateRoute>
            <MyCart> </MyCart>
          </PrivateRoute>
        ),
      },
      {
        path: "/Registration",
        element: <Registration> </Registration>,
      },
      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/products/:brand",
        element: <Products />,

        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.brand}`),
      },
      {
        path: "/productDetails/:_id",
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params._id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
