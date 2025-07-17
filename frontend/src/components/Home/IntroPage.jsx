// import Tilt from "react-parallax-tilt";
// import { Link } from "react-router-dom";

// const IntroPage = () => {
//   return (
//     // <section className="pt-[120px] pb-12 px-4 bg-white dark:bg-white min-h-screen">
//     <section className="pt-[120px] pb-16 px-4 bg-white dark:bg-white">

//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//         {/* Text Content */}
//         <div>
//           <h1 className="text-4xl font-bold text-[var(--dark-blue)] dark:text-[var(--dark-blue)] mb-4">
//             Welcome to Our Digital World!
//           </h1>
//           {/* <p className="text-lg text-black dark:text-black mb-6">
//             We are passionate about creating innovative software solutions and delivering top-notch digital experiences. Let's build the future together!
//           </p> */}
//           <p className="text-lg font-normal text-black dark:text-black mb-6">
//             We are passionate about creating innovative software solutions and
//             delivering top-notch digital experiences. Let's build the future
//             together!
//           </p>

//           <Link
//             to="/about"
//             className="inline-block bg-[var(--dark-blue)] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-[var(--hover-color)] hover:shadow-lg transition-all duration-300"
//           >
//             Explore Services
//           </Link>
//         </div>

//         {/* Image with Mouse Effect */}
//         <Tilt
//           tiltMaxAngleX={20}
//           tiltMaxAngleY={20}
//           perspective={1000}
//           scale={1.05}
//           transitionSpeed={1000}
//           gyroscope={true}
//           className="w-full flex justify-center"
//         >
//           <img
//             src="/Images/intropage.jpg"
//             alt="Intro"
//             className="w-[80%] max-w-md rounded-2xl shadow-lg"
//           />
//         </Tilt>
//       </div>
//     </section>
//   );
// };

// export default IntroPage;




import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const IntroPage = () => {
  return (
    <section className="pt-[120px] pb-16 px-4 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Content with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-5xl font-extrabold text-[var(--dark-blue)] dark:text-white mb-6 leading-tight"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Welcome to <span className="text-[var(--hover-color)]">Our</span> Digital World!
          </motion.h1>

          <motion.p
            className="text-lg text-gray-800 dark:text-gray-300 mb-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            We are passionate about crafting innovative software solutions and
            delivering high-quality digital experiences. Let’s build the future
            together, one line of code at a time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            <Link
              to="/about"
              className="inline-block bg-[var(--dark-theme)] text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-[var(--hover-color)] hover:shadow-xl transition-all duration-300"
            >
              Explore Services
            </Link>
          </motion.div>
        </motion.div>

        {/* Image with Tilt Effect */}
        <Tilt
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </Tilt>
      </div>
    </section>
  );
};

export default IntroPage;
