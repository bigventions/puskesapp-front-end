import { useState, useEffect } from "react";

export default function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleError = (event) => {
      setHasError(true);
      setError(event.error);
    };

    window.addEventListener("error", handleError);
    return () => window.removeEventListener("error", handleError);
  }, []);

  if (hasError) {
    return (
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">Error</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            ERROR
          </h1>
          <p className="mt-6 text-lg font-medium text-gray-500 sm:text-xl">
            Sorry, something went wrong within the page.
          </p>
          {error && error.message && (
            <p className="mt-6 text-lg font-medium text-gray-500 sm:text-xl">
              {error.message}
            </p>
          )}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500"
            >
              Go back home
            </a>
            <a href="#" className="text-sm font-semibold text-gray-900">
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    );
  }

  return children;
}
