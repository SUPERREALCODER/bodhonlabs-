import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ShieldAlert, BrainCircuit, ArrowLeft, Terminal, Activity, FileText } from "lucide-react";

// Mock data to retrieve product info
const labProductsInfo: Record<string, any> = {
  "anti-y": {
    name: "Anti-Y",
    icon: ShieldAlert,
    themeColor: {
      primary: "text-yellow-400",
      bg: "bg-yellow-500",
      neon: "#eab308",
    },
    mission: "Reclaim human attention by replacing endless algorithmic scrolling with intentional, topic-driven learning.",
    sections: {
      summary: {
        title: "1.0 Executive Summary",
        content: [
          "Anti-Y is an attention-first digital learning platform built for people who want to escape digital distraction and learn with purpose. Instead of maximizing engagement through endless recommendations, the platform organizes educational videos, podcasts, articles, and documentaries around a single topic. Every learning session is designed to help users explore subjects deeply, compare multiple perspectives, and build lasting understanding rather than consuming content passively."
        ]
      },
      problem: {
        title: "2.0 The Problem",
        intro: "Today's digital platforms compete for attention, not understanding. Infinite scrolling, personalized recommendation loops, and constant notifications encourage passive consumption while reducing focus and critical thinking. As information becomes more abundant, meaningful learning becomes increasingly difficult. Anti-Y was created to challenge this model by putting intentional learning ahead of engagement metrics.",
        phases: [
          {
            title: "Phase I: Attention Recovery",
            desc: "Remove the distractions created by endless feeds and algorithm-driven content, allowing users to regain control over how they spend their digital time."
          },
          {
            title: "Phase II: Structured Learning",
            desc: "Collect videos, podcasts, articles, and documentaries into one organized learning path so every resource contributes to a deeper understanding of the chosen topic."
          },
          {
            title: "Phase III: Critical Thinking",
            desc: "Present multiple viewpoints instead of reinforcing a single narrative, encouraging users to compare ideas, think independently, and make informed decisions."
          }
        ],
        outro: "Rather than encouraging binge consumption, Anti-Y creates an environment where every interaction has a clear purpose. Its distraction-free interface keeps users focused while transforming ordinary screen time into a structured learning experience that improves knowledge retention and long-term curiosity."
      },
      impact: {
        title: "3.0 Platform Impact",
        cards: [
          {
            label: "4 Learning Formats",
            value: "Videos • Podcasts • Articles • Documentaries"
          },
          {
            label: "1 Focused Topic",
            value: "Every session explores one subject without distractions."
          },
          {
            label: "Multiple Perspectives",
            value: "Balanced knowledge instead of algorithmic bias."
          }
        ],
        outro: "Anti-Y helps students, professionals, researchers, and lifelong learners reclaim control over their digital attention. By replacing endless scrolling with focused exploration, the platform improves concentration, strengthens critical thinking, reduces digital fatigue, and makes every minute of screen time more productive"
      }
    }
  },
  "aham": {
    name: "Aham",
    icon: BrainCircuit,
    themeColor: {
      primary: "text-blue-500",
      bg: "bg-blue-600",
      neon: "#2563eb",
    },
    mission: "Deploy a localized, privacy-first agentic entity to optimize personal workflows.",
    sections: {
      summary: {
        title: "1.0 Executive Summary",
        content: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
        ]
      },
      problem: {
        title: "2.0 Architecture & Implementation",
        intro: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
        phases: [
          {
            title: "Phase I: Quantum Core Initialization",
            desc: "At vero eos et accusamus et iusto odio dignissimos ducimus."
          },
          {
            title: "Phase II: Neural Pathway Calibration",
            desc: "Qui blanditiis praesentium voluptatum deleniti atque corrupti quos."
          },
          {
            title: "Phase III: System Optimization",
            desc: "Dolores et quas molestias excepturi sint occaecati cupiditate non provident."
          }
        ],
        outro: "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus."
      },
      impact: {
        title: "3.0 Results & Telemetry",
        cards: [
          { label: "EFFICIENCY", value: "+340%" },
          { label: "LATENCY", value: "12ms" },
          { label: "DATA LOSS", value: "0.00%" }
        ],
        outro: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
        note: "Note: The above telemetry data represents controlled environment tests. Real-world performance may vary based on local neural density."
      }
    }
  },
};

