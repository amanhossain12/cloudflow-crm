import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

function PricingHero() {
  return (
    <section className="relative overflow-hidden bg-black pt-36 pb-24">
      {/* Glow */}
      <div className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-blue-600/20 blur-[180px]" />
      <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400">
            <Sparkles size={16} />
            SIMPLE PRICING
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-7xl">
            Choose The Perfect
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {" "}
              Plan
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            Flexible pricing designed for startups, growing businesses,
            and enterprise teams. Upgrade anytime without hidden fees.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-8 py-4 font-semibold text-white transition hover:scale-105">
              Get Started
              <ArrowRight size={18} />
            </button>

            <button className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition hover:border-blue-500">
              Contact Sales
            </button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid gap-8 sm:grid-cols-3">
            {[
              {
                number: "25K+",
                label: "Active Customers",
              },
              {
                number: "99.9%",
                label: "Platform Uptime",
              },
              {
                number: "24/7",
                label: "Premium Support",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <h2 className="text-4xl font-bold text-white">
                  {item.number}
                </h2>

                <p className="mt-3 text-gray-400">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default PricingHero;