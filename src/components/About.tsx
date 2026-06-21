import { motion } from "motion/react";
import { GraduationCap, BookOpen, Quote, Sparkles } from "lucide-react";
import { BIO, EDUCATION_DATA } from "../data";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-neutral-950 border-y border-neutral-900 overflow-hidden"
    >
      {/* Subtle lens flare on background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-[80%] w-[450px] h-[450px] rounded-full bg-emerald-500/[0.02] blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <span className="text-[#22c55e] font-mono text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5 mb-2">
            <BookOpen size={13} /> PROFILE STATEMENT //
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight text-white">
            Biography & Academic Foundations
          </h2>
        </div>

        {/* content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Biography Narrative (Left) */}
          <div className="lg:col-span-6 flex flex-col justify-start">
            <div className="relative p-6 md:p-8 rounded-2xl border border-neutral-900 bg-neutral-950/40 backdrop-blur-md mb-8">
              <Quote className="absolute -top-4 -left-2 text-[#22c55e]/15 h-16 w-16" />
              
              <p className="text-neutral-300 text-sm md:text-base leading-relaxed font-sans mb-6">
                {BIO.fullAbout.split("\n\n")[0]}
              </p>
              
              <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-sans">
                {BIO.fullAbout.split("\n\n")[1]}
              </p>
            </div>

            {/* Scientific Mindset Statement Card */}
            <div className="p-5 rounded-xl border border-neutral-900 bg-zinc-950/20 flex gap-4 items-center">
              <div className="h-10 w-10 shrink-0 rounded-lg bg-[#22c55e]/5 border border-[#22c55e]/20 flex items-center justify-center text-[#22c55e]">
                <Sparkles size={18} />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white font-sans">The 85mm Engineering Principle</h4>
                <p className="text-xs text-neutral-500 mt-1">
                  Focus heavily on critical development variables, blurring out surrounding noise to optimize functional layout performance.
                </p>
              </div>
            </div>
          </div>

          {/* Education Pipeline Timeline (Right) */}
          <div className="lg:col-span-6 flex flex-col">
            <h3 className="text-lg font-bold text-white font-sans flex items-center gap-2 mb-8 border-b border-neutral-900 pb-3">
              <GraduationCap size={18} className="text-[#22c55e]" /> Academic Pipeline
            </h3>

            <div className="relative pl-6 space-y-10">
              {/* Timeline continuous guide line */}
              <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-neutral-800" />

              {EDUCATION_DATA.map((edu, idx) => (
                <motion.div
                  id={`edu-item-${edu.id}`}
                  key={edu.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="relative space-y-2 group"
                >
                  {/* Glowing Timeline Node */}
                  <span className="absolute -left-[24px] top-1.5 h-3.5 w-3.5 rounded-full border border-neutral-800 bg-black flex items-center justify-center transition-all duration-500 group-hover:border-[#22c55e]/50 group-hover:scale-110">
                    <span className="h-1.5 w-1.5 rounded-full bg-neutral-700 transition-colors duration-500 group-hover:bg-[#22c55e]" />
                  </span>

                  {/* Date Badge */}
                  <div className="text-[10px] font-mono tracking-widest uppercase text-[#22c55e] bg-emerald-950/25 border border-emerald-950/60 px-2 py-0.5 rounded-md inline-block">
                    {edu.duration}
                  </div>

                  {/* Degrees Name */}
                  <h4 className="text-md md:text-lg font-bold text-white font-sans leading-tight transition-colors duration-300 group-hover:text-emerald-500">
                    {edu.degree}
                  </h4>

                  {/* Institution Location */}
                  <div className="text-xs text-neutral-400 font-mono flex items-center gap-2">
                    <span className="font-medium text-neutral-300">{edu.institution}</span>
                    <span className="text-neutral-600">•</span>
                    <span>{edu.location}</span>
                  </div>

                  {/* Description details */}
                  <p className="text-xs text-neutral-500 leading-relaxed max-w-lg font-sans">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
