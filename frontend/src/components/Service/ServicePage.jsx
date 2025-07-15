// import React, { useEffect, useState } from "react";
// // import axios from "axios";
// import { useLocation } from "react-router-dom";

// const ServicePage = () => {
//   const [servicesData, setServicesData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const location = useLocation();

//   const categories = ["All", "Design", "Development", "CRM"];

//   const query = new URLSearchParams(location.search);
//   const categoryParam = query.get("category") || "All";

//   useEffect(() => {
//     const fetchServices = async () => {
//       try {
//         const dummyData = [
//           {
//             icon: "/images/design.png",
//             title: "Web Design Services",
//             category: "Design",
//             description:
//               "Skilled designers offer contemporary website designing solution. Obtain an interactive, attractive and responsive website for your online business.",
//           },
//           {
//             icon: "/images/dev.png",
//             title: "Web Development Services",
//             category: "Development",
//             description:
//               "Team of proficient developers manages website development projects to deliver fully functional and seamless websites and web applications to clientele.",
//           },
//           {
//             icon: "/images/crm.png",
//             title: "CRM/ERP Development",
//             category: "CRM",
//             description:
//               "We make your all problem and solution under one computer where you find all your company daily planning needs data in CRM/ERP software.",
//           },
//         ];

//         // const response = await axios.get("https://your-api.com/services");
//         // setServicesData(response.data);
//         setServicesData(dummyData);
//       } catch (err) {
//         console.error("Failed to fetch services:", err);
//       }
//     };

//     fetchServices();
//   }, []);

//   useEffect(() => {
//     if (categoryParam === "All") {
//       setFilteredData(servicesData);
//     } else {
//       const filtered = servicesData.filter(
//         (service) => service.category === categoryParam
//       );
//       setFilteredData(filtered);
//     }
//   }, [servicesData, categoryParam]);

//   return (
//     // <section className="py-12 px-4 bg-white dark:bg-white transition-colors duration-300 min-h-screen">
//       <section className="pt-[120px] pb-12 px-4 bg-white dark:bg-white transition-colors duration-300 min-h-screen">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
//           Our Services
//         </h2>

//         {/* Filter Buttons */}
//         <div className="flex justify-center gap-4 mb-10 flex-wrap">
//           {categories.map((cat) => (
//             <a
//               key={cat}
//               href={`?category=${cat}`}
//               className={`px-4 py-2 rounded-full border text-sm font-medium transition shadow-sm hover:bg-white hover:text-white ${
//                 categoryParam === cat
//                   ? "bg-[var(--dark-theme)] text-white"
//                   : "bg-white border-gray-300 text-gray-700"
//               }`}
//             >
//               {cat}
//             </a>
//           ))}
//         </div>

