import { Hero } from "@/components/hero";
import { HighlightsSection } from "@/components/highlights-section";
import { ProjectsSection } from "@/components/projects-section";
import { ExperienceSection } from "@/components/experience-section";
import { SkillsSection } from "@/components/skills-section";
import { BlogSection } from "@/components/blog-section";
import { ContactSection } from "@/components/contact-section";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-14">
        <Hero />
        <HighlightsSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
