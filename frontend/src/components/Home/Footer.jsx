
import { Link } from "react-router-dom";
import "../../App.css";

const Footer = () => {
  return (
    <footer className="bg-[var(--dark-blue)] text-[#20214a]">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <img src="/Images/logo_design.png" alt="Logo" className="h-14" />
          </div>
          <p className="text-sm text-[#606080]">
            Null Solutions is your smart outsourcing partner. We provide AI-powered back-office and support solutions for modern businesses.
          </p>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg text-[var(--dark-theme)] font-semibold mb-4">Contact Us</h3>
          <p className="text-sm text-[#606080] mb-2">
            📧 <span className="font-medium">Email:</span>{" "}
            <a href="inqure@nullsolutions.in" className="hover:text-[var(--hover-color)]">inqure@nullsolutions.in</a>
          </p>
          <p className="text-sm text-[#606080] mb-2">
            📞 <span className="font-medium">Phone:</span>{" "}
            <a href="tel:+919680948484" className="hover:text-[var(--hover-color)]">+91 96809-48484</a>
          </p>
          <p className="text-sm text-[#606080]">
            📍 Near Birla School, Building 11, 2nd Floor, Durgapura, Jaipur (302018)
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <Link to="https://facebook.com" className="text-[#606080] hover:text-[var(--hover-color)]">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="https://wa.me/919680948484" className="text-[#606080] hover:text-[var(--hover-color)]">
              <i className="fab fa-whatsapp"></i>
            </Link>
            <Link to="https://www.linkedin.com/company/null-solutions" className="text-[#606080] hover:text-[var(--hover-color)]">
              <i className="fab fa-linkedin-in"></i>
            </Link>
            <Link to="#" className="text-[#606080] hover:text-[var(--hover-color)]">
              <i className="fab fa-instagram"></i>
            </Link>
          </div>
        </div>

        {/* Combined Company + Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Company */}
          <div>
            <h3 className="text-lg text-[var(--dark-theme)] font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-[#606080]">
              <li><Link to="/" className="hover:text-[var(--hover-color)]">Home</Link></li>
              <li><Link to="/contact" className="hover:text-[var(--hover-color)]">Join Us</Link></li>
              <li><Link to="/about" className="hover:text-[var(--hover-color)]">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-[var(--hover-color)]">Contact Us</Link></li>
              <li><Link to="/terms" className="hover:text-[var(--hover-color)]">Terms & Conditions</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-[var(--hover-color)]">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Services (non-clickable) */}
          <div>
            <h3 className="text-lg text-[var(--dark-theme)] font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-[#606080]">
              <li><span className="hover:text-[var(--hover-color)] cursor-text">P2P Automation</span></li>
              <li><span className="hover:text-[var(--hover-color)] cursor-text">R2R Processing</span></li>
              <li><span className="hover:text-[var(--hover-color)] cursor-text">S2P Management</span></li>
              <li><span className="hover:text-[var(--hover-color)] cursor-text">Audit Support</span></li>
              <li><span className="hover:text-[var(--hover-color)] cursor-text">Customer Support</span></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center text-sm text-[#606080] py-4 border-t border-gray-200 px-4">
        © 2025 Null Solutions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
