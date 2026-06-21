import { useState, useEffect } from "react";
import { ProjectItem, ExperienceItem } from "./types";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import CardModal from "./components/CardModal";
import { motion, useScroll, useSpring } from "motion/react";
import { Menu, X, Terminal, Monitor, Sparkles } from "lucide-react";

export default function App() {
  // Modal State Logic
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);

  // Mobile Navigation toggle state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Sticky Navbar blur triggering background
  const [isScrolled, setIsScrolled] = useState(false);

  // TOP Page Scroll Progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Scroll offset detector
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set selected portfolio project and present modal
  const handleSelectProject = (project: ProjectItem) => {
    setSelectedExperience(null);
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Set selected career experience and present modal
  const handleSelectExperience = (experience: ExperienceItem) => {
    setSelectedProject(null);
    setSelectedExperience(experience);
    setIsModalOpen(true);
  };

  // Close active modal state
  const handleCloseModal = () => {
    setIsModalOpen(false);
    // keep state temporarily for exit animations, standard timeout reset:
    setTimeout(() => {
      if (!isModalOpen) {
        setSelectedProject(null);
        setSelectedExperience(null);
      }
    }, 200);
  };

  // Safe window custom element scroll trigger
  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70; // Header margin padding offset
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-black text-neutral-200 overflow-x-hidden font-sans antialiased selection:bg-[#22c55e]/20 selection:text-white">
      {/* Top scroll layout progress indicator */}
      <motion.div
        id="scroll-progress-bar"
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-neutral-800 via-[#22c55e]/80 to-neutral-400 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Primary Floating Navigation Engine */}
      <nav
        id="primary-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 border-b ${
          isScrolled
            ? "bg-black/85 backdrop-blur-md border-neutral-900 py-3.5"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          
          {/* Logo brand */}
          <button
            id="nav-logo"
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 font-mono text-sm tracking-widest text-[#22c55e] font-semibold cursor-pointer group"
          >
            <Terminal size={16} className="transition-transform duration-300 group-hover:rotate-6" />
            <span className="text-white">S. SINHA</span> // DEV
          </button>

          {/* Desktop Links list */}
          <div className="hidden md:flex items-center gap-7">
            {[
              { id: "about", name: "About" },
              { id: "experience", name: "Experience" },
              { id: "projects", name: "Projects" },
              { id: "skills", name: "Skills" },
            ].map((link) => (
              <button
                key={link.id}
                id={`desktop-nav-link-${link.id}`}
                onClick={() => scrollToSection(link.id)}
                className="text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors duration-300 cursor-pointer"
              >
                {link.name}
              </button>
            ))}
            
            <button
              id="desktop-nav-link-contact"
              onClick={() => scrollToSection("contact")}
              className="text-xs font-mono uppercase tracking-widest bg-neutral-900/40 border border-neutral-850 hover:border-neutral-700 hover:bg-neutral-900 text-neutral-300 hover:text-[#22c55e] px-4 py-2 rounded-xl transition-all duration-300 cursor-pointer"
            >
              Get In Touch
            </button>
          </div>

          {/* Mobile responsive toggle */}
          <div className="md:hidden">
            <button
              id="mobile-nav-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-neutral-400 hover:text-white transition-colors duration-300"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile slide-down navigation drawer */}
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-neutral-950 border-b border-neutral-900 px-6 py-6 md:hidden flex flex-col gap-5 text-left shadow-2xl z-20"
          >
            {[
              { id: "about", name: "About" },
              { id: "experience", name: "Experience" },
              { id: "projects", name: "Projects" },
              { id: "skills", name: "Skills" },
            ].map((link) => (
              <button
                key={link.id}
                id={`mobile-nav-link-${link.id}`}
                onClick={() => scrollToSection(link.id)}
                className="text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors duration-300 w-full text-left py-2.5- border-b border-neutral-900/40"
              >
                {link.name}
              </button>
            ))}
            <button
              id="mobile-nav-link-contact"
              onClick={() => scrollToSection("contact")}
              className="text-xs font-mono uppercase tracking-widest bg-[#1b2b1b]/80 border border-emerald-950/30 text-[#22c55e] text-center w-full py-3 rounded-xl mt-4 cursor-pointer"
            >
              Get In Touch
            </button>
          </motion.div>
        )}
      </nav>

      {/* Main Core Document Layout Flow */}
      <main className="relative z-10">
        <Hero onScrollToProjects={() => scrollToSection("projects")} />
        <About />
        <Experience onSelectExperience={handleSelectExperience} />
        <Projects onSelectProject={handleSelectProject} />
        <Skills />
        <Contact />
      </main>

      {/* Cinematic Modal Case Study Viewer overlay */}
      <CardModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
        experience={selectedExperience}
      />
    </div>
  );
}
