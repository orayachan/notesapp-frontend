import React from "react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-fuchsia-50">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-fuchsia-900">404</h1>
        <p className="text-xl text-fuchsia-900">Page Not Found</p>
        <p className="mt-4 text-lg text-fuchsia-900">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="mt-6 inline-block px-4 py-2 bg-fuchsia-800 text-white rounded hover:bg-fuchsia-700"
        >
          Go to Homepage
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
