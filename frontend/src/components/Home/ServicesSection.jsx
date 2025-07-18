import { FaExchangeAlt, FaFileAlt, FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "P2P Automation",
    description:
      "Streamline your entire purchasing process — from requisition to payment. Automate invoice processing, vendor communication, and approvals to boost productivity and save costs.",
    icon: <FaExchangeAlt className="text-4xl transition duration-300 group-hover:text-white text-[var(--dark-theme)]" />,
  },
  {
    title: "R2R Processing",
    description:
      "Improve financial reporting and ensure compliance with R2R automation. From journal entries to audit trails, simplify data consolidation and gain real-time financial insights.",
    icon: <FaFileAlt className="text-4xl transition duration-300 group-hover:text-white text-[var(--dark-theme)]" />,
  },
  {
    title: "S2P Management",
    description:
      "Connect sourcing and procurement into one smart workflow. Manage suppliers, contracts, and invoices efficiently while reducing risks and increasing visibility into spending.",
    icon: <FaShoppingCart className="text-4xl transition duration-300 group-hover:text-white text-[var(--dark-theme)]" />,
  },
];

const ServicesSection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-blue-50 py-16 px-4 md:px-10 lg:px-20">
      <div className="text-center mb-10">
        <p className="text-sm text-[var(--dark-theme)] uppercase font-medium">
          Services We’re Provided
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Automation & Financial Services
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`rounded-2xl p-6 shadow-lg transform transition-all duration-300 relative group bg-gray-100 hover:bg-[var(--dark-theme)]`}
          >
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-lg font-semibold text-center text-gray-800 group-hover:text-white transition">
              {service.title}
            </h3>
            <p className="text-sm text-center mt-2 text-gray-700 group-hover:text-white transition">
              {service.description}
            </p>
            <div className="mt-4 text-center">
              <button
                onClick={() => navigate("/services")}
                className="text-sm font-semibold underline text-[var(--dark-theme)] group-hover:text-white transition"
              >
                Learn More →
              </button>
            </div>

            {/* Optional overlay */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 bg-black transition duration-300 z-0" />
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button
          onClick={() => navigate("/service")}
          className="bg-[var(--dark-theme)] hover:bg-[var(--dark-blue)] text-white font-medium px-6 py-2 rounded-full transition"
        >
          View More Services
        </button>
      </div>
    </section>
  );
};

export default ServicesSection;
