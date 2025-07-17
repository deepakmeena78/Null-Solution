import React from "react";
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
    <div className="w-full bg-white py-10 px-4">
      <div
        ref={ref}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
      >
        {dummyStats.map((stat, index) => (
          <div
            key={index}
            className="border border-[var(--dark-blue)] rounded-lg py-6 px-4 shadow hover:shadow-md transition duration-300"
          > 
            <h3 className="text-3xl font-bold text-[var(--dark-theme)]">
              {inView ? <CountUp end={stat.value} duration={2} /> : 0}+
            </h3>
            <p className="text-black font-semibold mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCounter;
