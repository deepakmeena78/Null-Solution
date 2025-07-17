import React, { useEffect, useState } from "react";

const LogoLoader = () => {
  const [isSpinning, setIsSpinning] = useState(true); // for rotation
  const [showLogo, setShowLogo] = useState(true);     // for showing image

  useEffect(() => {
    const spinStop = setTimeout(() => {
      setIsSpinning(false); // stop spinning after 1 sec
    }, 1000);

    const hideLogo = setTimeout(() => {
      setShowLogo(false); // hide loader after 2 sec total
    }, 2000);

    return () => {
      clearTimeout(spinStop);
      clearTimeout(hideLogo);
    };
  }, []);

  if (!showLogo) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-[9999]">
      <img
        src="/Images/image-removebg-preview.png"
        alt="Logo"
        className={`w-24 h-24 transition-all duration-500 ease-in-out ${
          isSpinning ? "animate-spin" : ""
        }`}
      />
    </div>
  );
};

export default LogoLoader;
