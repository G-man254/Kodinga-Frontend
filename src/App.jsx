import React from "react";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Welcome /> },
  { path: "/login", element: <Login /> },
  { path: "/signUp", element: <Signup /> },
  { path: "/home", element: <Home /> },
]);

export default function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}
