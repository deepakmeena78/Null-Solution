import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-[var(--dark-blue)] text-[#20214a] min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[var(--dark-theme)] mb-6">Privacy Policy</h1>

        <p className="text-[#606080] text-sm mb-4">
          At <span className="font-semibold text-[var(--dark-theme)]">Null Solutions</span>, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit or use our services.
        </p>

        <h2 className="text-xl font-semibold text-[var(--dark-theme)] mt-8 mb-3">1. Information We Collect</h2>
        <p className="text-[#606080] text-sm mb-4">
          We may collect personal details such as your name, email address, phone number, and location when you:
        </p>
        <ul className="list-disc list-inside text-[#606080] text-sm mb-4 space-y-1">
          <li>Fill out contact forms</li>
          <li>Register for services or events</li>
          <li>Communicate with our support team</li>
        </ul>

        <h2 className="text-xl font-semibold text-[var(--dark-theme)] mt-8 mb-3">2. How We Use Your Information</h2>
        <p className="text-[#606080] text-sm mb-4">
          We use your data to:
        </p>
        <ul className="list-disc list-inside text-[#606080] text-sm mb-4 space-y-1">
          <li>Respond to your inquiries</li>
          <li>Improve our services</li>
          <li>Send updates and promotional messages</li>
        </ul>

        <h2 className="text-xl font-semibold text-[var(--dark-theme)] mt-8 mb-3">3. Data Sharing</h2>
        <p className="text-[#606080] text-sm mb-4">
          We never sell your personal information. Your data is only shared with trusted partners when necessary to deliver our services and comply with legal obligations.
        </p>

        <h2 className="text-xl font-semibold text-[var(--dark-theme)] mt-8 mb-3">4. Security</h2>
        <p className="text-[#606080] text-sm mb-4">
          We implement modern security measures to protect your data against unauthorized access, alteration, or destruction.
        </p>

        <h2 className="text-xl font-semibold text-[var(--dark-theme)] mt-8 mb-3">5. Your Rights</h2>
        <p className="text-[#606080] text-sm mb-4">
          You have the right to access, update, or delete your personal data. Please contact us if you wish to do so.
        </p>

        <h2 className="text-xl font-semibold text-[var(--dark-theme)] mt-8 mb-3">6. Changes to This Policy</h2>
        <p className="text-[#606080] text-sm mb-4">
          This policy may be updated from time to time. We will notify you of any significant changes via email or by posting an update on our site.
        </p>

        <h2 className="text-xl font-semibold text-[var(--dark-theme)] mt-8 mb-3">7. Contact Us</h2>
        <p className="text-[#606080] text-sm mb-4">
          If you have any questions about this Privacy Policy, feel free to reach us at:{" "}
          <a href="mailto:example@gmail.com" className="text-[var(--hover-color)] hover:underline">example@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
