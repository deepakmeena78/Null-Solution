import { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

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
            className="w-[140px] h-10 object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 text-sm font-medium">
          <Link
            to="/"
            className="text-black px-4 py-2 rounded-full transition-all duration-300 hover:bg-[var(--hover-color)] hover:text-white hover:shadow"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-black px-4 py-2 rounded-full transition-all duration-300 hover:bg-[var(--hover-color)] hover:text-white hover:shadow"
          >
            About Us
          </Link>

          {/* Category with hover dropdown */}
          <div className="relative group">
            <span className="text-black px-4 py-2 rounded-full cursor-pointer transition-all duration-300 hover:bg-[var(--hover-color)] hover:text-white hover:shadow">
              Services
            </span>
            <div className="absolute top-full left-0 mt-2 hidden group-hover:flex flex-col bg-white dark:bg-[var(--dark-theme)] border border-[var(--light-theme)] rounded-xl shadow-xl z-50 w-52 overflow-hidden">
              <Link
                to="/service/CRM"
                className="px-4 py-2 text-sm text-black dark:text-white hover:bg-gray-100 dark:hover:bg-[#1e293b] hover:border-l-4 border-[var(--dark-theme)] transition"
              >
                CRM
              </Link>
              <Link
                to="/service/Design"
                className="px-4 py-2 text-sm text-black dark:text-white hover:bg-gray-100 dark:hover:bg-[#1e293b] hover:border-l-4 border-[var(--dark-theme)] transition"
              >
                Design
              </Link>
              <Link
                to="/service/Development"
                className="px-4 py-2 text-sm text-black dark:text-white hover:bg-gray-100 dark:hover:bg-[#1e293b] hover:border-l-4 border-[var(--dark-theme)] transition"
              >
                Development
              </Link>
            </div>
          </div>

          <Link
            to="/contact"
            className="text-black px-4 py-2 rounded-full transition-all duration-300 hover:bg-[var(--hover-color)] hover:text-white hover:shadow"
          >
            Contact Us
          </Link>
        </nav>

        {/* Join Button */}
        <div className="hidden md:block">
          <Link to="/contact">
            <button className="bg-[var(--hover-color)] hover:bg-[var(--dark-theme)] text-white text-sm font-semibold px-5 py-2 rounded-full shadow-lg transition-all duration-300">
              Join Us
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-gray-700 dark:text-white hover:text-[var(--hover-color)] transition"
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
            className="block text-sm font-medium text-gray-700 dark:text-white hover:text-[var(--hover-color)]"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="block text-sm font-medium text-gray-700 dark:text-white hover:text-[var(--hover-color)]"
          >
            About Us
          </Link>
          <Link
            to="/service"
            onClick={() => setMenuOpen(false)}
            className="block text-sm font-medium text-gray-700 dark:text-white hover:text-[var(--hover-color)]"
          >
            Services
          </Link>
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="block text-sm font-medium text-gray-700 dark:text-white hover:text-[var(--hover-color)]"
          >
            Contact Us
          </Link>
          <Link to="/contact">
            <button className="w-full bg-[var(--hover-color)] hover:bg-[var(--hover-color)] text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg transition-all duration-300">
              Join Us
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}

export default HeaderPage;
