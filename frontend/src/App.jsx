import Footer from "./components/Home/Footer";
import HeaderPage from "./components/Home/HeaderPage";
import Routing from "./components/Routing";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <HeaderPage />
      <main className="pt-[100px] min-h-screen bg-white dark:bg-[var(--light-theme)] transition-all">
        <Routing />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
