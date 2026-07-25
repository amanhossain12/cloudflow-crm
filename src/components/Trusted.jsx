import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

const topRow = [
  "Google",
  "Microsoft",
  "Amazon",
  "Spotify",
  "Slack",
  "Stripe",
];

const bottomRow = [
  "Adobe",
  "Netflix",
  "Notion",
  "HubSpot",
  "Zoom",
  "Airbnb",
];

// Duplicate for seamless dragging
const topCompanies = [...topRow, ...topRow];
const bottomCompanies = [...bottomRow, ...bottomRow];

function Trusted() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Top Row -> Left
  const xTop = useTransform(
    scrollYProgress,
    [0, 1],
    [250, -250]
  );

  // Bottom Row -> Right
  const xBottom = useTransform(
    scrollYProgress,
    [0, 1],
    [-250, 250]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.95, 1, 0.95]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.4, 1, 1, 0.4]
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-black py-28"
    >      {/* Background Glow */}
      <div className="absolute -top-32 left-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >

          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm text-blue-400">
            TRUSTED WORLDWIDE
          </span>

          <h2 className="mt-8 text-4xl font-extrabold text-white md:text-6xl">

            Trusted by

            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {" "}
              Leading Companies
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">

            Thousands of businesses trust CloudFlow CRM to automate
            sales, manage customers and grow faster with AI-powered
            workflows.

          </p>

        </motion.div>

        {/* Slider Wrapper */}

        <motion.div
          style={{
            scale,
            opacity,
          }}
          className="relative mt-20 overflow-hidden"
        >

          {/* Left Fade */}

          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-32 bg-gradient-to-r from-black to-transparent" />

          {/* Right Fade */}

          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-32 bg-gradient-to-l from-black to-transparent" />          {/* ---------- Top Row ---------- */}

          <motion.div
            drag="x"
            dragConstraints={{
              left: -600,
              right: 600,
            }}
            dragElastic={0.08}
            dragMomentum={true}
            style={{ x: xTop }}
            className="flex w-max cursor-grab gap-6 active:cursor-grabbing"
          >
            {topCompanies.map((company, index) => (
              <motion.div
                key={`${company}-${index}`}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                }}
                className="
                  flex
                  h-24
                  min-w-[220px]
                  items-center
                  justify-center
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  px-10
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-blue-500
                  hover:bg-white/10
                  hover:shadow-[0_0_40px_rgba(59,130,246,.25)]
                "
              >
                <span className="text-xl font-semibold text-gray-300">
                  {company}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* ---------- Bottom Row ---------- */}

          <motion.div
            drag="x"
            dragConstraints={{
              left: -600,
              right: 600,
            }}
            dragElastic={0.08}
            dragMomentum={true}
            style={{ x: xBottom }}
            className="mt-8 flex w-max cursor-grab gap-6 active:cursor-grabbing"
          >
            {bottomCompanies.map((company, index) => (
              <motion.div
                key={`${company}-bottom-${index}`}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                }}
                className="
                  flex
                  h-24
                  min-w-[220px]
                  items-center
                  justify-center
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  px-10
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-cyan-400
                  hover:bg-white/10
                  hover:shadow-[0_0_40px_rgba(34,211,238,.25)]
                "
              >
                <span className="text-xl font-semibold text-gray-300">
                  {company}
                </span>
              </motion.div>
            ))}
          </motion.div>        </motion.div>
      </div>
    </section>
  );
}

export default Trusted;