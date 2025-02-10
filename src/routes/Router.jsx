import { createBrowserRouter, redirect } from "react-router-dom";
import { lazy } from "react";
import ErrorPage from "../components/pages/ErrorPage";
import LayoutWrapper from "../layouts/LayoutWrapper";

const pages = import.meta.glob("../views/**/*.jsx");

let routes = [];
routes.push({
  path: "/",
  loader: () => {
    return redirect("/pasien");
  },
});
let other = Object.keys(pages).map((path) => {
  const cleanPath = path
    .replace("../views", "")
    .replace(/\/Main\.jsx$/, "")
    .replace(/\.jsx$/, "");
  const Component = lazy(pages[path]);
  return {
    path: cleanPath || "/",
    element: <LayoutWrapper path={cleanPath} />,
    children: [
      {
        index: true,
        element: <Component />,
      },
    ],
    errorElement: <ErrorPage />,
  };
});
routes.push(...other);
routes.push({ path: "*", element: <ErrorPage /> });
export default createBrowserRouter(routes);
