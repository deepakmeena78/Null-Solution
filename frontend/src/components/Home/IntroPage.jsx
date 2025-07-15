import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"; // ✅ correct import for loadFull


const IntroPage = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 -z-10"
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "#000000" } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse", // push away on hover
              },
              onClick: {
                enable: true,
                mode: "push", // add particles on click
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
              push: {
                quantity: 4,
              },
            },
          },
          particles: {
            number: {
              value: 80,
              density: { enable: true, area: 800 },
            },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: {
              value: 0.5,
              random: true,
            },
            size: {
              value: 2,
              random: true,
            },
            move: {
              enable: true,
              speed: 1.2,
              direction: "none",
              outModes: "out",
            },
            links: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.3,
              width: 1,
            },
          },
          detectRetina: true,
        }}
      />

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Instoweb</h1>
        <p className="text-lg max-w-xl text-white/80">
          We create scalable CRM/ERP systems with smooth, modern UI experiences.
        </p>
        <button className="mt-8 px-6 py-3 bg-pink-600 hover:bg-pink-700 rounded-full font-semibold transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default IntroPage;
