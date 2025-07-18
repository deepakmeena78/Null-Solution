import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaSyncAlt,
  FaFileInvoiceDollar,
  FaTasks,
  FaSearchDollar,
  FaHeadset,
  FaRobot,
  FaShieldAlt,
  FaChartLine,
  FaUserShield,
  FaChartBar,
  FaTruck,
  FaUserTie,
  FaUserCheck,
  FaMoneyCheckAlt,
  FaHandshake,
} from "react-icons/fa";

const services = [
  {
    icon: <FaChartLine className="text-4xl text-white" />,
    title: "Financial Planning & Analysis (FP&A)",
    description: `FP&A services empower businesses to forecast, budget, and strategize effectively. 
We analyze financial trends, monitor performance metrics, and create predictive models. 
Our team delivers detailed variance reports and scenario planning to support decision-making. 
You gain full visibility into revenue, costs, and profitability. 
We help optimize capital allocation and align finance with business goals.`,
  },
  {
    icon: <FaChartBar className="text-4xl text-white" />,
    title: "Data & Analytics",
    description: `Unlock business value through actionable insights using advanced analytics. 
Our services cover data warehousing, BI dashboards, predictive modeling, and reporting. 
We help you identify trends, detect anomalies, and drive smarter decisions. 
We also assist in building custom KPIs tailored to your business objectives. 
Whether operational or strategic, we make your data work for you.`,
  },
  {
    icon: <FaShieldAlt className="text-4xl text-white" />,
    title: "Risk & Compliance",
    description: `We help mitigate operational, financial, and regulatory risks across your organization. 
Our compliance framework covers audits, controls, documentation, and monitoring. 
Stay updated with changing regulations like GDPR, SOX, and industry-specific laws. 
We also assess cyber and data risks to strengthen internal governance. 
Build trust with stakeholders through our structured risk management approach.`,
  },
  {
    icon: <FaHandshake className="text-4xl text-white" />,
    title: "Sales & Commercials",
    description: `Drive revenue growth with structured sales operations and commercial strategies. 
We optimize pricing models, customer segmentation, and lead conversions. 
Contract lifecycle management, margin analysis, and sales forecasting are part of our suite. 
We enable better collaboration between sales and finance. 
Boost profitability and reduce cycle time in deal closures.`,
  },
  {
    icon: <FaTruck className="text-4xl text-white" />,
    title: "Supply Chain Management",
    description: `End-to-end visibility and automation in sourcing, warehousing, and logistics. 
We manage supplier performance, optimize inventory, and streamline transportation. 
Using real-time dashboards, you track orders and mitigate disruptions. 
We reduce operational costs while ensuring faster deliveries. 
Build a supply chain that is resilient and future-ready.`,
  },
  {
    icon: <FaUserTie className="text-4xl text-white" />,
    title: "HR & Payroll Management",
    description: `Automate employee onboarding, benefits, payroll, and compliance. 
We support ESS portals, leave management, performance appraisals, and more. 
Our payroll engine ensures accurate, timely, and tax-compliant salary processing. 
Gain insights into workforce costs, retention, and talent optimization. 
Simplify HR workflows and enhance employee satisfaction.`,
  },
  {
    icon: <FaUserShield className="text-4xl text-white" />,
    title: "Trust & Safety",
    description: `Build safer platforms through proactive monitoring, moderation, and response systems. 
We handle policy enforcement, content filtering, and incident reporting. 
Our risk engines detect fraud, abuse, and policy violations early. 
We balance user experience with platform security. 
Protect your brand while ensuring user trust and compliance.`,
  },
  {
    icon: <FaMoneyCheckAlt className="text-4xl text-white" />,
    title: "Cash to Pay",
    description: `Manage end-to-end cash disbursement—from invoice validation to vendor payment. 
We offer real-time dashboards for cash flow visibility and control. 
Our system automates approvals, reconciliations, and reporting. 
Avoid duplicate payments and ensure regulatory compliance. 
Improve liquidity and strengthen supplier relationships.`,
  },
  {
    icon: <FaSyncAlt className="text-4xl text-white" />,
    title: "Procure-to-Pay (P2P) Automation",
    description: `P2P automation eliminates manual errors in the purchase-to-payment cycle. 
It supports smart workflows, automated PO generation, and invoice matching. 
Reduce cycle times, ensure vendor compliance, and enhance visibility. 
Vendor portals improve collaboration and reduce support queries. 
Gain better spend control and audit-readiness across procurement.`,
  },
  {
    icon: <FaFileInvoiceDollar className="text-4xl text-white" />,
    title: "Record-to-Report (R2R) Processing",
    description: `Streamline journal entries, reconciliations, and statutory reporting. 
Ensure GAAP/IFRS compliance and improve audit readiness. 
Our service reduces close cycles and increases data accuracy. 
Get real-time dashboards for financial performance tracking. 
Improve visibility and confidence in your financial statements.`,
  },
  {
    icon: <FaTasks className="text-4xl text-white" />,
    title: "Source-to-Pay (S2P) Management",
    description: `Manage sourcing, contracts, procurement, and payments on one platform. 
Automated bidding and supplier scoring help choose the right vendors. 
Spend analytics and compliance tools enhance control and savings. 
Digitize approvals, manage risks, and reduce maverick spend. 
Ensure seamless integration with ERPs and accounting systems.`,
  },
  {
    icon: <FaSearchDollar className="text-4xl text-white" />,
    title: "Audit Support",
    description: `Prepare for internal and external audits with full documentation support. 
We create audit trails, organize records, and run mock audits. 
Support includes financial, process, and IT audit readiness. 
Reduce back-and-forth with auditors through structured workflows. 
Stay compliant and pass audits with confidence.`,
  },
  {
    icon: <FaHeadset className="text-4xl text-white" />,
    title: "Customer Support",
    description: `Deliver 24/7 support through chat, voice, and email with AI helpdesks. 
Live agents and chatbots handle tickets via integrated CRMs. 
We offer multichannel escalation, SLA tracking, and resolution dashboards. 
Analytics improve agent productivity and customer satisfaction. 
Build a responsive, user-focused support system.`,
  },
  {
    icon: <FaRobot className="text-4xl text-white" />,
    title: "AI Workflow Automation",
    description: `Replace repetitive tasks with intelligent bots and decision engines. 
Automate data entry, email routing, approvals, and reporting. 
Works across tools like Slack, Gmail, Sheets, and CRMs. 
Customize workflows with drag-and-drop simplicity. 
Gain time, accuracy, and focus for high-value work.`,
  },
];

const ServiceVerticalCards = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleServices = showAll ? services : services.slice(0, 4);

  return (
    <section className="py-20 px-4 bg-gray-100 font-sans">
      <div className="max-w-6xl mx-auto space-y-10">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Our Services
        </h2>

        {visibleServices.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6 rounded-xl bg-gradient-to-r from-teal-500 to-gray-900 shadow-xl text-white"
          >
            <div className="min-w-[60px]">{service.icon}</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm leading-relaxed text-gray-100 text-justify whitespace-pre-line">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}

        <div className="flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-4 px-6 py-2 bg-teal-600 text-white font-medium rounded-md hover:bg-teal-700 transition"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceVerticalCards;




