import { motion } from "framer-motion";
import {
  BrainCircuit,
  BarChart3,
  ShieldCheck,
  Rocket,
  ArrowRight,
} from "lucide-react";

const stats = [
  {
    number: "98%",
    title: "Customer Satisfaction",
    description: "Trusted by thousands of businesses worldwide.",
  },
  {
    number: "5x",
    title: "Faster Workflow",
    description: "Automate repetitive tasks and save valuable time.",
  },
  {
    number: "24/7",
    title: "AI Automation",
    description: "Work continuously with intelligent AI assistance.",
  },
  {
    number: "50K+",
    title: "Businesses",
    description: "Growing companies rely on CloudFlow every day.",
  },
];

const features = [
  {
    icon: BrainCircuit,
    title: "AI Automation",
    description:
      "Automate repetitive customer management and workflows with powerful AI.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Track your business performance using real-time dashboards and reports.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description:
      "Protect your customer data using enterprise-grade security and encryption.",
  },
  {
    icon: Rocket,
    title: "Lightning Fast",
    description:
      "Optimized cloud infrastructure ensures blazing-fast performance.",
  },
];

function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-black py-28">
      {/* Background Glow */}

      <div className="absolute -left-24 top-10 h-96 w-96 rounded-full bg-blue-600/20 blur-[170px]" />

      <div className="absolute -right-24 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[170px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400">
            WHY CLOUDFLOW
          </span>

          <h2 className="mt-8 text-4xl font-extrabold text-white md:text-6xl">
            Why Businesses
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {" "}
              Choose CloudFlow
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Empower your business with AI-powered automation, real-time
            analytics, enterprise-grade security, and lightning-fast
            performance.
          </p>
        </motion.div>

        {/* Statistics */}

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-blue-500/40 hover:bg-white/10 hover:shadow-[0_0_45px_rgba(59,130,246,0.25)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/5 to-cyan-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <h3 className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-5xl font-extrabold text-transparent">
                  {item.number}
                </h3>

                <h4 className="mt-5 text-xl font-semibold text-white">
                  {item.title}
                </h4>

                <p className="mt-4 leading-7 text-gray-400">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Cards */}

        <div className="mt-24 grid gap-8 md:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-blue-500/40 hover:bg-white/10 hover:shadow-[0_0_45px_rgba(59,130,246,0.25)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/5 to-cyan-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 text-blue-400 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <Icon size={32} />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-4 leading-8 text-gray-400">
                    {feature.description}
                  </p>

                  <button className="mt-8 flex items-center gap-2 text-blue-400 transition-all duration-300 hover:gap-3 hover:text-cyan-300">
                    Learn More
                    <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;