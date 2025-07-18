import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const IntroPage = () => {
  return (
    <section className="pt-[120px] pb-16 px-4 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Animated Text with Typewriter */}
        <motion.div
          initial={{ opacity: 0, skewX: -10 }}
          animate={{ opacity: 1, skewX: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-extrabold leading-tight mb-6">
            <span className="text-[var(--dark-theme)] dark:text-white mr-2">
              <Typewriter
                words={["Welcome to"]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={5000}
              />
            </span>
            <span className="text-[var(--hover-color)]">
              <Typewriter
                words={[" Our Digital World!"]}
                loop={0}
                cursor={false}
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={5000}
              />
            </span>
          </h1>

          <motion.p
            className="text-lg text-gray-800 dark:text-gray-300 mb-8"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            We are passionate about crafting innovative software solutions and
            delivering high-quality digital experiences. Let’s build the future
            together, one line of code at a time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            <motion.div
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 20px var(--hover-color)",
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                to="/about"
                className="bg-[var(--dark-theme)] text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-[var(--hover-color)] transition-all duration-300"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Image Section with Tilt Effect */}
        <Tilt
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}
          perspective={1000}
          scale={1.05}
          transitionSpeed={1000}
          gyroscope={true}
          className="w-full flex justify-center"
        >
          <motion.img
            src="/Images/intropage.jpg"
            alt="Intro"
            className="w-[80%] max-w-md rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
            initial={{ y: 80, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
          />
        </Tilt>
      </div>
    </section>
  );
};

export default IntroPage;
