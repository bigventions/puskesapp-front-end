import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import ErrorPage from "../components/pages/errorPage";
import LayoutWrapper from "../layouts/LayoutWrapper";
const pages = import.meta.glob("../views/**/*.jsx");

const routes = Object.keys(pages).map((path) => {
  const cleanPath = path
    .replace("../views", "")
    .replace(/\/Main\.jsx$/, "")
    .replace(/\.jsx$/, "");
  const Component = lazy(pages[path]); 
  return {
    path: cleanPath || "/",
    // element: (
    //   <LayoutWrapper path={cleanPath} >
    //     <Component/>
    //   </LayoutWrapper>
    // ),
    element: <LayoutWrapper path={cleanPath}/>,
    children: [
      {
        index: true,
        element: <Component/>
      }
    ],
    errorElement: <ErrorPage />,
  };
});
routes.push({ path: "*", element: <ErrorPage /> });
export default createBrowserRouter(routes);
