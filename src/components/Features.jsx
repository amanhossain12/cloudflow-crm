import { motion } from "framer-motion";
import {
  FaRobot,
  FaChartLine,
  FaUsers,
  FaEnvelope,
  FaMobileAlt,
  FaShieldAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaRobot size={34} />,
    title: "AI Lead Scoring",
    desc: "Automatically identify and prioritize your highest-value prospects using intelligent AI models.",
  },
  {
    icon: <FaChartLine size={34} />,
    title: "Sales Analytics",
    desc: "Track revenue, conversions, and performance with beautiful real-time dashboards.",
  },
  {
    icon: <FaUsers size={34} />,
    title: "Team Collaboration",
    desc: "Assign leads, collaborate seamlessly, and keep every teammate aligned.",
  },
  {
    icon: <FaEnvelope size={34} />,
    title: "Email Automation",
    desc: "Send personalized follow-ups automatically and never lose another lead.",
  },
  {
    icon: <FaMobileAlt size={34} />,
    title: "Mobile CRM",
    desc: "Manage customers, opportunities, and pipelines from anywhere.",
  },
  {
    icon: <FaShieldAlt size={34} />,
    title: "Enterprise Security",
    desc: "End-to-end encryption, role-based access, and enterprise-grade protection.",
  },
];

function Features() {
  return (
    <section className="relative overflow-hidden bg-black py-28 text-white">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm text-blue-400">
            OUR FEATURES
          </span>

          <h2 className="mt-8 text-5xl font-extrabold md:text-6xl">
            Everything Your
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {" "}
              Business Needs
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Powerful AI-powered tools built to help modern businesses automate
            sales, manage customers, and accelerate growth.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl"></div>
              </div>

              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg">
                  {item.icon}
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {item.desc}
                </p>

                <button className="mt-8 text-blue-400 transition group-hover:text-cyan-300">
                  Learn More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;