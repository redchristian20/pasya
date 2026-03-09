import React from 'react'
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/pasya-project/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
    <RouterProvider router={router} />
);
