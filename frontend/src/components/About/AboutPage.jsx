import { FaLightbulb, FaCogs, FaChartLine } from "react-icons/fa";

const AboutPage = () => {
  return (
    // <div className="pt-[100px] px-4 bg-white dark:bg-[var(--light-theme)] text-gray-800 dark:text-white min-h-screen">
    <div className="pt-[100px] pb-20 px-4 bg-white dark:bg-[var(--light-theme)] text-gray-800 dark:text-white min-h-screen">
    <div className="max-w-7xl mx-auto space-y-16">
        {/* Page Title */}
        <div className="text-center">
          <h1 className="text-4xl text-black font-extrabold tracking-wide mb-4 relative inline-block">
            About <span className="text-[var(--dark-theme)]">Us</span>
          </h1>
          <p className="text-black dark:text-black max-w-xl mx-auto text-lg">
            Empowering your business with technology and creativity
          </p>
        </div>

        {/* Company Overview Section */}
        <div className="bg-gradient-to-r from-white to-pink-50 dark:from-[var(--dark-theme)] dark:to-gray-900 shadow-lg rounded-2xl p-8 md:p-10 space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <FaLightbulb className="text-pink-600 text-xl" /> Company Overview
          </h2>
          <p className="leading-relaxed text-gray-700 dark:text-gray-200">
            Our company is a fast-growing and new age software development company which provides holistic digital marketing solutions to clients. We aim to exceed expectations and help businesses identify, visualize, and pursue new growth opportunities.
          </p>
          <p className="leading-relaxed text-gray-700 dark:text-gray-200">
            With technology at our foundation and creativity at our peak, we deliver engaging customer experiences that lead to profitable results.
          </p>
        </div>

        {/* What We Do Section */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card
            icon={<FaCogs />}
            title="Our Services"
            text="We specialize in web design & development, mobile app development (Android & iOS), SEO, SMM, and complete digital marketing solutions."
          />
          <Card
            icon={<FaChartLine />}
            title="Strategy & Growth"
            text="We use cutting-edge tools and creative digital strategies to maximize brand exposure and client ROI through bespoke marketing campaigns."
          />
          <Card
            icon={<FaLightbulb />}
            title="Why Choose Us?"
            text="Our team turns your dreams into a digital reality with innovation, precision, and a deep understanding of market needs."
          />
        </div>
      </div>
    </div>
  );
};

const Card = ({ icon, title, text }) => (
  <div className="group bg-white dark:bg-[var(--dark-blue)] border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center hover:-translate-y-1">
    <div className="text-4xl text-pink-600 mb-4 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 group-hover:text-pink-600 transition">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300 text-sm">{text}</p>
  </div>
);

export default AboutPage;