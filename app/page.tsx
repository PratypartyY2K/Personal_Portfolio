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
      <main>
        <VisuallyHidden as="h1">
          Pratyush Kumar – Distributed systems engineer portfolio
        </VisuallyHidden>
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
