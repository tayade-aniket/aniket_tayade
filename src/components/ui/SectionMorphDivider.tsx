"use client";

import { motion } from "framer-motion";

interface SectionMorphDividerProps {
  variant?: "a" | "b" | "c" | "d" | "e";
  flip?: boolean;
  fromColor?: string;
  toColor?: string;
}

// Six distinct morphing wave keyframe sets for rich variety
const waveSets = {
  a: [
    "M0,40 C200,70 400,10 600,45 C800,80 1000,15 1200,50 C1350,75 1400,30 1440,40 L1440,80 L0,80 Z",
    "M0,55 C240,20 460,75 680,35 C900,0 1080,65 1280,30 C1390,10 1425,55 1440,50 L1440,80 L0,80 Z",
    "M0,28 C180,60 380,18 580,55 C780,90 960,22 1160,58 C1310,82 1390,28 1440,35 L1440,80 L0,80 Z",
    "M0,42 C160,10 340,68 560,30 C780,-5 1000,70 1220,38 C1360,18 1415,60 1440,45 L1440,80 L0,80 Z",
  ],
  b: [
    "M0,35 C220,65 420,8 640,42 C860,76 1060,12 1280,48 C1380,68 1420,28 1440,35 L1440,80 L0,80 Z",
    "M0,50 C200,18 420,72 640,32 C860,-8 1080,60 1300,28 C1400,8 1430,55 1440,48 L1440,80 L0,80 Z",
    "M0,22 C260,58 460,14 680,52 C900,90 1080,20 1280,55 C1390,78 1425,25 1440,30 L1440,80 L0,80 Z",
    "M0,48 C180,15 380,65 600,28 C820,-6 1040,70 1260,35 C1370,15 1420,62 1440,50 L1440,80 L0,80 Z",
  ],
  c: [
    "M0,30 C240,68 440,5 660,40 C880,75 1060,10 1260,45 C1380,68 1420,22 1440,30 L1440,80 L0,80 Z",
    "M0,52 C200,20 400,74 640,34 C880,-2 1080,68 1300,32 C1400,12 1432,58 1440,52 L1440,80 L0,80 Z",
    "M0,25 C200,60 400,15 600,55 C800,88 1000,18 1200,52 C1340,78 1400,28 1440,33 L1440,80 L0,80 Z",
    "M0,45 C170,12 360,62 580,25 C800,-8 1020,68 1240,32 C1360,10 1415,58 1440,48 L1440,80 L0,80 Z",
  ],
  d: [
    "M0,38 C210,72 410,12 630,48 C850,84 1040,16 1240,52 C1360,72 1415,28 1440,38 L1440,80 L0,80 Z",
    "M0,54 C220,22 440,78 660,38 C880,2 1080,72 1300,36 C1400,14 1428,62 1440,54 L1440,80 L0,80 Z",
    "M0,20 C180,55 380,10 580,48 C780,82 980,14 1180,50 C1320,76 1400,24 1440,28 L1440,80 L0,80 Z",
    "M0,50 C190,18 390,70 610,32 C830,-4 1050,72 1270,38 C1380,18 1420,64 1440,52 L1440,80 L0,80 Z",
  ],
  e: [
    "M0,32 C230,68 450,8 670,44 C890,80 1070,12 1270,48 C1380,70 1420,26 1440,32 L1440,80 L0,80 Z",
    "M0,56 C210,24 430,76 650,36 C870,0 1090,66 1310,30 C1400,8 1430,52 1440,56 L1440,80 L0,80 Z",
    "M0,24 C190,62 390,16 590,54 C790,90 990,20 1190,55 C1330,80 1405,30 1440,36 L1440,80 L0,80 Z",
    "M0,46 C170,10 370,64 590,26 C810,-10 1030,70 1250,34 C1368,12 1418,60 1440,46 L1440,80 L0,80 Z",
  ],
};

