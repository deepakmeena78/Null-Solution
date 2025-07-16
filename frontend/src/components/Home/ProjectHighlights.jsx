import React from "react";
import Tilt from "react-parallax-tilt";
import { FiCpu, FiTrendingUp, FiHeadphones } from "react-icons/fi";

const ProjectHighlights = () => {
  return (
    <section className="pt-[120px] pb-12 px-4 bg-white dark:bg-white min-h-screen">
    {/* // <section className="pt-0 mt-0 px-4 pb-12 bg-white dark:bg-white"> */}

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-4xl font-bold text-[var(--dark-blue)] dark:text-[var(--dark-blue)] mb-4">
            Why Choose Null Solutions?
          </h2>
          <p className="text-lg font-normal text-black dark:text-black mb-6">
            We deliver secure, scalable, and intelligent outsourcing with measurable results.
          </p>

          <div className="space-y-6">
            {/* Card 1 */}
            <div className="flex items-start gap-4">
              <div className="bg-[var(--light-theme)] text-[var(--dark-blue)] p-3 rounded-xl">
                <FiCpu className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[var(--dark-blue)]">
                  AI-Powered Services
                </h3>
                <p className="text-sm text-[#606080]">
                  We optimize P2P, R2R, S2P, Audit & Customer Support using automation and generative AI.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-start gap-4">
              <div className="bg-[var(--light-theme)] text-[var(--dark-blue)] p-3 rounded-xl">
                <FiTrendingUp className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[var(--dark-blue)]">
                  Strategy & Growth
                </h3>
                <p className="text-sm text-[#606080]">
                  Our approach blends expert talent with smart technology to scale your operations reliably.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-start gap-4">
              <div className="bg-[var(--light-theme)] text-[var(--dark-blue)] p-3 rounded-xl">
                <FiHeadphones className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[var(--dark-blue)]">
                  Dedicated Support
                </h3>
                <p className="text-sm text-[#606080]">
                  We streamline your non-core tasks so you can focus on what matters — growing your business.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image with Mouse Effect */}
        <Tilt
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          perspective={1000}
          scale={1.05}
          transitionSpeed={1000}
          gyroscope={true}
          className="w-full flex justify-center"
        >
          <img
            src="/Images/highlight.jpg"
            alt="Highlights Illustration"
            className="w-[80%] max-w-md rounded-2xl shadow-lg"
          />
        </Tilt>
      </div>
    </section>
  );
};

export default ProjectHighlights;
