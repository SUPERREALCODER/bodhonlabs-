import React from "react";
import { motion } from "motion/react";
import {
  ShieldAlert,
  BrainCircuit,
  Globe,
  Play,
  Download,
  Youtube,
  BookOpen
} from "lucide-react";

interface ProductLink {
  web: string;
  playStore: string;
  apk: string;
  youtube: string;
  blog: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType; // Changed to ElementType to pass props dynamically
  tags: string[];
  links: ProductLink;
  themeColor: {
    primary: string;
    text: string;
    bg: string;
    glow: string;
    border: string;
  };
}

const labProducts: Product[] = [
  {
    id: "anti-y",
    name: "Anti-Y",
    description: "An advanced anti-distraction tool engineered for deep work. It intelligently blocks algorithmic feeds while retaining essential functionalities.",
    icon: ShieldAlert,
    tags: ["ANTI-DISTRACTION"],
    links: {
      web: "#",
      playStore: "#",
      apk: "#",
      youtube: "#",
      blog: "#"
    },
    themeColor: {
      primary: "bg-yellow-500",
      text: "text-yellow-400",
      bg: "group-hover:bg-yellow-500/10",
      glow: "rgba(234, 179, 8, 0.3)",
      border: "group-hover:border-yellow-500/40"
    }
  },
  {
    id: "aham",
    name: "Aham",
    description: "A secure, agentic AI personal assistant designed to run locally, ensuring total data privacy while managing daily workflows.",
    icon: BrainCircuit,
    tags: ["SELF-DEVELOPMENT"],
    links: {
      web: "#",
      playStore: "#",
      apk: "#",
      youtube: "#",
      blog: "#"
    },
    themeColor: {
      primary: "bg-blue-600",
      text: "text-blue-500",
      bg: "group-hover:bg-blue-500/10",
      glow: "rgba(37, 99, 235, 0.3)",
      border: "group-hover:border-blue-500/40"
    }
  }
];

export default function LabProducts() {
  return (
    <section className="py-16 md:py-24 bg-[#05050A] text-white relative overflow-hidden min-h-screen">
      {/* Background ambient glow matching the Bodhon theme */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-300 font-medium">Internal Products</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-sans"
          >
            Our Labs & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Innovations</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-400 max-w-2xl mx-auto text-base md:text-lg px-4"
          >
            Pushing the boundaries of what's possible with cutting-edge internal tools and experimental software engineering.
          </motion.p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {labProducts.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative p-6 sm:p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-[#0F1117]/80 backdrop-blur-xl border border-white/5 ${product.themeColor.border} transition-all duration-500 flex flex-col h-full shadow-2xl shadow-black/50`}
              >
                {/* Subtle hover glow inside the card based on theme color */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] md:rounded-[2.5rem] pointer-events-none"
                  style={{ background: `radial-gradient(circle at top left, ${product.themeColor.glow}, transparent 70%)` }}
                />

                {/* Top: Icon & Tags */}
                <div className="relative z-10 flex-grow">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6 md:mb-8">
                    <div 
                      className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#1A1C23] border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg`}
                      style={{ boxShadow: `0 0 20px ${product.themeColor.glow}` }}
                    >
                      <Icon className={product.themeColor.text} size={28} />
                    </div>
                    <div className="flex flex-wrap justify-start sm:justify-end gap-2 max-w-full">
                      {product.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="px-2 py-1 text-[8px] md:text-[9px] font-mono tracking-wider uppercase text-slate-500 border border-white/5 rounded-md bg-white/5 whitespace-nowrap"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <h3 className={`text-2xl md:text-3xl font-bold mb-3 md:mb-4 tracking-tight transition-colors duration-300 ${product.themeColor.text.replace('text-', 'group-hover:text-')}`}>
                    {product.name}
                  </h3>
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
                    {product.description}
                  </p>
                </div>

                <div className="relative z-10 mt-auto">
                  {/* Action Bar Divider */}
                  <div className={`h-px w-full bg-gradient-to-r from-white/10 to-transparent mb-6 md:mb-8`} />

                  {/* Action Bar - Links & Buttons */}
                  <div className="flex flex-col gap-6">
                    
                    {/* Primary Actions (Left) */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
                      <a 
                        href={product.links.web} 
                        className={`w-full sm:flex-1 flex items-center justify-center gap-2 px-6 py-3.5 ${product.themeColor.primary} hover:brightness-110 text-white text-sm font-bold rounded-xl transition-all shadow-lg active:scale-95`}
                      >
                        <Globe size={18} />
                        Live Preview
                      </a>
                      
                      <a 
                        href={product.links.playStore} 
                        className="w-full sm:flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1A1C23] hover:bg-[#252833] border border-white/10 text-white text-sm font-semibold rounded-xl transition-all active:scale-95 group/play"
                      >
                        <Play size={18} className="text-[#34A853] fill-[#34A853] group-hover/play:text-[#4285F4] group-hover/play:fill-[#4285F4] transition-colors" />
                        Play Store
                      </a>
                    </div>

                    {/* Secondary Actions (Right) - Icon Only */}
                    <div className="flex items-center justify-center sm:justify-end gap-3 sm:gap-4 pb-2">
                      <a 
                        href={product.links.apk} 
                        title="Download APK"
                        className={`p-3 bg-[#1A1C23] border border-white/10 text-slate-400 rounded-xl transition-all group/icon ${product.themeColor.bg.replace('group-hover:', 'hover:')} ${product.themeColor.text.replace('text-', 'hover:text-')}`}
                      >
                        <Download size={20} className="group-hover/icon:scale-110 transition-transform" />
                      </a>
                      <a 
                        href={product.links.youtube} 
                        title="Watch Demo"
                        className={`p-3 bg-[#1A1C23] border border-white/10 text-slate-400 rounded-xl transition-all group/icon hover:bg-[#FF0000]/10 hover:text-[#FF0000]`}
                      >
                        <Youtube size={20} className="group-hover/icon:scale-110 transition-transform fill-transparent group-hover/icon:fill-[#FF0000]/20" />
                      </a>
                      <a 
                        href={product.links.blog} 
                        title="Read Case Study"
                        className={`p-3 bg-[#1A1C23] border border-white/10 text-slate-400 rounded-xl transition-all group/icon hover:bg-blue-500/10 hover:text-blue-500`}
                      >
                        <BookOpen size={20} className="group-hover/icon:scale-110 transition-transform" />
                      </a>
                    </div>

                  </div>
                </div>

              </motion.div>
            )
          })}
        </div>

        {/* Footer Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-slate-500 text-sm font-mono tracking-widest uppercase">
            &copy; {new Date().getFullYear()} BODHON LABS • BEYOND THE EDGE
          </p>
        </motion.div>
      </div>
    </section>
  );
}

