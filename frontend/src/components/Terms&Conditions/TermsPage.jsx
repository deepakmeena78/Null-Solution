import { FaGavel } from "react-icons/fa";

const TermsPage = () => {
  return (
    <div className="bg-gradient-to-r from-white to-pink-50 dark:from-[var(--dark-theme)] dark:to-gray-900 shadow-lg rounded-2xl p-8 md:p-10 space-y-6">
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <FaGavel className="text-[var(--dark-blue)] text-xl" /> Terms & Conditions
      </h2>

      <p className="leading-relaxed text-gray-700 dark:text-gray-200">
        By accessing or using the services provided by Null Solutions, you agree to follow our Terms & Conditions. These
        terms outline the rules and responsibilities that apply when you use our intelligent outsourcing services.
      </p>

      <p className="leading-relaxed text-gray-700 dark:text-gray-200">
        Null Solutions specializes in automation-driven solutions in areas like Procure-to-Pay (P2P), Record-to-Report
        (R2R), Source-to-Pay (S2P), Audit Support, and Customer Support. All technologies and workflows are the
        intellectual property of Null Solutions and cannot be reused without permission.
      </p>

      <p className="leading-relaxed text-gray-700 dark:text-gray-200">
        We are committed to maintaining client confidentiality and data security. Misuse of services, violation of these
        terms, or any unlawful activity may result in immediate termination of access.
      </p>

      <p className="leading-relaxed text-gray-700 dark:text-gray-200">
        These terms are subject to change without prior notice. For any questions, please contact us at
        <strong> support@nullsolutions.com</strong>.
      </p>
    </div>
  );
};

export default TermsPage;
