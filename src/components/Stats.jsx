import { motion } from "framer-motion";
import {
  Users,
  Briefcase,
  Globe2,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "50K+",
    title: "Active Users",
    description: "Businesses trust CloudFlow every day.",
  },
  {
    icon: Briefcase,
    value: "120K+",
    title: "Projects Managed",
    description: "Millions of workflows automated.",
  },
  {
    icon: Globe2,
    value: "80+",
    title: "Countries",
    description: "Serving customers worldwide.",
  },
  {
    icon: TrendingUp,
    value: "99.9%",
    title: "Uptime",
    description: "Reliable cloud infrastructure.",
  },
];

function Stats() {
  return (
    <section className="relative overflow-hidden bg-black py-28">
      {/* Background Glow */}

      <div className="absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[170px]" />

      <div className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[170px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center"
        >
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400">
            OUR IMPACT
          </span>

          <h2 className="mt-8 text-4xl font-extrabold text-white md:text-6xl">
            Trusted Across
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {" "}
              The World
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Join thousands of companies growing faster with CloudFlow.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .6,
                  delay: index * .15,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-blue-500/40 hover:bg-white/10 hover:shadow-[0_0_45px_rgba(59,130,246,.25)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/5 to-cyan-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400">
                    <Icon size={30} className="text-white" />
                  </div>

                  <h3 className="mt-8 text-5xl font-extrabold text-white">
                    {item.value}
                  </h3>

                  <h4 className="mt-4 text-xl font-semibold text-white">
                    {item.title}
                  </h4>

                  <p className="mt-3 leading-7 text-gray-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Stats;