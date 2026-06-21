import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Copy, Check, Terminal } from "lucide-react";
import { CONTACT_DATA } from "../data";

export default function Contact() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  return (
    <footer id="contact" className="relative bg-black pt-24 pb-12 border-t border-neutral-900 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute bottom-0 left-[50%] -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-emerald-500/[0.015] blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Contact Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-neutral-900">
          
          {/* Left Column: Heading and Call of Action */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <span className="text-[#22c55e] font-mono text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5 mb-2">
              <Terminal size={13} /> NEXT STEP //
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight text-white mb-6">
              Let's Build Something <br />Logically Beautiful
            </h2>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-sm mb-8 font-sans">
              I am open to frontend internship positions, system research commissions, and software collaborative trials. Reach out directly.
            </p>

            {/* Social handles links */}
            <div className="flex items-center gap-4">
              <a
                id="contact-github"
                href={CONTACT_DATA.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-neutral-850 bg-neutral-950/60 text-neutral-400 hover:text-[#22c55e] hover:border-neutral-800 hover:scale-105 transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a
                id="contact-linkedin"
                href={CONTACT_DATA.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-neutral-850 bg-neutral-950/60 text-neutral-400 hover:text-[#22c55e] hover:border-neutral-800 hover:scale-105 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Right Column: Copyable Contact Details Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Email Card clickable */}
            <div
              id="contact-email-card"
              onClick={() => copyToClipboard(CONTACT_DATA.email, "email")}
              className="group/card relative p-6 rounded-2xl border border-neutral-900 bg-neutral-950/30 hover:border-neutral-800 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="p-2.5 rounded-xl bg-[#22c55e]/5 border border-[#22c55e]/20 text-[#22c55e]">
                  <Mail size={16} />
                </span>
                <button
                  className="text-neutral-600 group-hover/card:text-neutral-400 transition-colors duration-300"
                  aria-label="Copy Email address"
                >
                  {copiedField === "email" ? <Check size={14} className="text-[#22c55e]" /> : <Copy size={14} />}
                </button>
              </div>
              <div>
                <h4 className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-1">
                  Electronic Mail Address
                </h4>
                <div className="text-sm font-semibold text-neutral-100 group-hover/card:text-white transition-colors duration-300 break-all font-sans">
                  {CONTACT_DATA.email}
                </div>
              </div>

              {/* Notification Banner popping inside the card */}
              {copiedField === "email" && (
                <div className="absolute top-4 right-12 text-[10px] font-mono text-[#22c55e] bg-emerald-950/45 px-2 py-0.5 rounded border border-emerald-950/50">
                  Copied address!
                </div>
              )}
            </div>

            {/* Phone Card clickable */}
            <div
              id="contact-phone-card"
              onClick={() => copyToClipboard(CONTACT_DATA.phone, "phone")}
              className="group/card relative p-6 rounded-2xl border border-neutral-900 bg-neutral-950/30 hover:border-neutral-800 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="p-2.5 rounded-xl bg-[#22c55e]/5 border border-[#22c55e]/20 text-[#22c55e]">
                  <Phone size={16} />
                </span>
                <button
                  className="text-neutral-600 group-hover/card:text-neutral-400 transition-colors duration-300"
                  aria-label="Copy Phone number"
                >
                  {copiedField === "phone" ? <Check size={14} className="text-[#22c55e]" /> : <Copy size={14} />}
                </button>
              </div>
              <div>
                <h4 className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-1">
                  Mobile Contact Path
                </h4>
                <div className="text-sm font-semibold text-neutral-100 group-hover/card:text-white transition-colors duration-300 font-sans">
                  {CONTACT_DATA.phone}
                </div>
              </div>

              {/* Notification Banner popping inside the card */}
              {copiedField === "phone" && (
                <div className="absolute top-4 right-12 text-[10px] font-mono text-[#22c55e] bg-emerald-950/45 px-2 py-0.5 rounded border border-emerald-950/50">
                  Copied number!
                </div>
              )}
            </div>

            {/* Address Card (Spans across full row in md view if layout fits) */}
            <div
              id="contact-address-card"
              className="md:col-span-2 p-6 rounded-2xl border border-neutral-900 bg-neutral-950/30 flex items-center gap-4"
            >
              <span className="p-2.5 shrink-0 rounded-xl bg-[#22c55e]/5 border border-[#22c55e]/20 text-[#22c55e]">
                <MapPin size={16} />
              </span>
              <div>
                <h4 className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-1">
                  Geographic Residency Node
                </h4>
                <p className="text-xs md:text-sm text-neutral-300 font-sans">
                  {CONTACT_DATA.address}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Brand Copyright Line */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-[11px] font-mono text-neutral-600 gap-4">
          <div>
            © 2026 Shuvradeep Sinha. Crafted with React & Tailwind CSS.
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-neutral-800 animate-pulse" />
            <span>UTC_TIME_OBSERVED // LOCAL_HOST_3000</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
