import { motion } from "motion/react";
import { Laptop, Cpu, ShieldAlert, Award } from "lucide-react";
import { SKILLS_DATA } from "../data";

export default function Skills() {
  // Simple category index to map icons
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "skills-lang":
        return <Cpu size={16} className="text-[#22c55e]" />;
      case "skills-web":
        return <Laptop size={16} className="text-[#22c55e]" />;
      case "skills-domains":
        return <ShieldAlert size={16} className="text-[#22c55e]" />;
      default:
        return <Award size={16} className="text-[#22c55e]" />;
    }
  };

  return (
    <section
      id="skills"
      className="relative py-24 bg-neutral-950 border-t border-neutral-900 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#1b2b1b]/5 blur-[125px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <span className="text-[#22c55e] font-mono text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5 mb-2">
            <Cpu size={13} /> CAPABILITIES //
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight text-white mb-2">
            Skillsets & Specializations
          </h2>
          <p className="text-sm text-neutral-500 max-w-lg font-sans">
            Rigorous technical languages, structured web technologies, scientific frameworks, and key communications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {SKILLS_DATA.map((cat, catIdx) => (
            <motion.div
              id={`skills-cat-${cat.id}`}
              key={cat.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: catIdx * 0.12 }}
              className="p-6 md:p-8 rounded-2xl border border-neutral-900 bg-neutral-950/40 backdrop-blur-md hover:border-neutral-850 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-2.5 border-b border-neutral-900 pb-4 mb-6">
                <span className="p-2 rounded-lg bg-neutral-900 border border-neutral-850">
                  {getCategoryIcon(cat.id)}
                </span>
                <h3 className="text-md font-bold font-sans text-neutral-100 uppercase tracking-widest">
                  {cat.category}
                </h3>
              </div>

              {/* Individual Skill Sliders */}
              <div className="space-y-5">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="group/skill space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-neutral-300 group-hover/skill:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className="text-neutral-500 group-hover/skill:text-[#22c55e] transition-colors duration-305">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Slider Track */}
                    <div className="h-1.5 w-full rounded-full bg-neutral-900 overflow-hidden relative border border-neutral-950">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-neutral-800 to-neutral-400 group-hover/skill:from-emerald-600 group-hover/skill:to-emerald-400 transition-all duration-500 shadow-[0_0_8px_rgba(34,197,94,0)] group-hover/skill:shadow-[0_0_8px_rgba(34,197,94,0.4)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
