// import { motion } from "framer-motion";
// import {
//   FaSyncAlt,
//   FaFileInvoiceDollar,
//   FaTasks,
//   FaSearchDollar,
//   FaHeadset,
//   FaRobot,
// } from "react-icons/fa";

// const services = [
//   {
//     icon: <FaSyncAlt className="text-4xl text-white" />,
//     title: "P2P Automation",
//     description:
//       "Procure-to-Pay (P2P) automation streamlines the entire purchasing lifecycle—from requisition to vendor payment. It eliminates manual bottlenecks and reduces errors. Our system ensures timely approvals, transparent tracking, and integration with your ERP. Gain full control over spend visibility, vendor management, and invoice reconciliation.",
//   },
//   {
//     icon: <FaFileInvoiceDollar className="text-4xl text-white" />,
//     title: "R2R Processing",
//     description:
//       "Record-to-Report (R2R) ensures financial accuracy and faster closing cycles. Our service automates journal entries, reconciliations, and reporting workflows. We enable you to meet compliance (GAAP/IFRS) with clear audit trails. It allows real-time insights for strategic financial planning and decision-making.",
//   },
//   {
//     icon: <FaTasks className="text-4xl text-white" />,
//     title: "S2P Management",
//     description:
//       "Source-to-Pay (S2P) covers sourcing, procurement, contracting, and payment in one streamlined flow. Our platform automates supplier evaluation, RFPs, and invoice tracking. You can reduce procurement cycle time and ensure spend control. We enable compliance, better vendor performance, and centralized procurement analytics.",
//   },
//   {
//     icon: <FaSearchDollar className="text-4xl text-white" />,
//     title: "Audit Support",
//     description:
//       "Our audit support prepares your organization for any internal or external audit. We organize documentation, validate controls, and ensure accuracy in financial reporting. With mock audits and detailed reporting, you’ll face audits with confidence. Stay compliant with minimal disruption and full traceability.",
//   },
//   {
//     icon: <FaHeadset className="text-4xl text-white" />,
//     title: "Customer Support",
//     description:
//       "We help you deliver 24/7 customer service with multi-channel support systems. Whether via chat, email, or phone, our solutions boost response speed and satisfaction. Integrated CRM tracking ensures smooth case resolution. Our setup improves engagement, retention, and brand loyalty through smart automation.",
//   },
//   {
//     icon: <FaRobot className="text-4xl text-white" />,
//     title: "AI Workflow Automation",
//     description:
//       "Automate repetitive workflows like data entry, lead routing, and document scanning with AI bots. Our low-code tools integrate with apps like Slack, Google Sheets, and CRM platforms. Bots reduce operational costs and free up human time. Real-time dashboards help you monitor automation performance easily.",
//   },
// ];

// const ServiceVerticalCards = () => {
//   return (
//     <section className="py-20 px-4 bg-gray-100 font-sans">
//       <div className="max-w-6xl mx-auto space-y-10">
//         <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
//           Our Services
//         </h2>

//         {services.map((service, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.1 }}
//             viewport={{ once: true }}
//             className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6 rounded-xl bg-gradient-to-r from-teal-500 to-gray-900 shadow-xl text-white"
//           >
//             <div className="min-w-[60px]">{service.icon}</div>
//             <div>
//               <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
//               <p className="text-sm leading-relaxed text-gray-100 text-justify">
//                 {service.description}
//               </p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ServiceVerticalCards;





import { motion } from "framer-motion";
import {
  FaSyncAlt,
  FaFileInvoiceDollar,
  FaTasks,
  FaSearchDollar,
  FaHeadset,
  FaRobot,
} from "react-icons/fa";

