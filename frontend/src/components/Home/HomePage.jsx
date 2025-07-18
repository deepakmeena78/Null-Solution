import IndustriesWeServe from "./IndustriesWeServe";
import IntroPage from "./IntroPage";
import ProjectHighlights from "./ProjectHighlights";
import ServicesSection from "./ServicesSection";
import StatsCounter from "./StatsCounter";

function HomePage() {
  return (
    <>
      <IntroPage />
      <ProjectHighlights/>
      <IndustriesWeServe/>
      <ServicesSection/>
      <StatsCounter/>
    </>
  );
}

export default HomePage;
