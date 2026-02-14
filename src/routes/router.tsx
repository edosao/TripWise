import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Results from "@/pages/Results";
import Navbar from "../components/layouts/Navbar";
import Home from "../pages/Home";
import Hero from "../components/Landing/Hero";
import Layout from "@/components/layouts/layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // ✅ layout now
    children: [
      {
        index: true,
        element: <Home />, // 👈 landing page
      },
      {
        path: "results",
        element: <Results />,
      },
    ],
  },
]);
