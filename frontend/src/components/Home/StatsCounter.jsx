// import CountUp from "react-countup";
// import { useInView } from "react-intersection-observer";

// const dummyStats = [
//   { value: 250, label: "Projects Completed" },
//   { value: 100, label: "Satisfied Clients" },
//   { value: 50, label: "Awards & Certifications" },
// ];

// const StatsCounter = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.3,
//   });

//   return (
//     <div className="w-full bg-white py-12 px-4">
//       <div
//         ref={ref}
//         className="max-w-6xl mx-auto grid grid-cols-3 gap-4 text-center"
//       >
//         {dummyStats.map((stat, index) => (
//           <div
//             key={index}
//             className="border border-[var(--dark-blue)] rounded-xl py-6 px-4 shadow-md hover:shadow-lg transition duration-300"
//           >
//             <h3 className="text-4xl font-bold text-[var(--dark-theme)]">
//               {inView ? <CountUp end={stat.value} duration={2} /> : 0}+
//             </h3>
//             <p className="text-base font-semibold text-gray-800 mt-2">{stat.label}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default StatsCounter;




import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const dummyStats = [
  { value: 250, label: "Projects Completed" },
  { value: 100, label: "Satisfied Clients" },
  { value: 50, label: "Awards & Certifications" },
];

const StatsCounter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="w-full bg-white py-12 px-4">
      <div
        ref={ref}
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center"
      >
        {dummyStats.map((stat, index) => (
          <div
            key={index}
            className="border border-[var(--dark-blue)] rounded-xl py-6 px-4 shadow-md hover:shadow-lg transition duration-300"
          >
            <h3 className="text-4xl font-bold text-[var(--dark-theme)]">
              {inView ? <CountUp end={stat.value} duration={2} /> : 0}+
            </h3>
            <p className="text-base font-semibold text-gray-800 mt-2">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCounter;
