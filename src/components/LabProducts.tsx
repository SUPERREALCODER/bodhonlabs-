import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  ShieldAlert,
  BrainCircuit,
  Globe,
  Play,
  Download,
  Youtube,
  BookOpen,
  Terminal,
  Activity,
  Cpu,
  Fingerprint,
  Zap,
} from "lucide-react";

interface ProductLink {
  web: string;
  playStore: string;
  apk: string;
  youtube: string;
  blog: string;
}

interface Telemetry {
  status: string;
  metricLabel: string;
  metricValue: string;
  securityHash: string;
  logStreams: string[];
}

interface Product {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  tags: string[];
  links: ProductLink;
  themeColor: {
    primary: string;
    text: string;
    bg: string;
    glow: string;
    border: string;
    neon: string;
  };
  telemetry: Telemetry;
}

const labProducts: Product[] = [
  {
    id: "anti-y",
    name: "Anti-Y",
    description:
      "An advanced anti-distraction tool engineered for deep work. It intelligently blocks algorithmic feeds while retaining essential functionalities.",
    icon: ShieldAlert,
    tags: ["ANTI-DISTRACTION"],
    links: {
      web: "https://anti-y-web.vercel.app",
      playStore:
        "https://play.google.com/store/apps/details?id=com.draxox.antiy",
      apk: "https://github.com/bodhontech/anti-y-web/releases/download/latest/app.apk",
      youtube: "https://youtu.be/_WDVcZcsYwM?si=k2Bk-Z6aBsVTQT0I",
      blog: "#",
    },
    themeColor: {
      primary: "bg-yellow-500",
      text: "text-yellow-400",
      bg: "group-hover:bg-yellow-500/10",
      glow: "rgba(234, 179, 8, 0.25)",
      border: "group-hover:border-yellow-500/40",
      neon: "#eab308",
    },
    telemetry: {
      status: "SHIELD: ACTIVE",
      metricLabel: "BLOCK RATE",
      metricValue: "99.8%",
      securityHash: "SEC_KEY_0x8F5A",
      logStreams: [
        "SYS: Initializing algorithm blocks...",
        "NET: Intercepting infinite scrolling hooks...",
        "SHIELD: Deep focus mode established successfully.",
        "DB: Synced offline configurations.",
      ],
    },
  },
  {
    id: "aham",
    name: "Aham",
    description:
      "A secure, agentic AI personal assistant designed to run locally, ensuring total data privacy while managing daily workflows.",
    icon: BrainCircuit,
    tags: ["SELF-DEVELOPMENT"],
    links: {
      web: "https://aham-mind.vercel.app",
      playStore: "https://play.google.com/store/apps/details?id=com.aham.app",
      apk: "#",
      youtube: "https://youtu.be/_WDVcZcsYwM?si=k2Bk-Z6aBsVTQT0I",
      blog: "#",
    },
    themeColor: {
      primary: "bg-blue-600",
      text: "text-blue-500",
      bg: "group-hover:bg-blue-500/10",
      glow: "rgba(37, 99, 235, 0.25)",
      border: "group-hover:border-blue-500/40",
      neon: "#2563eb",
    },
    telemetry: {
      status: "AGENT: SYNCED",
      metricLabel: "TOKEN RATE",
      metricValue: "48 tok/s",
      securityHash: "SYS_HASH_0xAC32",
      logStreams: [
        "SYS: Loading local dynamic LLM weights...",
        "LLM: Quantized 4-bit engine operational.",
        "SEC: Privacy sandbox container locked.",
        "AGENT: Dynamic scheduler awaiting commands.",
      ],
    },
  },
];

