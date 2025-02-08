import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import MainLayout from "./MainLayout";
import ErrorBoundary from "../components/pages/ErrorBoundary";

let custom = [
  {
    pattern: /^\/dashboard/, layout: MainLayout
  }
]

export default function LayoutWrapper({ path = null }) {
  const match = custom.find((entry) => entry.pattern.test(path));
  const MyLayout = match ? match.layout : MainLayout;
  
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <MyLayout>
          <Outlet/>
        </MyLayout>
      </Suspense>
    </ErrorBoundary>
  )
}