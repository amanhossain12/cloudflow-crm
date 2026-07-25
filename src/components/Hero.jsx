import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-black pt-24 text-white md:pt-28">
      {/* Background Glow */}
      <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-indigo-500/20 blur-[120px]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
              🚀 AI Powered CRM Platform
            </span>

            <h1 className="mt-8 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-7xl">
              Close More Deals
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                With AI Automation
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
              CloudFlow helps modern businesses manage leads, automate
              follow-ups, analyze sales performance, and increase revenue using
              powerful AI workflows.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:scale-105 hover:bg-blue-700">
                Start Free Trial
                <ArrowRight size={20} />
              </button>

              <button className="flex items-center justify-center gap-2 rounded-xl border border-gray-700 px-8 py-4 transition hover:border-blue-500 hover:bg-white/5">
                <PlayCircle size={20} />
                Watch Demo
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-8">
              <div>
                <h3 className="text-3xl font-bold text-blue-400">10K+</h3>
                <p className="text-gray-500">Businesses</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-400">99.9%</h3>
                <p className="text-gray-500">Uptime</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-400">24/7</h3>
                <p className="text-gray-500">Support</p>
              </div>
            </div>
          </motion.div>

          {/* Right Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 60, y: 40 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-xl sm:p-8"
            >
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-lg font-bold sm:text-xl">
                  Sales Dashboard
                </h3>

                <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs text-green-400 sm:text-sm">
                  Live
                </span>
              </div>

              <div className="mb-6 h-36 rounded-xl bg-gradient-to-br from-blue-600/40 to-indigo-700/30 sm:mb-8 sm:h-48" />

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="rounded-xl bg-black/40 p-3 sm:p-5">
                  <p className="text-sm text-gray-400">Revenue</p>
                  <h2 className="mt-2 text-xl font-bold sm:text-3xl">
                    $48.5K
                  </h2>
                </div>

                <div className="rounded-xl bg-black/40 p-3 sm:p-5">
                  <p className="text-sm text-gray-400">Leads</p>
                  <h2 className="mt-2 text-xl font-bold sm:text-3xl">
                    1,284
                  </h2>
                </div>

                <div className="rounded-xl bg-black/40 p-3 sm:p-5">
                  <p className="text-sm text-gray-400">Conversions</p>
                  <h2 className="mt-2 text-xl font-bold sm:text-3xl">
                    72%
                  </h2>
                </div>

                <div className="rounded-xl bg-black/40 p-3 sm:p-5">
                  <p className="text-sm text-gray-400">Growth</p>
                  <h2 className="mt-2 text-xl font-bold text-green-400 sm:text-3xl">
                    +36%
                  </h2>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;