import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import ProductForm from "./Pages/ProductForm";
import UpdateACoffee from "./Pages/UpdateACoffee";
import ProductPage from "./Pages/ProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/coffee')
      },
      {
        path: "/productForm",
        element: <ProductForm></ProductForm>
      },
      // {
      //   path: "/updateCoffee",
      //   element: <UpdateACoffee></UpdateACoffee>
      // },
      {
        path: "/coffee",
        element: <ProductPage></ProductPage>,
        loader: () => fetch('http://localhost:5000/coffee')
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateACoffee></UpdateACoffee>,
        loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);