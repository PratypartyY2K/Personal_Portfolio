import { Hero } from "@/components/hero";
import { ProjectsSection } from "@/components/projects/projects-section";
import { ExperienceSection } from "@/components/experience-section";
import { SkillsSection } from "@/components/skills-section";
import { BlogSection } from "@/components/blog-section";
import { ContactSection } from "@/components/contact-section";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AboutSection } from "@/components/about-me-section";
import { VisuallyHidden } from "@/components/visually-hidden";
import { ScrollToTop } from "@/components/scroll-to-top";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="top" className="site-grid relative overflow-hidden">
        <VisuallyHidden as="h1">
          Pratyush Kumar – Distributed systems engineer portfolio
        </VisuallyHidden>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[36rem] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_52%)] dark:bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.14),_transparent_52%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-[38rem] h-72 bg-[linear-gradient(to_bottom,transparent,rgba(248,250,252,0.72),transparent)] dark:bg-[linear-gradient(to_bottom,transparent,rgba(15,23,42,0.42),transparent)]" />
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
