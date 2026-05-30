import Seo from "../../components/common/Seo/Seo";
import HeroSection from "../../components/sections/home/HeroSection/HeroSection";
import ProjectsSection from "../../components/sections/home/ProjectsSection/ProjectsSection";
import ContactSection from "../../components/sections/home/ContactSection/ContactSection";

function Home() {
  return (
    <>
      <Seo
        title="RayhanDev | Frontend Developer Portfolio"
        description="Explore Rayhan's frontend developer portfolio, projects, blog posts, and learning journey."
        keywords="Rayhan, frontend developer, portfolio, react portfolio, mongodb, express"
        url="https://rayhancsdev.vercel.app"
        type="website"
      />

      <main>
        <HeroSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}

export default Home;
