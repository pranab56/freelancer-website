"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "@/redux/Provider";
import { Toaster } from "@/components/ui/toaster";
import React, { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

function GlobalErrorBoundary({ children }) {
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleError = (event) => {
      console.error("Uncaught client-side error:", event.error);
      setError(event.error);
    };

    window.addEventListener("error", handleError);

    return () => {
      window.removeEventListener("error", handleError);
    };
  }, []);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50 p-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">
            Something Went Wrong
          </h1>
          <p className="text-red-500 mb-4">
            An unexpected error occurred. Please try refreshing the page.
          </p>
          <details className="text-left max-w-md mx-auto bg-white p-4 rounded shadow">
            <summary className="cursor-pointer text-red-600">
              Error Details
            </summary>
            <pre className="text-xs text-gray-700 overflow-x-auto">
              {error.toString()}
              {error.stack && `\n\nStack Trace:\n${error.stack}`}
            </pre>
          </details>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }

  return children;
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <GlobalErrorBoundary>
            {children}
            <Toaster />
          </GlobalErrorBoundary>
        </Provider>
      </body>
    </html>
  );
}
