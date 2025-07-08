import CommonLayout from "@/layouts/CommonLayout";
import Error from "@/pages/Error/Error";
import Home from "@/pages/Home/Home";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CommonLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        // lazy: async () => {
        //   const { default: Home } = await import("@/pages/Home/Home");
        //   return { Component: Home };
        // },
        element: <Home />,
      },
    ],
  },
]);
