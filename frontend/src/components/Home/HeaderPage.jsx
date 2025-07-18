import { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

import {
  FaChartLine,
  FaChartPie,
  FaShieldAlt,
  FaHandshake,
  FaTruckMoving,
  FaUserTie,
  FaUserShield,
  FaMoneyCheckAlt,
  FaSyncAlt,
  FaFileInvoiceDollar,
  FaTasks,
  FaSearchDollar,
  FaHeadset,
} from "react-icons/fa";

function HeaderPage() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 80) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`w-[90%] max-w-6xl bg-[var(--dark-theme)] dark:bg-[var(--dark-theme)] fixed top-4 left-1/2 -translate-x-1/2 z-50 rounded-2xl shadow-md transition-transform duration-500 ${
        showHeader ? "translate-y-0" : "-translate-y-32"
      }`}
    >
      <div className="px-6 py-4 flex items-center justify-between md:gap-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center transition-all duration-500 hover:translate-x-1"
        >
          <img
            src="/Images/logo_design.png"
            alt="Logo"
            className="w-[130px] h-12 m-0 object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 text-sm font-medium">
          <Link
            to="/"
            className="text-black px-4 py-2 rounded-full transition-all duration-300 hover:bg-[var(--dark-blue)] hover:text-white hover:shadow"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-black px-4 py-2 rounded-full transition-all duration-300 hover:bg-[var(--dark-blue)] hover:text-white hover:shadow"
          >
            About Us
          </Link>

          <div className="relative group">
            <span className="text-black px-4 py-2 rounded-full cursor-pointer transition-all duration-300 hover:bg-[var(--dark-blue)] hover:text-white hover:shadow">
              <Link
                to="/service"
                className="text-black hover:text-white transition"
              >
                Services
              </Link>
            </span>
            {/* Dropdown on hover */}
            <div className="absolute top-full left-0 mt-3 hidden group-hover:flex flex-col bg-white dark:bg-[var(--dark-blue)] border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl z-50 w-[520px] p-4 transition-all duration-300 scale-95 group-hover:scale-100 origin-top">
              <div className="grid grid-cols-2 gap-3">
                {[
                  {
                    icon: <FaChartLine />,
                    title: "FP&A (Financial Planning & Analysis)",
                  },
                  { icon: <FaChartPie />, title: "Data & Analytics" },
                  { icon: <FaShieldAlt />, title: "Risk & Compliance" },
                  { icon: <FaHandshake />, title: "Sales & Commercials" },
                  { icon: <FaTruckMoving />, title: "Supply Chain Management" },
                  { icon: <FaUserTie />, title: "HR & Payroll Management" },
                  { icon: <FaUserShield />, title: "Trust & Safety" },
                  { icon: <FaMoneyCheckAlt />, title: "Cash to Pay" },
                  { icon: <FaSyncAlt />, title: "P2P Automation" },
                  { icon: <FaFileInvoiceDollar />, title: "R2R Processing" },
                  { icon: <FaTasks />, title: "S2P Management" },
                  { icon: <FaSearchDollar />, title: "Audit Support" },
                  { icon: <FaHeadset />, title: "Customer Support" },
                ].map((item, index) => (
                  <span
                    key={index}
                    className="flex items-center gap-3 px-4 py-2 text-sm font-semibold text-gray-800 dark:text-white bg-white dark:bg-transparent rounded-xl hover:bg-gray-100 dark:hover:bg-slate-700 border border-transparent hover:border-teal-500 transition-all duration-200 cursor-pointer"
                  >
                    <span className="text-teal-600 dark:text-teal-400 text-lg">
                      {item.icon}
                    </span>
                    <span className="leading-tight">{item.title}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <Link
            to="/contact"
            className="text-black px-4 py-2 rounded-full transition-all duration-300 hover:bg-[var(--dark-blue)] hover:text-white hover:shadow"
          >
            Contact Us
          </Link>
        </nav>

        {/* Join Button */}
        <div className="hidden md:block">
          <Link to="/contact">
            <button className="bg-[var(--dark-blue)] hover:bg-[var(--dark-theme)] text-white text-sm font-semibold px-5 py-2 rounded-full shadow-lg transition-all duration-300">
              Join Us
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-gray-700 dark:text-white hover:text-[var(--dark-blue)] transition"
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 bg-white dark:bg-[var(--dark-theme)] rounded-b-2xl">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block text-sm font-medium text-gray-700 dark:text-white hover:text-[var(--dark-blue)]"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="block text-sm font-medium text-gray-700 dark:text-white hover:text-[var(--dark-blue)]"
          >
            About Us
          </Link>
          <Link
            to="/service"
            onClick={() => setMenuOpen(false)}
            className="block text-sm font-medium text-gray-700 dark:text-white hover:text-[var(--dark-blue)]"
          >
            Services
          </Link>
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="block text-sm font-medium text-gray-700 dark:text-white hover:text-[var(--dark-blue)]"
          >
            Contact Us
          </Link>
          <Link to="/contact">
            <button className="w-full bg-[var(--dark-blue)] hover:bg-[var(--dark-blue)] text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg transition-all duration-300">
              Join Us
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}

export default HeaderPage;
