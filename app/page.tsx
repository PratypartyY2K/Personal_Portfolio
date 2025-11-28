import { Hero } from "@/components/hero";
import { HighlightsSection } from "@/components/highlights-section";
import { ProjectsSection } from "@/components/projects/projects-section";
import { ExperienceSection } from "@/components/experience-section";
import { SkillsSection } from "@/components/skills-section";
import { BlogSection } from "@/components/blog-section";
import { ContactSection } from "@/components/contact-section";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-50">
        <ScrollToTop />
        <section className="relative">
          <Hero />
          <HighlightsSection />
        </section>
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
