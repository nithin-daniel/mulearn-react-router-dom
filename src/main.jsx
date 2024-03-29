import * as React from "react";
import './index.css'
import './App.css'
import App from './App.jsx'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import About from "./pages/About/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "about",
    element: <About/>,

  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);