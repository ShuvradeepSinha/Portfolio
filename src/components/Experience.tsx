import { motion } from "motion/react";
import { Briefcase, MapPin, Calendar, Terminal, Info } from "lucide-react";
import { ExperienceItem } from "../types";
import { EXPERIENCE_DATA } from "../data";

interface ExperienceProps {
  onSelectExperience: (exp: ExperienceItem) => void;
}

export default function Experience({ onSelectExperience }: ExperienceProps) {
  return (
    <section
      id="experience"
      className="relative py-24 bg-black overflow-hidden"
    >
      {/* Decorative Blur Ambient Lights */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[40%] right-[70%] w-[350px] h-[350px] rounded-full bg-emerald-500/[0.015] blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Title */}
        <div className="flex flex-col mb-16">
          <span className="text-[#22c55e] font-mono text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5 mb-2">
            <Terminal size={13} /> CAREER ENGAGEMENT //
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight text-white mb-2">
            Professional History
          </h2>
          <p className="text-sm text-neutral-500 max-w-lg font-sans">
            Bridging production-grade frontend internship standards with collaborative academic engineering leadership.
          </p>
        </div>

        {/* Experience Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EXPERIENCE_DATA.map((exp, idx) => (
            <motion.div
              id={`exp-card-${exp.id}`}
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="group relative rounded-2xl border border-neutral-900 bg-neutral-950/40 p-6 md:p-8 hover:border-neutral-800 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Outer decorative hover glowing shadow */}
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-emerald-500/0 via-emerald-500/0 to-emerald-500/0 opacity-0 group-hover:opacity-100 group-hover:from-emerald-500/[0.02] group-hover:to-transparent transition-all duration-700" />

              <div>
                {/* Header Block */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-[#22c55e] border border-[#22c55e]/20 bg-[#1b2b1b]/30 px-2 py-0.5 rounded-md mb-2">
                      {exp.id === "exp-1" ? "Active Internship" : "Academic Focus"}
                    </span>
                    <h3 className="text-xl font-bold text-white font-sans tracking-tight group-hover:text-emerald-400 transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <div className="text-sm text-neutral-400 font-sans font-medium mt-1">
                      {exp.company}
                    </div>
                  </div>

                  {/* Corner Visual Icon */}
                  <div className="p-2.5 rounded-xl border border-neutral-850 bg-neutral-900/60 text-neutral-500 transition-all duration-300 group-hover:text-[#22c55e] group-hover:border-neutral-850">
                    <Briefcase size={16} />
                  </div>
                </div>

                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 font-mono text-[11px] text-neutral-500 mt-2 mb-6">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} className="text-neutral-600" /> {exp.duration}
                  </span>
                  <span className="text-neutral-700">|</span>
                  <span className="flex items-center gap-1">
                    <MapPin size={12} className="text-neutral-600" /> {exp.location}
                  </span>
                </div>

                {/* Brief bullet samples (showing first 2 bullets on card, with expandable click) */}
                <ul className="space-y-3.5 mb-8">
                  {exp.description.slice(0, 2).map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2 text-neutral-400 text-xs md:text-sm leading-relaxed">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-800 group-hover:bg-[#22c55e] transition-colors duration-500" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button & Skills Tickers Footer */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-6 border-t border-neutral-900 gap-4">
                <div className="flex flex-wrap gap-1 max-w-[70%]">
                  {exp.skills.slice(0, 3).map((skill) => (
                    <span key={skill} className="text-[9px] font-mono text-neutral-500 bg-neutral-900/50 border border-neutral-950 px-1.5 py-0.5 rounded">
                      {skill}
                    </span>
                  ))}
                  {exp.skills.length > 3 && (
                    <span className="text-[9px] font-mono text-neutral-500 bg-neutral-900/50 border border-neutral-950 px-1.5 py-0.5 rounded font-black">
                      +{exp.skills.length - 3}
                    </span>
                  )}
                </div>

                <button
                  id={`exp-view-more-${exp.id}`}
                  onClick={() => onSelectExperience(exp)}
                  className="flex items-center justify-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-[#22c55e] hover:text-white transition-all duration-300 self-end sm:self-auto cursor-pointer"
                >
                  <Info size={12} /> Read Case Study
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
