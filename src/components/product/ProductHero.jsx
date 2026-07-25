import { motion } from "framer-motion";
import { ArrowRight, Play, BarChart3, Users, Zap } from "lucide-react";

function ProductHero() {
  return (
    <section className="relative overflow-hidden bg-black pt-36 pb-24">
      {/* Background Glow */}
      <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[170px]" />
      <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[170px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400">
            PRODUCT
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-7xl">
            AI CRM for
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {" "}
              Modern Teams
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
            Automate sales, manage customers, analyze business performance,
            and grow faster with CloudFlow's intelligent CRM platform.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-7 py-4 font-semibold text-white">
              Start Free
              <ArrowRight size={18} />
            </button>

            <button className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-7 py-4 font-semibold text-white">
              <Play size={18} />
              Live Demo
            </button>
          </div>
        </motion.div>        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Glow */}
          <div className="absolute inset-0 rounded-[40px] bg-blue-500/10 blur-3xl" />

          {/* Dashboard */}
          <div className="relative rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">

            {/* Header */}
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">
                  Dashboard Overview
                </p>

                <h3 className="mt-1 text-2xl font-bold text-white">
                  CloudFlow Analytics
                </h3>
              </div>

              <div className="rounded-xl bg-blue-500/20 p-3">
                <BarChart3 className="text-blue-400" />
              </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-2 gap-5">

              <motion.div
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <Users className="mb-4 text-blue-400" />

                <p className="text-sm text-gray-400">
                  Customers
                </p>

                <h3 className="mt-2 text-3xl font-bold text-white">
                  12.8K
                </h3>

                <span className="text-sm text-green-400">
                  +18%
                </span>
              </motion.div>

              <motion.div
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <Zap className="mb-4 text-cyan-400" />

                <p className="text-sm text-gray-400">
                  Revenue
                </p>

                <h3 className="mt-2 text-3xl font-bold text-white">
                  $84K
                </h3>

                <span className="text-sm text-green-400">
                  +32%
                </span>
              </motion.div>
            </div>

            {/* Analytics */}
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-6 flex items-center justify-between">
                <h4 className="font-semibold text-white">
                  Monthly Growth
                </h4>

                <span className="text-sm text-blue-400">
                  +26.4%
                </span>
              </div>

              <div className="flex h-40 items-end justify-between gap-3">
                {[35, 60, 45, 85, 65, 110, 90].map((height, index) => (
                  <motion.div
                    key={index}
                    initial={{ height: 0 }}
                    animate={{ height }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.08,
                    }}
                    className="w-full rounded-full bg-gradient-to-t from-blue-600 to-cyan-400"
                  />
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ProductHero;