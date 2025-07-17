// import Footer from "./components/Home/Footer";
// import HeaderPage from "./components/Home/HeaderPage";
// import Routing from "./components/Routing";
// import { BrowserRouter } from "react-router-dom";

// import "./index.css";

// function App() {
//   return (
//     <BrowserRouter>
//       <HeaderPage />
//       <main className="pt-[100px] min-h-screen bg-white dark:bg-[var(--light-theme)] transition-all">
//         <Routing />
//       </main>
//       <Footer />
//     </BrowserRouter>
//   );
// }

// export default App;

import Footer from "./components/Home/Footer";
import HeaderPage from "./components/Home/HeaderPage";
import Routing from "./components/Routing";
import { BrowserRouter } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./index.css";
import LogoLoader from "./components/Home/LogoLoader";
import { Toaster } from "react-hot-toast";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate 2s loading

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LogoLoader />;
  }

  return (
    <BrowserRouter>
      <Toaster />
      <HeaderPage />
      <main className="pt-[100px] min-h-screen bg-white dark:bg-[var(--light-theme)] transition-all">
        <Routing />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