const services = [
  {
    icon: <FaSyncAlt className="text-4xl text-white" />,
    title: "P2P Automation",
    description: `Procure-to-Pay (P2P) automation streamlines your entire purchasing lifecycle—from requisition to vendor payment. 
It eliminates manual errors, speeds up invoice processing, and ensures vendor compliance. 
Our system supports dynamic approval workflows, integrated purchase orders, and seamless ERP synchronization. 
You gain real-time spend visibility, cost savings, and greater control over procurement decisions. 
Automated three-way matching ensures accurate payments and eliminates fraud risks. 
Vendor portals make collaboration easier with self-service access to payment updates. 
Experience faster procurement cycles, reduced bottlenecks, and improved supplier relationships.`,
  },
  {
    icon: <FaFileInvoiceDollar className="text-4xl text-white" />,
    title: "R2R Processing",
    description: `Record-to-Report (R2R) enhances your financial reporting with accuracy and speed. 
Our automation handles journal entries, account reconciliations, and consolidation processes smoothly. 
We ensure compliance with standards like GAAP and IFRS, providing audit-ready documentation at every stage. 
Built-in validations minimize human error and create consistent reporting. 
You can monitor key financial KPIs via real-time dashboards and insights. 
Multi-entity support allows easy roll-up reporting across regions and divisions. 
Let us reduce your month-end workload and boost decision-making accuracy.`,
  },
  {
    icon: <FaTasks className="text-4xl text-white" />,
    title: "S2P Management",
    description: `Source-to-Pay (S2P) brings your entire procurement process under one digital umbrella. 
It begins with intelligent sourcing—automating supplier selection, RFP management, and bid comparison. 
Once suppliers are chosen, contracts and purchasing workflows are auto-managed to avoid delays. 
We provide real-time tracking of purchase orders, invoices, and payments. 
Spend analysis dashboards help you identify savings opportunities. 
Built-in policy compliance ensures you never overspend or violate internal rules. 
Achieve a resilient, transparent, and agile procurement environment with ease.`,
  },
  {
    icon: <FaSearchDollar className="text-4xl text-white" />,
    title: "Audit Support",
    description: `Our audit support service prepares your organization to face both internal and external audits confidently. 
We collect, organize, and verify documentation required by auditors to reduce back-and-forth and save time. 
Mock audits help you identify compliance gaps before the actual audit begins. 
We create detailed audit trails and traceable workflows across financial and operational areas. 
From statutory compliance to internal controls testing, we cover all grounds. 
We also assist with auditor queries and documentation during fieldwork. 
Our service helps reduce audit risks and ensures smoother audit outcomes.`,
  },
  {
    icon: <FaHeadset className="text-4xl text-white" />,
    title: "Customer Support",
    description: `Delivering 24/7 customer support has never been easier. 
We implement AI-enhanced helpdesks that combine live agents, chatbots, and ticketing systems. 
Multi-channel communication (phone, chat, email, WhatsApp) ensures convenience for your users. 
Integrated CRM gives your agents full context of user history for faster resolutions. 
Self-service options reduce wait times and free up agents for critical issues. 
Performance analytics help you monitor ticket volume, agent productivity, and satisfaction rates. 
Enhance your support experience, customer loyalty, and operational efficiency with us.`,
  },
  {
    icon: <FaRobot className="text-4xl text-white" />,
    title: "AI Workflow Automation",
    description: `Eliminate repetitive tasks using intelligent bots that operate across your apps and systems. 
AI Workflow Automation automates processes like data entry, approvals, task routing, and document scanning. 
Our bots work with tools like Slack, Gmail, Google Sheets, and CRMs without human intervention. 
Built-in logic and conditional workflows allow complex decision-making in real-time. 
Dashboards track automation performance, delays, and success rates to ensure transparency. 
Drag-and-drop builders make customizing workflows easy for non-technical users. 
Save hours of manual effort every week and let your team focus on strategy.`,
  },
];

const ServiceVerticalCards = () => {
  return (
    <section className="py-20 px-4 bg-gray-100 font-sans">
      <div className="max-w-6xl mx-auto space-y-10">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Our Services
        </h2>

        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6 rounded-xl bg-gradient-to-r from-teal-500 to-gray-900 shadow-xl text-white"
          >
            <div className="min-w-[60px]">{service.icon}</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm leading-relaxed text-gray-100 whitespace-pre-line text-justify">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServiceVerticalCards;
