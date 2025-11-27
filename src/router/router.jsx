import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Rootlayout from "../layouts/Rootlayout";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    
    children: [
      { index: true, Component: Home },
    ]
  },
]);