//         {/* Services Grid */}
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {filteredData.length > 0 ? (
//             filteredData.map((service, index) => (
//               <div
//                 key={index}
//                 className="group text-black bg-white dark:bg-white rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 hover:bg-[var(--dark-theme)] cursor-pointer"
//               >
//                 <div className="flex justify-center mb-4">
//                   <img
//                     src={service.icon}
//                     alt={service.title}
//                     className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110"
//                   />
//                 </div>
//                 <h3 className="text-lg font-semibold text-center text-gray-800 dark:text-white group-hover:text-white transition">
//                   {service.title}
//                 </h3>
//                 <p className="text-sm text-center text-gray-600 dark:text-gray-300 mt-2 group-hover:text-white transition">
//                   {service.description}
//                 </p>
//                 <div className="text-center mt-4">
//                   <a
//                     href="#"
//                     className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline flex justify-center items-center gap-1 group-hover:text-white transition"
//                   >
//                     Learn More <span className="text-lg">›</span>
//                   </a>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-center text-gray-500 col-span-full">
//               No services found for "{categoryParam}"
//             </p>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicePage;



// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

// const ServicePage = () => {
//   const [servicesData, setServicesData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const location = useLocation();

//   const categories = ["All", "Design", "Development", "CRM"];
//   const query = new URLSearchParams(location.search);
//   const categoryParam = query.get("category") || "All";

//   useEffect(() => {
//     const fetchServices = async () => {
//       try {
//         const dummyData = [
//           {
//             icon: "/images/design.png",
//             title: "Web Design Services",
//             category: "Design",
//             description:
//               "Skilled designers offer contemporary website designing solution. Obtain an interactive, attractive and responsive website for your online business.",
//           },
//           {
//             icon: "/images/dev.png",
//             title: "Web Development Services",
//             category: "Development",
//             description:
//               "Team of proficient developers manages website development projects to deliver fully functional and seamless websites and web applications to clientele.",
//           },
//           {
//             icon: "/images/crm.png",
//             title: "CRM/ERP Development",
//             category: "CRM",
//             description:
//               "We make your all problem and solution under one computer where you find all your company daily planning needs data in CRM/ERP software.",
//           },
//         ];
//         setServicesData(dummyData);
//       } catch (err) {
//         console.error("Failed to fetch services:", err);
//       }
//     };
//     fetchServices();
//   }, []);

//   useEffect(() => {
//     if (categoryParam === "All") {
//       setFilteredData(servicesData);
//     } else {
//       const filtered = servicesData.filter(
//         (service) => service.category === categoryParam
//       );
//       setFilteredData(filtered);
//     }
//   }, [servicesData, categoryParam]);

//   return (
//     <section className="pt-[120px] pb-12 px-4 bg-white dark:bg-white transition-colors duration-300 min-h-screen">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
//           Our Services
//         </h2>

//         {/* Filter Buttons */}
//         <div className="flex justify-center gap-4 mb-10 flex-wrap">
//           {categories.map((cat) => (
//             <a
//               key={cat}
//               href={`?category=${cat}`}
//               className={`px-4 py-2 rounded-full border text-sm font-medium transition shadow-sm hover:bg-white hover:text-white ${
//                 categoryParam === cat
//                   ? "bg-[var(--dark-theme)] text-white"
//                   : "bg-white border-gray-300 text-gray-700"
//               }`}
//             >
//               {cat}
//             </a>
//           ))}
//         </div>

//         {/* Services Grid */}
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {filteredData.length > 0 ? (
//             filteredData.map((service, index) => (
//               <div
//                 key={index}
//                 className="group relative text-white rounded-2xl p-6 shadow-lg transition-all duration-300 cursor-pointer bg-gradient-to-r from-pink-600 via-purple-700 to-gray-900"
//               >
//                 {/* Popup Tag on Hover */}
//                 <div className="absolute top-2 right-2 bg-white text-black text-xs font-semibold px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
//                   {service.category}
//                 </div>

//                 <div className="flex justify-center mb-4">
//                   <img
//                     src={service.icon}
//                     alt={service.title}
//                     className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110"
//                   />
//                 </div>

//                 <h3 className="text-lg font-semibold text-center group-hover:text-white transition">
//                   {service.title}
//                 </h3>
//                 <p className="text-sm text-center text-gray-200 mt-2 group-hover:text-white transition">
//                   {service.description}
//                 </p>
//                 <div className="text-center mt-4">
//                   <a
//                     href="#"
//                     className="text-sm font-semibold text-white hover:underline flex justify-center items-center gap-1 group-hover:text-white transition"
//                   >
//                     Learn More <span className="text-lg">›</span>
//                   </a>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-center text-gray-500 col-span-full">
//               No services found for "{categoryParam}"
//             </p>
//           )}
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
  const [filteredData, setFilteredData] = useState([]);
  const location = useLocation();

  const categories = ["All", "Design", "Development", "CRM"];
  const query = new URLSearchParams(location.search);
  const categoryParam = query.get("category") || "All";

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

  useEffect(() => {
    if (categoryParam === "All") {
      setFilteredData(servicesData);
    } else {
      const filtered = servicesData.filter(
        (service) => service.category === categoryParam
      );
      setFilteredData(filtered);
    }
  }, [servicesData, categoryParam]);

  return (
    <section className="pt-[120px] pb-12 px-4 bg-white dark:bg-white transition-colors duration-300 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
          Our Services
        </h2>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {categories.map((cat) => (
            <a
              key={cat}
              href={`?category=${cat}`}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition shadow-sm hover:bg-white hover:text-white ${
                categoryParam === cat
                  ? "bg-[var(--dark-theme)] text-white"
                  : "bg-white border-gray-300 text-gray-700"
              }`}
            >
              {cat}
            </a>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredData.length > 0 ? (
            filteredData.map((service, index) => (
              <div
                key={index}
                className="group relative text-white rounded-2xl p-6 shadow-md transition-all duration-300 cursor-pointer bg-gradient-to-r from-[#c31432] via-[#240b36] to-[#0f0c29]"
              >
                {/* Hover Popup */}
                <div className="absolute top-2 right-2 bg-white text-black text-xs font-semibold px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                  {service.category}
                </div>

                <div className="flex justify-center mb-4">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <h3 className="text-lg font-semibold text-center group-hover:text-white transition">
                  {service.title}
                </h3>
                <p className="text-sm text-center text-gray-200 mt-2 group-hover:text-white transition">
                  {service.description}
                </p>
                <div className="text-center mt-4">
                  <a
                    href="#"
                    className="text-sm font-semibold text-white hover:underline flex justify-center items-center gap-1 group-hover:text-white transition"
                  >
                    Learn More <span className="text-lg">›</span>
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No services found for "{categoryParam}"
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicePage;