function GridBackground({ color }: { color: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const gridSize = 40;

    let mouse = { x: width / 2, y: height / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId: number;
    let offset = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(5, 5, 10, 1)";
      ctx.fillRect(0, 0, width, height);

      offset = (offset + 0.5) % gridSize;

      ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
      ctx.lineWidth = 1.5;

      for (let x = offset; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = offset; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Glow near mouse based on theme color
      const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 300);
      gradient.addColorStop(0, `${color}40`); // Increase visibility
      gradient.addColorStop(1, "rgba(5, 5, 10, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [color]);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0 fixed" />;
}

export default function CaseStudy() {
  const { productId } = useParams();
  const product = productId ? labProductsInfo[productId] : null;

  if (!product) {
    return (
      <div className="min-h-screen bg-[#05050A] text-white flex items-center justify-center font-mono">
        <h1>404 | PRODUCT LOG NOT FOUND</h1>
      </div>
    );
  }

  const Icon = product.icon;

  return (
    <section className="bg-[#05050A] text-white relative min-h-screen font-sans overflow-x-hidden selection:bg-white/20 selection:text-white">
      <GridBackground color={product.themeColor.neon} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12 pb-24">
        {/* Navigation */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Link
            to="/"
            state={{ skipIntro: true }}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-mono text-sm uppercase tracking-widest mb-12 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Return to Core
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-4 mb-6">
            <div className={`w-16 h-16 rounded-2xl bg-[#1A1C23] border border-white/10 flex items-center justify-center shadow-lg relative`} style={{ boxShadow: `0 0 20px ${product.themeColor.neon}40` }}>
              <Icon className={product.themeColor.primary} size={32} />
              <span className={`absolute top-2 right-2 w-2 h-2 rounded-full ${product.themeColor.bg} animate-pulse`} />
            </div>
            <div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 w-fit mb-2">
                <Activity size={12} className="text-green-400 animate-pulse" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-300 font-bold">
                  DECLASSIFIED CASE STUDY
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Project {product.name}</h1>
            </div>
          </div>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl font-mono leading-relaxed mb-12 border-l-2 pl-4" style={{ borderColor: product.themeColor.neon }}>
            Mission: {product.mission}
          </p>
        </motion.div>

        {/* Content Body - Declassified case study info structured as a technical document */}
        <motion.article 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7, delay: 0.2 }}
          className="prose prose-invert prose-slate max-w-none prose-headings:font-sans prose-headings:font-bold prose-h2:text-2xl prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-2 prose-h2:mb-6 prose-p:text-slate-300 prose-p:leading-relaxed prose-li:text-slate-300"
        >
          <div className="bg-[#13151C]/80 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-md mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <FileText size={120} />
            </div>
            
            <h2 className="flex items-center gap-3">
              <Terminal size={24} className={product.themeColor.primary} />
              {product.sections?.summary?.title || "1.0 Executive Summary"}
            </h2>
            {product.sections?.summary?.content?.map((paragraph: string, idx: number) => (
              <p key={idx}>{paragraph}</p>
            )) || (
              <p>No content available.</p>
            )}

            <h2 className="flex items-center gap-3 mt-12">
              <Activity size={24} className={product.themeColor.primary} />
              {product.sections?.problem?.title || "2.0 Architecture & Implementation"}
            </h2>
            <p>
              {product.sections?.problem?.intro}
            </p>
            {product.sections?.problem?.phases && (
              <ul className="list-disc list-outside pl-5 space-y-3 mt-4 font-mono text-sm">
                {product.sections.problem.phases.map((phase: any, idx: number) => (
                  <li key={idx}>
                    <strong>{phase.title}</strong>: {phase.desc}
                  </li>
                ))}
              </ul>
            )}
            <p className="mt-6">
              {product.sections?.problem?.outro}
            </p>

            <h2 className="flex items-center gap-3 mt-12">
              <ShieldAlert size={24} className={product.themeColor.primary} />
              {product.sections?.impact?.title || "3.0 Results & Telemetry"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {product.sections?.impact?.cards?.map((stat: any, i: number) => (
                <div key={i} className="bg-black/40 border border-white/5 rounded-xl p-5 text-center flex flex-col justify-center items-center">
                  <div className="text-[10px] font-mono text-slate-500 mb-2 tracking-wider uppercase">{stat.label}</div>
                  <div className={`font-semibold ${product.themeColor.primary} ${stat.value.length > 15 ? "text-xs md:text-sm font-sans mt-1 leading-normal" : "text-xl md:text-2xl font-mono leading-none"}`}>
                    {stat.value}
                  </div>
                </div>
              )) || null}
            </div>
            <p>
              {product.sections?.impact?.outro}
            </p>
            {product.sections?.impact?.note && (
              <p>
                <em>{product.sections.impact.note}</em>
              </p>
            )}
          </div>
        </motion.article>
      </div>
    </section>
  );
}
