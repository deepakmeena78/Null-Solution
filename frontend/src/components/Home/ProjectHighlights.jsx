import { Lightbulb, TrendingUp, Headphones } from "react-feather";

const ProjectHighlights = () => {
  return (
    <section className="bg-white py-10 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl font-bold text-[var(--dark-theme)] mb-4">
            Why Choose Null Solutions?
          </h2>
          <p className="text-[#606080] text-base md:text-lg mb-6">
            We deliver secure, scalable, and intelligent outsourcing with measurable results.
          </p>

          <div className="space-y-6">
            {/* Card 1 */}
            <div className="flex items-start gap-4">
              <div className="bg-pink-100 text-pink-600 p-3 rounded-xl">
                <Lightbulb className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[var(--dark-theme)]">
                  AI-Powered Services
                </h3>
                <p className="text-sm text-[#606080]">
                  We optimize P2P, R2R, S2P, Audit & Customer Support using automation and generative AI.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-start gap-4">
              <div className="bg-pink-100 text-pink-600 p-3 rounded-xl">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[var(--dark-theme)]">
                  Strategy & Growth
                </h3>
                <p className="text-sm text-[#606080]">
                  Our approach blends expert talent with smart technology to scale your operations reliably.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-start gap-4">
              <div className="bg-pink-100 text-pink-600 p-3 rounded-xl">
                <Headphones className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[var(--dark-theme)]">
                  Dedicated Support
                </h3>
                <p className="text-sm text-[#606080]">
                  We streamline your non-core tasks so you can focus on what matters — growing your business.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden lg:block">
          <img
            src="/Images/highlight.jpg"
            alt="Highlights Illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlights;
