import { FaLightbulb, FaCogs, FaChartLine } from "react-icons/fa";

const AboutPage = () => {
  return (
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

         <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-white to-pink-50 dark:from-[var(--dark-theme)] dark:to-gray-900 shadow-2xl rounded-3xl overflow-hidden p-6 md:p-10 gap-10 group transition-all duration-500">
          {/* Image Section */}
          <div className="md:w-1/2 w-full transform hover:scale-105 transition-transform duration-300">
            <img
              src="/Images/about.gif" // replace with real image path
              alt="Null Solutions Overview"
              className="w-full h-full rounded-xl shadow-lg object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 w-full space-y-6">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white flex items-center gap-3">
              <FaLightbulb className="text-[var(--hover-color)] text-2xl animate-pulse" />
              Company Overview
            </h2>
            <p className="text-[17px] leading-relaxed text-gray-700 dark:text-gray-300">
              <span className="font-semibold text-[var(--hover-color)]">
                Null Solutions
              </span>{" "}
              has proudly completed <strong>4 successful years</strong> of
              delivering intelligent outsourcing services with innovation and
              integrity.
              <br />
              <br />
              We redefine business process outsourcing by combining skilled
              expertise with advanced technologies like automation and
              generative AI.
              <br />
              <br />
              Our core focus areas include <strong>P2P</strong>{" "}
              (Procure-to-Pay), <strong>R2R</strong> (Record-to-Report),
              <strong> S2P</strong> (Source-to-Pay),{" "}
              <strong>Audit Support</strong>, and{" "}
              <strong>Customer Support</strong>. In addition, we also offer
              expert solutions in <strong>Finance & Accounting</strong>,{" "}
              <strong>Data Management</strong>, and{" "}
              <strong>IT Helpdesk Services</strong>.
              <br />
              <br />
              Our mission is to help businesses grow by streamlining operations
              with <em>efficiency, accuracy, and scalability</em> at the core.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card
            icon={<FaCogs />}
            title="Our Services"
            text="We offer smart, AI-powered solutions in P2P, R2R, S2P, audit support, and customer service — designed to optimize and streamline your operations."
          />
          <Card
            icon={<FaChartLine />}
            title="Strategy & Growth"
            text="Our strategy blends expert talent with automation and AI to drive efficiency, scalability, and continuous growth for your business."
          />
          <Card
            icon={<FaLightbulb />}
            title="Why Choose Us?"
            text="Because we deliver secure, scalable, and intelligent outsourcing — with measurable results and a commitment to excellence."
          />
        </div>
        {/* What We Do Section */}
        <h1 className="text-4xl text-black font-extrabold tracking-wide mb-4 relative inline-block">
          What Makes Us{" "}
          <span className="text-[var(--dark-theme)]">Different</span>
        </h1>
        <div className="grid md:grid-cols-3 gap-8">
          <Card
            icon={<FaCogs />}
            title="Expert-Led Delivery"
            text="Our experienced professionals drive precision, consistency, and excellence across all financial and support functions."
          />
          <Card
            icon={<FaChartLine />}
            title="Tech-Driven Innovation"
            text="We integrate intelligent automation, agentic workflows, and conversational AI into our processes, ensuring smarter, faster, and more effective outcomes"
          />
          <Card
            icon={<FaLightbulb />}
            title="Scalable & Secure Solutions?"
            text="Whether you're a startup or a large enterprise, our solutions scale with your needs — while meeting the highest standards in data privacy and information security."
          />
        </div>
      </div>
    </div>
  );
};

const Card = ({ icon, title, text }) => (
  <div className="group bg-white dark:bg-[var(--dark-blue)] border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center hover:-translate-y-1">
    <div className="text-4xl text-[var(--dark-theme)] mb-4 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 group-hover:text-[var(--hover-color)] transition">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300 text-sm">{text}</p>
  </div>
);

export default AboutPage;
