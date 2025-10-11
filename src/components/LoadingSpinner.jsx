import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <img className="animate-spin" src="/loading.png" alt="loading" />
    </div>
  );
};

export default LoadingSpinner;
