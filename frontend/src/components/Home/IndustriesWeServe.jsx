import {
  FaHome,
  FaPlaneDeparture,
  FaGraduationCap,
  FaTaxi,
  FaCalendarAlt,
  FaShoppingCart,
  FaGamepad,
  FaUtensils,
  FaBolt,
  FaShoppingBasket,
  FaCar,
  FaMicrochip,
  FaHospital,
  FaConciergeBell,
  FaUniversity,
  FaRing,
  FaPowerOff,
  FaRocket,
  FaStore,
  FaTools,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

const industries = [
  { name: "Real Estate", icon: <FaHome /> },
  { name: "Tour & Travels", icon: <FaPlaneDeparture /> },
  { name: "Education", icon: <FaGraduationCap /> },
  { name: "Transport", icon: <FaTaxi /> },
  { name: "Event", icon: <FaCalendarAlt /> },
  { name: "eCommerce", icon: <FaShoppingCart /> },
  { name: "Game", icon: <FaGamepad /> },
  { name: "Restaurant", icon: <FaUtensils /> },
  { name: "Grocery", icon: <FaShoppingBasket /> },
  { name: "On-Demand", icon: <FaBolt /> },
  { name: "Aerospace", icon: <FaRocket /> },
  { name: "Power", icon: <FaPowerOff /> },
  { name: "Jewels", icon: <FaRing /> },
  { name: "Super Marts", icon: <FaStore /> },
  { name: "Automobile", icon: <FaCar /> },
  { name: "Electronics", icon: <FaMicrochip /> },
  { name: "Health", icon: <FaHospital /> },
  { name: "Service Sector", icon: <FaConciergeBell /> },
  { name: "Bank", icon: <FaUniversity /> },
  { name: "Manufacturer", icon: <FaTools /> }
];

const IndustriesWeServe = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleIndustries = showAll ? industries : industries.slice(0, 12);

  return (
    <div className="bg-[var(--light-theme)] py-12 px-4 text-white text-center min-h-screen">
      <h2 className="text-3xl text-black font-bold mb-10">Industries We Serve</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {visibleIndustries.map((industry, index) => (
          <motion.div
            key={index}
            className="group relative bg-white text-black flex flex-col items-center justify-center gap-2 py-6 px-4 rounded-xl shadow-lg hover:bg-[var(--dark-theme)] hover:text-white transform hover:scale-105 transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-3xl">{industry.icon}</div>
            <span className="font-semibold">{industry.name}</span>

            {/* Tooltip on hover */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full mb-2 px-2 py-1 bg-black text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              {industry.name}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Show More / Show Less Button */}
      <div className="mt-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-[var(--dark-blue)] hover:bg-[var(--dark-theme)] text-white font-semibold px-6 py-2 rounded-full shadow transition duration-300"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default IndustriesWeServe;
