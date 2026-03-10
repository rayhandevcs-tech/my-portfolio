import HeroSection from "../components/sections/home/HeroSection";
import SkillsSection from "../components/sections/home/SkillsSection";
import AboutSection from "../components/sections/home/AboutSection";
import ProjectsSection from "../components/sections/home/ProjectsSection";
import ContactSection from "../components/sections/home/ContactSection";

function Home() {
  return (
    <main>
      <HeroSection />
      <SkillsSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}

export default Home;