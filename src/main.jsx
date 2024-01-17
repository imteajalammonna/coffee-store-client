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
import Details from "./Pages/Details";
import Login from "./Pages/Login";
import AuthProvider from "./components/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://coffee-store-server-9ksmicv77-monnas-projects.vercel.app/coffee')
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
        loader: () => fetch('https://coffee-store-server-9ksmicv77-monnas-projects.vercel.app/coffee')
      },
      {
        path: "/details",
        element: <Details></Details>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateACoffee></UpdateACoffee>,
        loader: ({ params }) => fetch(`https://coffee-store-server-9ksmicv77-monnas-projects.vercel.app/coffee/${params.id}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);