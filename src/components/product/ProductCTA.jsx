import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";

const benefits = [
  "14-Day Free Trial",
  "No Credit Card Required",
  "Cancel Anytime",
];

function ProductCTA() {
  return (
    <section className="relative overflow-hidden bg-black py-28">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/15 blur-[180px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl md:p-16"
        >
          <div className="mx-auto max-w-4xl text-center">
            <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400">
              GET STARTED
            </span>

            <h2 className="mt-8 text-4xl font-extrabold leading-tight text-white md:text-6xl">
              Ready to Transform
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                {" "}
                Your Business?
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
              Join thousands of businesses using CloudFlow CRM to automate
              workflows, boost productivity, and grow revenue with AI-powered
              customer management.
            </p>

            {/* Benefits */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
              {benefits.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="text-blue-400" size={20} />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-12 flex flex-wrap justify-center gap-5">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-500/20"
              >
                Start Free Trial
                <ArrowRight size={18} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white"
              >
                <Play size={18} />
                Watch Demo
              </motion.button>
            </div>

            {/* Stats */}
            <div className="mt-16 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-3">
              <div>
                <h3 className="text-4xl font-bold text-white">25K+</h3>
                <p className="mt-2 text-gray-400">Businesses</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-white">99.9%</h3>
                <p className="mt-2 text-gray-400">Uptime</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-white">4.9★</h3>
                <p className="mt-2 text-gray-400">Customer Rating</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ProductCTA;