import Seo from "../../components/common/Seo/Seo";
import HeroSection from "../../components/sections/home/HeroSection/HeroSection";
import SkillsSection from "../../components/sections/home/SkillsSection/SkillsSection";
import AboutSection from "../../components/sections/home/AboutSection/AboutSection";
import ProjectsSection from "../../components/sections/home/ProjectsSection/ProjectsSection";
import ContactSection from "../../components/sections/home/ContactSection/ContactSection";

function Home() {
  return (
    <>
      <Seo
        title="RayhanDev | Full-Stack Developer Portfolio"
        description="Explore Rayhan's full-stack developer portfolio, projects, blog posts, research notes, and learning journey."
        keywords="Rayhan, full stack developer, portfolio, react portfolio, mongodb, express"
        url = "https://rayhancsdev.vercel.app"
        type="website"
      />

      <main>
        <HeroSection />
        <SkillsSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}

export default Home;