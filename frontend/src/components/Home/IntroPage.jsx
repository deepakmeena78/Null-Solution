import Tilt from "react-parallax-tilt";

const IntroPage = () => {
  return (
    <section className="pt-[120px] pb-12 px-4 bg-white dark:bg-white min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <h1 className="text-4xl font-bold text-[var(--dark-theme)] dark:text-[var(--dark-theme)] mb-4">
            Welcome to Our Digital World!
          </h1>
          {/* <p className="text-lg text-black dark:text-black mb-6">
            We are passionate about creating innovative software solutions and delivering top-notch digital experiences. Let's build the future together!
          </p> */}
          <p className="text-lg font-normal text-black dark:text-black mb-6">
  We are passionate about creating innovative software solutions and delivering top-notch digital experiences. Let's build the future together!
</p>

          <a
            href="#services"
            className="inline-block bg-[var(--dark-theme)] text-white px-6 py-3 rounded-full font-medium hover:bg-pink-700 transition"
          >
            Explore Services
          </a>
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
            src="/Images/intropage.jpg"
            alt="Intro"
            className="w-[80%] max-w-md rounded-2xl shadow-lg"
          />
        </Tilt>
      </div>
    </section>
  );
};

export default IntroPage;
