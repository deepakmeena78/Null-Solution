// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

// const ServicePage = () => {
//   const [servicesData, setServicesData] = useState([]);
//   const location = useLocation();

//   useEffect(() => {
//     const dummyData = [
//       {
//         icon: "/images/design.png",
//         title: "Web Design Services",
//         category: "Design",
//         description:
//           "Skilled designers offer contemporary website designing solution. Obtain an interactive, attractive and responsive website for your online business.",
//       },
//       {
//         icon: "/images/dev.png",
//         title: "Web Development Services",
//         category: "Development",
//         description:
//           "Team of proficient developers manages website development projects to deliver fully functional and seamless websites and web applications to clientele.",
//       },
//       {
//         icon: "/images/crm.png",
//         title: "CRM/ERP Development",
//         category: "CRM",
//         description:
//           "We make your all problem and solution under one computer where you find all your company daily planning needs data in CRM/ERP software.",
//       },
//     ];

//     setServicesData(dummyData);
//   }, []);

//   return (
//     <section className="pt-24 pb-12 px-4 bg-white dark:bg-white min-h-screen">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl font-bold text-center text-[var(--dark-blue)] mb-14">
//           Our Services
//         </h2>

//         {/* Services Grid */}
//         <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
//           {servicesData.map((service, index) => (
//             <div
//               key={index}
//               className={`group relative rounded-2xl p-6 shadow-lg transition-all duration-300 transform bg-white border hover:shadow-2xl hover:-translate-y-1 min-h-[400px] flex flex-col justify-between ${
//                 index === 1 ? "bg-[var(--dark-blue)]" : ""
//               }`}
//             >
//               {/* Category Tag */}
//               <div className="absolute top-2 right-2 bg-[var(--dark-blue)] text-white text-xs font-semibold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
//                 {service.category}
//               </div>

//               <h3
//                 className={`text-lg font-semibold text-center mb-2 transition group-hover:text-[var(--dark-blue)] ${
//                   index === 1 ? "text-white" : "text-gray-800"
//                 }`}
//               >
//                 {service.title}
//               </h3>
//               <p
//                 className={`text-sm text-center transition ${
//                   index === 1
//                     ? "text-white"
//                     : "text-[var(--dark-blue)] group-hover:text-[var(--dark-blue)]"
//                 }`}
//               >
//                 {service.description}
//               </p>
//               <div className="text-center mt-4">
//                 <a
//                   href="#"
//                   className={`text-sm font-semibold inline-flex items-center gap-1 transition-all duration-300 ${
//                     index === 1
//                       ? "text-white hover:text-pink-300"
//                       : "text-blue-600 hover:text-[var(--dark-blue)]"
//                   }`}
//                 >
//                   Learn More <span className="text-lg">›</span>
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicePage;


import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ServicePage = () => {
  const [servicesData, setServicesData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const dummyData = [
      {
        icon: "/images/design.png",
        title: "Web Design Services",
        category: "Design",
        description:
          "Skilled designers offer contemporary website designing solution. Obtain an interactive, attractive and responsive website for your online business.",
      },
      {
        icon: "/images/dev.png",
        title: "Web Development Services",
        category: "Development",
        description:
          "Team of proficient developers manages website development projects to deliver fully functional and seamless websites and web applications to clientele.",
      },
      {
        icon: "/images/crm.png",
        title: "CRM/ERP Development",
        category: "CRM",
        description:
          "We make your all problem and solution under one computer where you find all your company daily planning needs data in CRM/ERP software.",
      },
    ];

    setServicesData(dummyData);
  }, []);

  return (
    <section className="pt-24 pb-12 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-14">
          Our Services
        </h2>

        {/* Services Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="group relative rounded-2xl p-6 shadow-lg transition-all duration-300 transform bg-white border hover:bg-[var(--dark-blue)] hover:shadow-2xl hover:-translate-y-1 min-h-[420px] flex flex-col justify-between"
            >
              {/* Category Tag */}
              <div className="absolute top-2 right-2 bg-[var(--hover-color)] text-white text-xs font-semibold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                {service.category}
              </div>

              <h3 className="text-lg font-semibold text-center mb-2 transition group-hover:text-white text-gray-800">
                {service.title}
              </h3>
              <p className="text-sm text-center text-gray-600 group-hover:text-white transition">
                {service.description}
              </p>
              <div className="text-center mt-4">
                <a
                  href="#"
                  className="text-sm font-semibold inline-flex items-center gap-1 text-blue-600 group-hover:text-white transition-all duration-300"
                >
                  Learn More <span className="text-lg">›</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePage;