// Light-theme gradient color configs per variant
const colorConfigs = {
  a: { fill1: "rgba(184,134,11,0.12)", fill2: "rgba(184,134,11,0.06)", fill3: "rgba(226,213,183,0.30)", stroke: "rgba(184,134,11,0.35)" },
  b: { fill1: "rgba(100,116,139,0.10)", fill2: "rgba(100,116,139,0.05)", fill3: "rgba(203,213,225,0.28)", stroke: "rgba(100,116,139,0.28)" },
  c: { fill1: "rgba(184,134,11,0.09)", fill2: "rgba(167,139,250,0.06)", fill3: "rgba(233,229,243,0.25)", stroke: "rgba(167,139,250,0.25)" },
  d: { fill1: "rgba(52,211,153,0.08)", fill2: "rgba(52,211,153,0.04)", fill3: "rgba(209,250,229,0.22)", stroke: "rgba(52,211,153,0.22)" },
  e: { fill1: "rgba(184,134,11,0.10)", fill2: "rgba(100,116,139,0.06)", fill3: "rgba(226,218,200,0.28)", stroke: "rgba(184,134,11,0.30)" },
};

export default function SectionMorphDivider({
  variant = "a",
  flip = false,
  fromColor,
  toColor,
}: SectionMorphDividerProps) {
  const waves = waveSets[variant];
  const colors = colorConfigs[variant];

  // Timing offsets for parallax depth
  const speeds = [8, 12, 18];
  const fills = [
    fromColor ?? colors.fill1,
    colors.fill2,
    toColor ?? colors.fill3,
  ];
  const opacities = [0.85, 0.65, 0.45];

  return (
    <div
      className={`relative w-full pointer-events-none select-none -my-px z-10 ${flip ? "scale-y-[-1]" : ""}`}
      style={{ height: "72px" }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="w-full h-full block"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Soft blur filter for the glow layer */}
          <filter id={`blur-${variant}`} x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>

        {/* Layer 3 — back/bottom, slowest, most transparent */}
        <motion.path
          d={waves[0]}
          fill={fills[2]}
          opacity={opacities[2]}
          animate={{ d: [waves[0], waves[1], waves[2], waves[3], waves[0]] }}
          transition={{ duration: speeds[2], repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Layer 2 — middle */}
        <motion.path
          d={waves[1]}
          fill={fills[1]}
          opacity={opacities[1]}
          animate={{ d: [waves[1], waves[2], waves[3], waves[0], waves[1]] }}
          transition={{ duration: speeds[1], repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Layer 1 — front, fastest, most opaque */}
        <motion.path
          d={waves[2]}
          fill={fills[0]}
          opacity={opacities[0]}
          animate={{ d: [waves[2], waves[3], waves[0], waves[1], waves[2]] }}
          transition={{ duration: speeds[0], repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Glowing stroke edge on the front wave */}
        <motion.path
          d={waves[2]}
          fill="none"
          stroke={colors.stroke}
          strokeWidth="1.5"
          opacity={0.7}
          filter={`url(#blur-${variant})`}
          animate={{ d: [waves[2], waves[3], waves[0], waves[1], waves[2]] }}
          transition={{ duration: speeds[0], repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Crisp hairline on same wave — no blur */}
        <motion.path
          d={waves[2]}
          fill="none"
          stroke={colors.stroke}
          strokeWidth="0.8"
          opacity={0.5}
          animate={{ d: [waves[2], waves[3], waves[0], waves[1], waves[2]] }}
          transition={{ duration: speeds[0], repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Travelling energy bead along the crest */}
        <motion.circle
          r="2.5"
          fill="#B8860B"
          opacity={0.7}
          animate={{
            cx: [60, 420, 820, 1200, 1390, 1200, 820, 420, 60],
            cy: [40, 48, 28, 50, 35, 50, 28, 48, 40],
            opacity: [0.3, 0.9, 0.5, 1.0, 0.4, 1.0, 0.5, 0.9, 0.3],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
