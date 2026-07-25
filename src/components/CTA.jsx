import { motion } from "framer-motion";

function CTA() {
  return (
    <section className="relative overflow-hidden bg-black py-28 text-white">
      {/* Background Glow */}
      <div className="absolute left-1/4 top-0 h-80 w-80 rounded-full bg-blue-600/20 blur-[130px]" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-cyan-500/20 blur-[150px]" />

      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-white/5 p-12 text-center backdrop-blur-2xl shadow-2xl"
        >
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm text-blue-400">
            START TODAY
          </span>

          <h2 className="mt-8 text-5xl font-extrabold leading-tight md:text-6xl">
            Ready to
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {" "}
              Grow Faster?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Join thousands of businesses using CloudFlow CRM to automate sales,
            improve customer relationships, and accelerate revenue growth with
            AI-powered workflows.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <button className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
              Start Free Trial
            </button>

            <button className="rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-semibold transition-all duration-300 hover:border-blue-400 hover:bg-white/10">
              Book a Demo
            </button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-10">
            <div>
              <h3 className="text-3xl font-bold text-blue-400">10K+</h3>
              <p className="text-gray-500">Active Users</p>
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
      </div>
    </section>
  );
}

export default CTA;