import React from "react";

const LogoLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-[9999]">
      <img
        src="/Images/image-removebg-preview.png"
        alt="Loading..."
        className="w-24 h-24 animate-spin"
      />
    </div>
  );
};

export default LogoLoader;

