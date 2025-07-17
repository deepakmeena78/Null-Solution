import IndustriesWeServe from "./IndustriesWeServe";
import IntroPage from "./IntroPage";
import ProjectHighlights from "./ProjectHighlights";
import StatsCounter from "./StatsCounter";

function HomePage() {
  return (
    <>
      <IntroPage />
      <ProjectHighlights/>
      <IndustriesWeServe/>
      <StatsCounter/>
    </>
  );
}

export default HomePage;
