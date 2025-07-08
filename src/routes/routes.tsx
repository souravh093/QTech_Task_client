import CommonLayout from "@/layouts/CommonLayout";
import Error from "@/pages/Error/Error";
import Home from "@/pages/Home/Home";
import ProductDetail from "@/pages/ProductDetail/ProductDetail";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CommonLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "product/:id",
        element: <ProductDetail />,
      },
    ],
  },
]);
