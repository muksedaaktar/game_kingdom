import React, { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    document.title = "404 Not Found | Game Kingdom"; 
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-white text-black">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! The page you are looking for does not exist.</p>
      <a
        href="/"
        className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
      >
        Go Home
      </a>
    </div>
  );
};

export default NotFound;
