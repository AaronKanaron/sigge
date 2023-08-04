import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./default.scss";
import Index from "./routes/index.jsx";
import ErrorPage from "./error-page";
// import Root from "./root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
      {/* <Root /> */}
      {/* ^ This is the component which should not update when redirecting page.*/}
  </React.StrictMode>
);
