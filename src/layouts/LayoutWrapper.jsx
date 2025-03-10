// Import Dependencies

import { ErrorBoundary } from "../components/pages/ErrorBoundary";
import { Outlet, useLocation } from "react-router-dom";
import { Suspense, useMemo, lazy } from "react";

export const LayoutWrapper = (
  {
    // Props
  },
) => {
  // State

  // Hooks
  const LoginLayout = lazy(() => import("./LoginLayout"));
  const MainLayout = lazy(() => import("./MainLayout"));
  const layouts = useMemo(
    () => [
      { pattern: /^\/main/, layout: MainLayout },
      { pattern: /^\/login/, layout: LoginLayout },
    ],
    [MainLayout, LoginLayout],
  );
  const location = useLocation();
  const MyLayout = useMemo(() => {
    const match = layouts.find((entry) =>
      entry.pattern.test(location.pathname),
    );
    return match?.layout || MainLayout;
  }, [location.pathname, layouts, MainLayout]);

  // Methods

  // Event Handler

  // Return JSX
  return (
    <ErrorBoundary key={location.pathname}>
      <Suspense fallback={<div>Loading...</div>}>
        <MyLayout>
          <Outlet />
        </MyLayout>
      </Suspense>
    </ErrorBoundary>
  );
};
