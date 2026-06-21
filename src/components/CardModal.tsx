import { ProjectItem, ExperienceItem } from "../types";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, MapPin, Briefcase, Globe, Github, Layers, ShieldCheck, Cpu } from "lucide-react";

interface CardModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectItem | null;
  experience: ExperienceItem | null;
}

export default function CardModal({ isOpen, onClose, project, experience }: CardModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div id="modal-container" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Ambient Blurred Backdrop */}
          <motion.div
            id="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            id="modal-content"
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-neutral-800 bg-neutral-950/90 p-6 md:p-8 text-neutral-200 shadow-2xl shadow-emerald-950/10 backdrop-blur-xl scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-track-transparent"
          >
            {/* Close Button */}
            <button
              id="modal-close-btn"
              onClick={onClose}
              className="absolute top-5 right-5 z-10 rounded-full border border-neutral-800 bg-neutral-900/50 p-2 text-neutral-400 transition-all duration-300 hover:border-neutral-700 hover:text-white hover:scale-105 active:scale-95"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {/* Project Details */}
            {project && (
              <div>
                <span className="inline-block text-xs font-mono font-medium uppercase tracking-widest text-[#22c55e] mb-2 bg-[#1b2b1b]/80 px-2.5 py-1 rounded-md border border-[#22c55e]/20">
                  {project.category}
                </span>
                <h3 id="modal-project-title" className="text-2xl md:text-3xl font-bold font-sans tracking-tight text-white mb-4">
                  {project.title}
                </h3>

                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-neutral-800 mb-6 bg-neutral-900 shadow-inner">
                  <img
                    id="modal-project-img"
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                <div className="space-y-6">
                  {/* Overview */}
                  <div>
                    <h4 className="text-sm font-mono font-semibold tracking-wider text-neutral-400 uppercase flex items-center gap-2 mb-2">
                      <Layers size={14} className="text-[#22c55e]" /> Overview
                    </h4>
                    <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
                      {project.detailedDescription}
                    </p>
                  </div>

                  {/* Two Column details: Challenges & Solutions */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 bg-red-950/20 border border-red-900/20 rounded-xl">
                      <h5 className="text-xs font-mono font-semibold uppercase tracking-wider text-red-400 flex items-center gap-1.5 mb-2">
                        <ShieldCheck size={14} /> Critical Challenges
                      </h5>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        {project.challenges}
                      </p>
                    </div>

                    <div className="p-4 bg-[#142913] border border-emerald-950/30 rounded-xl">
                      <h5 className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 mb-2">
                        <Cpu size={14} /> Engineering Solutions
                      </h5>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        {project.solutions}
                      </p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm font-mono font-semibold tracking-wider text-neutral-400 uppercase flex items-center gap-2 mb-2">
                      <Cpu size={14} className="text-[#22c55e]" /> Tech Stack Core
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono bg-neutral-900 border border-neutral-800 text-neutral-300 px-3 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Experience Details */}
            {experience && (
              <div>
                <span className="inline-block text-xs font-mono font-medium uppercase tracking-widest text-[#22c55e] mb-2 bg-[#1b2b1b]/80 px-2.5 py-1 rounded-md border border-[#22c55e]/20">
                  Professional Experience
                </span>
                <h3 id="modal-experience-title" className="text-2xl md:text-3xl font-bold font-sans tracking-tight text-white">
                  {experience.role}
                </h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 mb-6 text-sm text-neutral-400 font-mono">
                  <span className="flex items-center gap-1 text-[#22c55e]">
                    <Briefcase size={14} /> {experience.company}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} /> {experience.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} /> {experience.location}
                  </span>
                </div>

                <div className="space-y-6">
                  {/* Scope of Work */}
                  <div>
                    <h4 className="text-sm font-mono font-semibold tracking-wider text-neutral-400 uppercase flex items-center gap-2 mb-3">
                      <Layers size={14} /> Scope of Responsibilities
                    </h4>
                    <ul className="space-y-3">
                      {experience.description.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-[#e5e5e5] text-sm leading-relaxed">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#22c55e]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Core Applied Skills */}
                  <div>
                    <h4 className="text-sm font-mono font-semibold tracking-wider text-neutral-400 uppercase flex items-center gap-2 mb-2.5">
                      <Cpu size={14} className="text-[#22c55e]" /> Verified Skillsets Applied
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {experience.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs font-mono bg-[#111111] border border-neutral-800 text-neutral-300 px-3 py-1 rounded-md hover:border-[#22c55e]/30 transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
