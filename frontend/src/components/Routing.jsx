import { Routes, Route } from "react-router-dom";
import HomePage from "./Home/HomePage";
import ContactUs from "./ContactUs/ContactUs";
import ServicePage from "./Service/ServicePage";
import AboutPage from "./About/AboutPage";
import TermsPage from "./Terms&Conditions/TermsPage";
import PrivacyPolicy from "./Terms&Conditions/PrivacyPolicy";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
       <Route path="/about" element={<AboutPage />} />
      <Route path="/service" element={<ServicePage />} /> 
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="*" element={<h2 className="text-center mt-10 text-red-500">Page Not Found</h2>} />
    </Routes>
  );
};

export default Routing;
