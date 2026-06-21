import { motion } from "motion/react";
import { FolderGit2, ArrowUpRight, Github } from "lucide-react";
import { ProjectItem } from "../types";
import { PROJECTS_DATA } from "../data";

interface ProjectsProps {
  onSelectProject: (proj: ProjectItem) => void;
}

export default function Projects({ onSelectProject }: ProjectsProps) {
  return (
    <section
      id="projects"
      className="relative py-24 bg-[#050505] border-t border-neutral-900"
    >
      {/* Decorative Lens Flare Gradient */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute bottom-0 right-[25%] w-[400px] h-[400px] rounded-full bg-emerald-500/[0.01] blur-[130px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <span className="text-[#22c55e] font-mono text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5 mb-2">
            <FolderGit2 size={13} /> ENGINEERED WORKS //
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight text-white mb-2">
            Selected Technical Projects
          </h2>
          <p className="text-sm text-neutral-500 max-w-lg font-sans">
            A focused curation mapping out logic-driven software systems and visual interfaces.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((proj, idx) => (
            <motion.div
              id={`project-card-${proj.id}`}
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative rounded-2xl border border-neutral-900 bg-neutral-950/20 overflow-hidden flex flex-col justify-between hover:border-neutral-800 transition-all duration-500 cursor-pointer"
              onClick={() => onSelectProject(proj)}
            >
              {/* Thumbnail Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-neutral-900 bg-neutral-900 shadow-inner">
                {/* 85mm DOF styling overlay */}
                <div className="absolute inset-0 z-1 pointer-events-none bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />
                
                <img
                  id={`project-thumb-${proj.id}`}
                  src={proj.imageUrl}
                  alt={proj.title}
                  className="w-full h-full object-cover grayscale brightness-[0.7] contrast-[1.05] transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-[0.8]"
                  referrerPolicy="no-referrer"
                />

                {/* Hover Visual Action Trigger Indicator */}
                <div className="absolute top-4 right-4 z-10 rounded-full border border-neutral-800/80 bg-neutral-950/90 p-2.5 text-neutral-400 transition-all duration-300 group-hover:border-[#22c55e]/40 group-hover:text-white group-hover:scale-105">
                  <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:rotate-45" />
                </div>

                {/* Subcategory Label overlay */}
                <div className="absolute bottom-4 left-4 z-10">
                  <span className="text-[9px] font-mono tracking-widest uppercase text-[#22c55e] bg-black/85 px-2 py-1 rounded border border-neutral-800">
                    {proj.category.split(" / ")[0]}
                  </span>
                </div>
              </div>

              {/* Text Meta Container */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white font-sans tracking-tight mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                    {proj.title}
                  </h3>
                  <p className="text-xs md:text-sm text-neutral-500 leading-relaxed font-sans mb-6">
                    {proj.description}
                  </p>
                </div>

                {/* Bottom Tech Badges bar */}
                <div className="flex flex-wrap gap-1 pt-4 border-t border-neutral-900/40">
                  {proj.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-[9px] font-mono text-neutral-400 bg-neutral-900 border border-neutral-900/60 px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {proj.techStack.length > 3 && (
                    <span className="text-[9px] font-mono text-[#22c55e] bg-emerald-950/20 border border-emerald-950/40 px-1.5 py-0.5 rounded">
                      +{proj.techStack.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
