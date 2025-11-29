import { Hero } from "@/components/hero";
import { ProjectsSection } from "@/components/projects/projects-section";
import { ExperienceSection } from "@/components/experience-section";
import { SkillsSection } from "@/components/skills-section";
import { BlogSection } from "@/components/blog-section";
import { ContactSection } from "@/components/contact-section";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { AboutSection } from "@/components/about-me-section";

export default function HomePage() {
  return (
    <>
      <Navbar />
      {/* <main className="bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-50"> */}
      <main>
        <ScrollToTop />
        <section className="relative">
          <Hero />
        </section>
        <AboutSection />
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