// Interactive Starfield / Matrix Grid Canvas Background with 3D Warp effect
function InteractiveBackground({ warpActive }: { warpActive: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Warp speed or grid speed factor
    let currentSpeed = warpActive ? 35 : 1;
    let targetSpeed = warpActive ? 35 : 1;

    // Handle mouse interaction in grid mode
    let mouse = { x: width / 2, y: height / 2, tx: width / 2, ty: height / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.tx = e.clientX;
      mouse.ty = e.clientY;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    // 3D Starfield system for Warp Effect
    const starCount = 350;
    const stars: {
      x: number;
      y: number;
      z: number;
      color: string;
      size: number;
    }[] = [];
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: (Math.random() - 0.5) * width * 2,
        y: (Math.random() - 0.5) * height * 2,
        z: Math.random() * width,
        color:
          Math.random() > 0.6
            ? "rgba(249, 115, 22, " + (Math.random() * 0.8 + 0.2) + ")" // Orange stars
            : Math.random() > 0.5
              ? "rgba(59, 130, 246, " + (Math.random() * 0.8 + 0.2) + ")" // Blue stars
              : "rgba(255, 255, 255, " + (Math.random() * 0.8 + 0.2) + ")", // White stars
        size: Math.random() * 2 + 0.5,
      });
    }

    // Grid particle details
    const gridSize = 60;
    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      alpha: number;
    }[] = [];
    const particleCount = 40;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
        color: Math.random() > 0.5 ? "234, 88, 12" : "37, 99, 235", // Orange/Blue themed
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      // Interpolate speed smooth transition
      currentSpeed += (targetSpeed - currentSpeed) * 0.15;

      if (warpActive) {
        // Starfield Hyperspace warp effect
        ctx.fillStyle = "rgba(5, 5, 10, 0.2)"; // Deep space trails
        ctx.fillRect(0, 0, width, height);

        stars.forEach((star) => {
          star.z -= currentSpeed;
          if (star.z <= 0) {
            star.z = width;
            star.x = (Math.random() - 0.5) * width * 2;
            star.y = (Math.random() - 0.5) * height * 2;
          }

          // Projection onto screen
          const k = 400 / star.z;
          const px = star.x * k + width / 2;
          const py = star.y * k + height / 2;

          if (px >= 0 && px <= width && py >= 0 && py <= height) {
            // Draw star trail line
            const prevZ = star.z + currentSpeed;
            const pk = 400 / prevZ;
            const ppx = star.x * pk + width / 2;
            const ppy = star.y * pk + height / 2;

            ctx.strokeStyle = star.color;
            ctx.lineWidth = Math.min(star.size * k * 0.5, 4);
            ctx.beginPath();
            ctx.moveTo(ppx, ppy);
            ctx.lineTo(px, py);
            ctx.stroke();
          }
        });

        // Interactive neon light tunnel glow
        const gradient = ctx.createRadialGradient(
          width / 2,
          height / 2,
          10,
          width / 2,
          height / 2,
          Math.max(width, height) * 0.6,
        );
        gradient.addColorStop(0, "rgba(5, 5, 10, 0)");
        gradient.addColorStop(0.5, "rgba(234, 88, 12, 0.03)");
        gradient.addColorStop(0.85, "rgba(37, 99, 235, 0.05)");
        gradient.addColorStop(1, "rgba(5, 5, 10, 0.8)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      } else {
        // Grid HUD ambience
        ctx.fillStyle = "rgba(5, 5, 10, 0.12)";
        ctx.fillRect(0, 0, width, height);

        // Damp mouse coordinates
        mouse.x += (mouse.tx - mouse.x) * 0.08;
        mouse.y += (mouse.ty - mouse.y) * 0.08;

        // Draw subtle grid
        ctx.strokeStyle = "rgba(255, 255, 255, 0.015)";
        ctx.lineWidth = 1;

        for (let x = 0; x < width; x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
          ctx.stroke();
        }

        for (let y = 0; y < height; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
        }

        // Draw a circular cyber radar pulse around cursor
        ctx.strokeStyle = "rgba(234, 88, 12, 0.03)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 140, 0, Math.PI * 2);
        ctx.stroke();

        // Cyber magnetic grid warping distortion
        ctx.strokeStyle = "rgba(234, 110, 12, 0.02)";
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 70, 0, Math.PI * 2);
        ctx.stroke();

        // Update & Draw particles
        particles.forEach((p) => {
          p.x += p.speedX;
          p.y += p.speedY;

          if (p.x < 0 || p.x > width) p.speedX *= -1;
          if (p.y < 0 || p.y > height) p.speedY *= -1;

          ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();

          // Connect particles near the mouse
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.strokeStyle = `rgba(${p.color}, ${0.15 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        });
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [warpActive]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
    />
  );
}

// Custom Sci-Fi Scrambler Text Effect on Hover
function CipherText({ text, active }: { text: string; active: boolean }) {
  const [displayText, setDisplayText] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@$%&*";

  useEffect(() => {
    if (!active) {
      setDisplayText(text);
      return;
    }

    let iterations = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) =>
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iterations) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join(""),
      );

      iterations += 1 / 2;
      if (iterations >= text.length) {
        clearInterval(interval);
        setDisplayText(text);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [active, text]);

  return <span>{displayText}</span>;
}

export default function LabProducts() {
  const [isDiagnosticMode, setIsDiagnosticMode] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [timeStr, setTimeStr] = useState("00:00:00");

  const location = useLocation();

  // Immersive Sci-Fi Entry Sequence states
  const [entryPhase, setEntryPhase] = useState<
    "terminal" | "warp" | "completed"
  >(location.state?.skipIntro ? "completed" : "terminal");
  const [warpActive, setWarpActive] = useState(false);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const [authStatus, setAuthStatus] = useState<
    "awaiting" | "authorizing" | "authorized"
  >("awaiting");
  const [warpProgress, setWarpProgress] = useState(0);

  // Keep a futuristic live counter updating on the screen
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toTimeString().split(" ")[0]);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Real-time printing of console logs on gateway initialization
  useEffect(() => {
    if (entryPhase !== "terminal") return;
    const logs = [
      "UPLINK: Establishing secure quantum peer-to-peer connection...",
      "HANDSHAKE: Symmetric key exchange completed (0x8F9B2C)...",
      "SANDBOX: Isolated airgapped environment verified.",
      "SECURE: Anti-distraction shield proxies pre-loaded.",
      "AGENT: Dynamic offline LLM scheduler awaiting core allocation...",
      "STATUS: Neural core idle. Awaiting user ignition sequence...",
    ];
    let currentLogIdx = 0;
    const interval = setInterval(() => {
      if (currentLogIdx < logs.length) {
        const nextLog = logs[currentLogIdx];
        setTerminalLogs((prev) => [...prev, nextLog]);
        currentLogIdx++;
      } else {
        clearInterval(interval);
      }
    }, 350);
    return () => clearInterval(interval);
  }, [entryPhase]);

  // Warp drive acceleration simulation progress indicator
  useEffect(() => {
    if (entryPhase !== "warp") return;
    const interval = setInterval(() => {
      setWarpProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + 4;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [entryPhase]);

  const handleInitiateWarp = () => {
    setAuthStatus("authorizing");

    // Begin starfield acceleration slightly early for beautiful visual timing
    setTimeout(() => {
      setWarpActive(true);
    }, 300);

    setTimeout(() => {
      setAuthStatus("authorized");
      setEntryPhase("warp");
    }, 900);

    // Full revelation of the innovations catalog after warp sequence ends
    setTimeout(() => {
      setEntryPhase("completed");
      setWarpActive(false);
    }, 3500);
  };

  return (
    <section className="bg-[#05050A] text-white relative overflow-hidden min-h-screen font-sans">
      {/* Sci-Fi Canvas Background - warpActive is driven dynamically by the entry phase */}
      <InteractiveBackground warpActive={warpActive} />

      <AnimatePresence mode="wait">
        {/* PHASE 1: Terminal Authorization & Gate Locked */}
        {entryPhase === "terminal" && (
          <motion.div
            key="terminal-overlay"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 z-50 flex flex-col justify-center items-center px-4 bg-[#05050A]/85 backdrop-blur-xl"
          >
            {/* Corner Bracket decorations */}
            <div className="absolute top-8 left-8 w-8 h-8 border-t-2 border-l-2 border-orange-500/30 animate-pulse" />
            <div className="absolute top-8 right-8 w-8 h-8 border-t-2 border-r-2 border-orange-500/30 animate-pulse" />
            <div className="absolute bottom-8 left-8 w-8 h-8 border-b-2 border-l-2 border-orange-500/30 animate-pulse" />
            <div className="absolute bottom-8 right-8 w-8 h-8 border-b-2 border-r-2 border-orange-500/30 animate-pulse" />

            <div className="max-w-xl w-full flex flex-col items-center">
              {/* Spinning main Core Graphic */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                className="w-24 h-24 rounded-full border border-orange-500/20 flex items-center justify-center mb-8 relative p-1"
              >
                <div
                  className="absolute inset-0 rounded-full border-t border-orange-500/60 animate-spin"
                  style={{ animationDuration: "3s" }}
                />
                <div
                  className="absolute inset-2 rounded-full border-b border-blue-500/60 animate-spin"
                  style={{ animationDuration: "1.5s" }}
                />
                <Fingerprint
                  className="text-orange-500 animate-pulse"
                  size={36}
                />
              </motion.div>

              <h1 className="text-lg md:text-xl font-mono text-center tracking-[0.2em] font-extrabold text-white mb-2 uppercase">
                BODHON NEURAL CORE
              </h1>
              <p className="text-[10px] md:text-xs font-mono text-slate-500 text-center tracking-widest uppercase mb-8">
                AIRGAPPED LABS SECURED ACCESS PORTAL
              </p>

              {/* Dynamic scrolling console logs */}
              <div className="w-full bg-black/60 border border-white/5 rounded-2xl p-5 font-mono text-[10px] md:text-xs text-slate-400 mb-8 min-h-[170px] max-h-[170px] overflow-y-auto flex flex-col gap-2 relative">
                <div className="absolute top-2 right-4 text-[9px] text-orange-500/50 flex items-center gap-1.5 font-bold">
                  <Activity size={10} className="animate-pulse" />
                  <span>LIVE_FEED</span>
                </div>
                {terminalLogs.map((log, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex gap-2 leading-relaxed"
                  >
                    <span className="text-orange-500">❯</span>
                    <span
                      className={
                        log && log.startsWith("STATUS")
                          ? "text-green-400 font-bold"
                          : "text-slate-300"
                      }
                    >
                      {log}
                    </span>
                  </motion.div>
                ))}
                {terminalLogs.length < 6 && (
                  <div className="flex gap-1 items-center">
                    <span className="text-orange-500">❯</span>
                    <span className="h-4 w-1.5 bg-orange-500 animate-pulse" />
                  </div>
                )}
              </div>

              {/* Interactive Warp Descent Initiation Trigger */}
              <motion.button
                onClick={handleInitiateWarp}
                disabled={authStatus !== "awaiting"}
                whileHover={{ scale: authStatus === "awaiting" ? 1.02 : 1 }}
                whileTap={{ scale: authStatus === "awaiting" ? 0.98 : 1 }}
                className={`w-full py-4 px-6 rounded-2xl font-mono text-xs md:text-sm tracking-[0.1em] transition-all duration-500 flex items-center justify-center gap-3 relative overflow-hidden group ${authStatus === "awaiting"
                    ? "bg-orange-600 hover:bg-orange-500 text-white shadow-[0_0_25px_rgba(234,88,12,0.3)] hover:shadow-[0_0_35px_rgba(234,88,12,0.5)] border border-orange-400/20"
                    : "bg-[#13151C] border border-white/5 text-slate-400 cursor-not-allowed"
                  }`}
              >
                {authStatus === "awaiting" && (
                  <>
                    <Zap
                      className="text-white group-hover:scale-125 transition-transform"
                      size={16}
                    />
                    <span>INITIALIZE QUANTUM TUNNEL</span>
                  </>
                )}
                {authStatus === "authorizing" && (
                  <>
                    <div className="w-4 h-4 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" />
                    <span>AUTHORIZING DESCENT CODE...</span>
                  </>
                )}
                {authStatus === "authorized" && (
                  <>
                    <div className="w-4 h-4 rounded-full bg-green-500 animate-ping" />
                    <span className="text-green-400 font-bold">
                      DESCENT AUTHORIZED
                    </span>
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* PHASE 2: Hyperspeed Warp Acceleration Tunnel */}
        {entryPhase === "warp" && (
          <motion.div
            key="warp-overlay"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute inset-0 z-50 flex flex-col justify-center items-center px-4 bg-transparent"
          >
            {/* Screen static and shockwave blur overlays */}
            <div className="absolute inset-0 bg-orange-500/5 animate-pulse mix-blend-color-dodge pointer-events-none" />

            <div className="max-w-md w-full flex flex-col items-center relative z-10">
              <motion.div
                animate={{ scale: [1, 1.15, 1], rotate: [0, 18, -18, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
                className="mb-8"
              >
                <Cpu
                  size={56}
                  className="text-orange-500 drop-shadow-[0_0_25px_rgba(234,88,12,0.8)] animate-pulse"
                />
              </motion.div>

              <h2 className="text-xl md:text-2xl font-mono text-center font-extrabold text-orange-500 tracking-[0.25em] uppercase mb-4 animate-pulse">
                WARPING INSTANT
              </h2>

              {/* Progress Bar resembling cyber terminal progress loaders */}
              <div className="w-full bg-white/5 border border-white/10 rounded-full h-2 mb-3 overflow-hidden relative p-[1px]">
                <div
                  className="bg-gradient-to-r from-orange-500 to-blue-500 h-full rounded-full transition-all duration-100"
                  style={{ width: `${warpProgress}%` }}
                />
              </div>

              <div className="flex justify-between w-full font-mono text-[10px] text-slate-400 tracking-wider">
                <span>VELOCITY: ~99.98% C</span>
                <span>DESCENT: {warpProgress}%</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* PHASE 3: Complete & Show Labs and Innovations */}
        {entryPhase === "completed" && (
          <motion.div
            key="main-catalog"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8"
          >
            {/* Decorative Top cyber rail */}
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-orange-500/20 to-transparent pointer-events-none" />

            {/* Futuristic System Control Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-6 mb-12">
              <div className="flex items-center gap-3 font-mono text-[10px] md:text-xs text-slate-400 tracking-wider">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span>SYSTEM_ONLINE: YES</span>
                <span className="text-white/10">|</span>
                <span className="text-orange-500 font-bold">{timeStr} UTC</span>
              </div>

              {/* Diagnostic Mode Toggle Trigger */}
              <button
                onClick={() => setIsDiagnosticMode(!isDiagnosticMode)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border font-mono text-xs tracking-wider transition-all duration-300 ${isDiagnosticMode
                    ? "bg-orange-500/10 border-orange-500/50 text-orange-400 shadow-[0_0_15px_rgba(234,88,12,0.2)]"
                    : "bg-[#0F1117]/80 border-white/10 text-slate-300 hover:border-orange-500/30"
                  }`}
              >
                <Terminal
                  size={14}
                  className={isDiagnosticMode ? "animate-pulse" : ""}
                />
                {isDiagnosticMode
                  ? "DIAGNOSTIC_MODE: ENABLED"
                  : "ENGAGE DIAGNOSTICS"}
              </button>
            </div>

            {/* Section Header */}
            <div className="flex flex-col items-center text-center mb-16 md:mb-20">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-300 font-medium">
                  BODHON RESEARCH LAB
                </span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-sans"
              >
                Our Labs &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  Innovations
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-4 text-slate-400 max-w-2xl mx-auto text-base md:text-lg px-4"
              >
                Unveiling state-of-the-art airgapped software, intelligent
                neural proxies, and high-performance offline environments.
              </motion.p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {labProducts.map((product, index) => {
                const Icon = product.icon;
                const isHovered = hoveredCard === product.id;
                return (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
                    onMouseEnter={() => setHoveredCard(product.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`group relative p-6 sm:p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-[#0F1117]/90 backdrop-blur-2xl border border-white/5 ${product.themeColor.border} transition-all duration-500 flex flex-col h-full shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden`}
                  >
                    {/* Glowing Sci-Fi Corner Brackets */}
                    <div
                      className={`absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-white/10 group-hover:border-${product.id === "anti-y" ? "yellow-500" : "blue-500"} transition-colors duration-500`}
                    />
                    <div
                      className={`absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-white/10 group-hover:border-${product.id === "anti-y" ? "yellow-500" : "blue-500"} transition-colors duration-500`}
                    />
                    <div
                      className={`absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-white/10 group-hover:border-${product.id === "anti-y" ? "yellow-500" : "blue-500"} transition-colors duration-500`}
                    />
                    <div
                      className={`absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-white/10 group-hover:border-${product.id === "anti-y" ? "yellow-500" : "blue-500"} transition-colors duration-500`}
                    />

                    {/* Laser scanline vertical sweeping effect on hover */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ y: "-100%" }}
                          animate={{ y: "100%" }}
                          exit={{ opacity: 0 }}
                          transition={{
                            repeat: Infinity,
                            duration: 2.2,
                            ease: "linear",
                          }}
                          className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent blur-[2px] pointer-events-none z-10"
                          style={{
                            boxShadow: `0 0 12px ${product.themeColor.neon}`,
                            background: `linear-gradient(to right, transparent, ${product.themeColor.neon}, transparent)`,
                          }}
                        />
                      )}
                    </AnimatePresence>

                    {/* Subtle cyber background pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

                    {/* Subtle hover glow inside the card based on theme color */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] md:rounded-[2.5rem] pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at 10% 10%, ${product.themeColor.glow}, transparent 65%)`,
                      }}
                    />

                    {/* Top Header Row within card */}
                    <div className="relative z-10 flex-grow">
                      <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6 md:mb-8">
                        {/* Glowing tech-themed Icon container */}
                        <div
                          className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#1A1C23] border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg relative"
                          style={{
                            boxShadow: `0 0 20px ${product.themeColor.glow}`,
                          }}
                        >
                          <Icon className={product.themeColor.text} size={28} />
                          {/* Interactive blinking pulse dot inside icon */}
                          <span
                            className={`absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full ${product.themeColor.primary} animate-pulse`}
                          />
                        </div>

                        {/* Meta Tech Tag */}
                        <div className="flex flex-wrap justify-start sm:justify-end gap-2 max-w-full">
                          {product.tags.map((tag) => (
                            <span
                              key={tag}
                              className={`px-3 py-1 text-[9px] font-mono tracking-widest uppercase border border-white/10 rounded-md bg-[#13151D] text-slate-300 font-bold`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Dynamic Shuffling Scrambler Title */}
                      <h3
                        className={`text-2xl md:text-3xl font-bold mb-3 md:mb-4 tracking-tight transition-colors duration-300 ${product.themeColor.text.replace("text-", "group-hover:text-")}`}
                      >
                        <CipherText text={product.name} active={isHovered} />
                      </h3>
                      <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
                        {product.description}
                      </p>

                      {/* Realtime Cyber Diagnostics HUD Section inside Card */}
                      <div className="bg-[#13151C]/60 border border-white/5 rounded-2xl p-4 font-mono text-[11px] text-slate-400 mb-6 flex flex-col gap-2 relative overflow-hidden backdrop-blur-sm">
                        <div className="absolute top-0 right-0 p-2 text-slate-600">
                          <Activity size={12} className="animate-pulse" />
                        </div>
                        <div className="flex justify-between border-b border-white/5 pb-1.5">
                          <span>SECURE_LINK:</span>
                          <span className={product.themeColor.text}>
                            {product.telemetry.securityHash}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>STATUS:</span>
                          <span className="text-green-400 font-bold">
                            {product.telemetry.status}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>{product.telemetry.metricLabel}:</span>
                          <span className="text-white font-bold">
                            {product.telemetry.metricValue}
                          </span>
                        </div>
                      </div>

                      {/* Interactive Diagnostic Streams Expandable Section */}
                      <AnimatePresence>
                        {isDiagnosticMode && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-black/40 border border-orange-500/15 rounded-2xl p-4 font-mono text-[10px] text-slate-500 mb-6 flex flex-col gap-1.5 max-h-[140px] overflow-y-auto"
                          >
                            <div className="text-[11px] font-bold text-orange-500/80 mb-1 flex items-center gap-1.5">
                              <Cpu size={12} />
                              <span>LIVE_LOGS_STREAM</span>
                            </div>
                            {product.telemetry.logStreams.map((log, logIdx) => (
                              <div key={logIdx} className="flex gap-2">
                                <span className="text-orange-500/40">
                                  [{logIdx + 1}]
                                </span>
                                <span className="text-slate-400 select-all">
                                  {log}
                                </span>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="relative z-10 mt-auto">
                      {/* Action Bar Divider */}
                      <div
                        className={`h-px w-full bg-gradient-to-r from-white/10 to-transparent mb-6 md:mb-8`}
                      />

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
                            <Play
                              size={18}
                              className="text-[#34A853] fill-[#34A853] group-hover/play:text-[#4285F4] group-hover/play:fill-[#4285F4] transition-colors"
                            />
                            Play Store
                          </a>
                        </div>

                        {/* Secondary Actions (Right) - Icon Only */}
                        <div className="flex items-center justify-center sm:justify-end gap-3 sm:gap-4 pb-2">
                          <a
                            href={product.links.apk}
                            download={product.name}
                            title="Download APK"
                            className={`p-3 bg-[#1A1C23] border border-white/10 text-slate-400 rounded-xl transition-all group/icon ${product.themeColor.bg.replace("group-hover:", "hover:")} ${product.themeColor.text.replace("text-", "hover:text-")}`}
                          >
                            <Download
                              size={20}
                              className="group-hover/icon:scale-110 transition-transform"
                            />
                          </a>
                          <a
                            href={product.links.youtube}
                            title="Watch Demo"
                            className={`p-3 bg-[#1A1C23] border border-white/10 text-slate-400 rounded-xl transition-all group/icon hover:bg-[#FF0000]/10 hover:text-[#FF0000]`}
                          >
                            <Youtube
                              size={20}
                              className="group-hover/icon:scale-110 transition-transform fill-transparent group-hover/icon:fill-[#FF0000]/20"
                            />
                          </a>
                          <Link
                            to={`/case-study/${product.id}`}
                            title="Read Case Study"
                            className={`p-3 bg-[#1A1C23] border border-white/10 text-slate-400 rounded-xl transition-all group/icon hover:bg-blue-500/10 hover:text-blue-500`}
                          >
                            <BookOpen
                              size={20}
                              className="group-hover/icon:scale-110 transition-transform"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
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
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
