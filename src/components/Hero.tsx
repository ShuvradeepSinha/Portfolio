import { motion } from "motion/react";
import { ArrowDownRight, Terminal, Sparkles, MapPin, MonitorPlay } from "lucide-react";
import { BIO } from "../data";

interface HeroProps {
  onScrollToProjects: () => void;
}

export default function Hero({ onScrollToProjects }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-black"
    >
      {/* Background Decorative Blur Gradients resembling lens flared lights */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 right-10 w-96 h-96 rounded-full bg-emerald-500/5 blur-[120px]" />
        <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-neutral-900/40 blur-[100px]" />
        <div className="absolute top-[30%] left-[20%] w-[35rem] h-[35rem] rounded-full bg-[#1b2a1a]/5 blur-[150px]" />
        
        {/* Subtle dot matrix grid */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Grid: Cinematic Typography Hero Text */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Tagline Badge */}
          <motion.div
            id="hero-badge"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-800 bg-neutral-950/80 backdrop-blur-md mb-6"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono font-medium uppercase tracking-widest text-neutral-400 flex items-center gap-1">
              <Sparkles size={11} className="text-emerald-400" /> Active System & Engineering Focus
            </span>
          </motion.div>

          {/* Hero Name / Primary Title */}
          <motion.div
            id="hero-title-container"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-sans tracking-tight text-white leading-[1.1] mb-6">
              Shuvradeep Sinha
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 via-neutral-400 to-neutral-600 font-medium text-3xl sm:text-4xl md:text-5xl">
                Computer Science Engineer <br className="hidden md:inline" /> & Frontend Developer
              </span>
            </h1>
          </motion.div>

          {/* Hero Subheadline / Description */}
          <motion.p
            id="hero-description"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-neutral-400 text-base md:text-lg max-w-xl mb-10 leading-relaxed font-sans"
          >
            Bridging low-end engineering design with low-end, web frontend development.
          </motion.p>

          {/* CTA Group */}
          <motion.div
            id="hero-ctas"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button
              id="hero-cta-primary"
              onClick={onScrollToProjects}
              className="group flex items-center gap-2 bg-neutral-100 hover:bg-neutral-200 text-black font-medium text-sm px-6 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-emerald-950/20 active:scale-95 cursor-pointer"
            >
              Explore Creative Engineering Portfolio
              <ArrowDownRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </button>
            
            <a
              id="hero-cta-secondary"
              href="#contact"
              className="flex items-center gap-2 border border-neutral-850 hover:border-neutral-700 bg-neutral-950/30 text-neutral-300 hover:text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-all duration-300 cursor-pointer"
            >
              <Terminal size={14} className="text-emerald-400" /> Init Collaboration
            </a>
          </motion.div>

          {/* Hero Geo Details and Stats */}
          <motion.div
            id="hero-meta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="flex flex-wrap gap-x-8 gap-y-4 border-t border-neutral-900 pt-8 mt-12 w-full max-w-lg text-[#888888] text-xs font-mono"
          >
            <span className="flex items-center gap-1.5">
              <MapPin size={13} className="text-emerald-400" /> Guwahati / Meghalaya, IN
            </span>
            <span className="flex items-center gap-1.5">
              <Terminal size={13} className="text-emerald-400" /> C++, Python, SQL, JS ES6
            </span>
            <span className="flex items-center gap-1.5">
              <MonitorPlay size={13} className="text-emerald-400" /> Web & Intelligent Systems
            </span>
          </motion.div>
        </div>

        {/* Right Grid: Gorgeous cinematic profile image frame with depth of field look */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div
            id="hero-avatar-frame"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-72 h-96 md:w-80 md:h-[26rem] rounded-2xl group cursor-pointer"
          >
            {/* Visual ambient glass backdrop */}
            <div className="absolute inset-0 border border-neutral-800 bg-neutral-950/20 backdrop-blur-[4px] rounded-2xl transform translate-x-3 translate-y-3 transition-transform duration-500 group-hover:translate-x-1.5 group-hover:translate-y-1.5 z-0" />

            {/* Dark glossy outline container */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-neutral-800/80 bg-neutral-950 z-10 shadow-2xl transition-all duration-500 group-hover:border-[#22c55e]/30">
              {/* Profile Image using selected dark low-key portfolio placeholder */}
              <img
                id="hero-profile-image"
                src="/assets/profile.png"
                alt="Shuvradeep Sinha portrait"
                className="w-full h-full object-cover grayscale brightness-[0.7] contrast-[1.1] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-[0.8]"
                referrerPolicy="no-referrer"
              />

              {/* Grid scanner animation Overlay */}
              <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent shadow-[0_0_15px_#10b981] animate-[bounce_5s_infinite] pointer-events-none" />

              {/* Edge Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20 pointer-events-none" />

              {/* Corner framing brackets to trigger low-tech cinematic focus */}
              <span className="absolute top-4 left-4 h-3 w-3 border-t-2 border-l-2 border-neutral-600 rounded-tl pointer-events-none transition-colors duration-500 group-hover:border-emerald-500" />
              <span className="absolute top-4 right-4 h-3 w-3 border-t-2 border-r-2 border-neutral-600 rounded-tr pointer-events-none transition-colors duration-500 group-hover:border-emerald-500" />
              <span className="absolute bottom-4 left-4 h-3 w-3 border-b-2 border-l-2 border-neutral-600 rounded-bl pointer-events-none transition-colors duration-500 group-hover:border-emerald-500" />
              <span className="absolute bottom-4 right-4 h-3 w-3 border-b-2 border-r-2 border-neutral-600 rounded-br pointer-events-none transition-colors duration-500 group-hover:border-emerald-500" />

              {/* Minimal caption in corner */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between pointer-events-none z-20">
                <div className="font-mono text-[9px] uppercase tracking-widest text-neutral-400 bg-black/75 px-2 py-1 rounded border border-neutral-800">
                  REF // 85MM_PORTRAIT_01
                </div>
                <div className="font-mono text-[10px] tracking-tight text-white/90 bg-neutral-900/80 px-2 py-1 rounded backdrop-blur border border-neutral-700 font-medium">
                  S. SINHA
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
