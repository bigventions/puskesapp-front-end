import { Outlet, useLocation } from "react-router-dom";
import { Suspense, useMemo, lazy } from "react";
import ErrorBoundary from "../components/pages/ErrorBoundary";

// Lazy load layouts
const MainLayout = lazy(() => import("./MainLayout"));
const LoginLayout = lazy(() => import("./LoginLayout"));

// Layout mapping
const layouts = [
  { pattern: /^\/main/, layout: MainLayout },
  { pattern: /^\/login/, layout: LoginLayout },
];

export default function LayoutWrapper() {
  const location = useLocation();

  // Gunakan useMemo agar tidak mencari ulang setiap render
  const MyLayout = useMemo(() => {
    const match = layouts.find((entry) =>
      entry.pattern.test(location.pathname),
    );
    return match ? match.layout : MainLayout;
  }, [location.pathname]);

  return (
    <ErrorBoundary key={location.pathname}>
      <Suspense fallback={<div>Loading...</div>}>
        <MyLayout>
          <Outlet />
        </MyLayout>
      </Suspense>
    </ErrorBoundary>
  );
}
