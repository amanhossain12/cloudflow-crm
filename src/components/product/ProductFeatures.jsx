import { motion } from "framer-motion";
import {
  BrainCircuit,
  ShieldCheck,
  BarChart3,
  Users,
  Workflow,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "AI Automation",
    desc: "Automate repetitive workflows using intelligent AI assistants that save hours every week.",
  },
  {
    icon: Users,
    title: "Customer Management",
    desc: "Track every customer interaction and manage your entire sales pipeline effortlessly.",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    desc: "Powerful dashboards with actionable insights to help your business grow faster.",
  },
  {
    icon: Workflow,
    title: "Workflow Builder",
    desc: "Create custom workflows with drag-and-drop automation for every department.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    desc: "Bank-grade encryption, role-based permissions, and enterprise compliance built-in.",
  },
  {
    icon: Sparkles,
    title: "Smart Integrations",
    desc: "Connect with Slack, Gmail, Stripe, HubSpot, Notion, and hundreds of other tools.",
  },
];

function ProductFeatures() {
  return (
    <section className="relative overflow-hidden bg-black py-28">
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-blue-600/10 blur-[150px]" />
      <div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400">
            FEATURES
          </span>

          <h2 className="mt-8 text-4xl font-extrabold text-white md:text-6xl">
            Everything Your Business
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {" "}
              Needs
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            CloudFlow combines AI, automation, analytics, and collaboration
            into one powerful CRM platform.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-400/20 transition duration-300 group-hover:scale-110">
                  <Icon size={30} className="text-blue-400" />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-400">
                  {feature.desc}
                </p>

                <button className="mt-8 text-blue-400 transition hover:text-cyan-300">
                  Learn More →
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProductFeatures;