import { motion } from "framer-motion";
import {
  BarChart3,
  DollarSign,
  Users,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

function ProductShowcase() {
  const stats = [
    { icon: Users, value: "12.8K", label: "Active Users" },
    { icon: DollarSign, value: "$84K", label: "Monthly Revenue" },
    { icon: TrendingUp, value: "+26%", label: "Growth Rate" },
  ];

  const features = [
    "AI-powered customer insights",
    "Real-time sales tracking",
    "Smart workflow automation",
    "Advanced reporting dashboard",
  ];

  return (
    <section className="relative overflow-hidden bg-black py-28">
      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[170px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[170px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">
        {/* Dashboard */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Business Dashboard</p>
              <h3 className="text-2xl font-bold text-white">
                Revenue Analytics
              </h3>
            </div>

            <div className="rounded-xl bg-blue-500/20 p-3">
              <BarChart3 className="text-blue-400" />
            </div>
          </div>

          <div className="flex h-56 items-end gap-3">
            {[40, 80, 60, 120, 90, 150, 110, 170].map((height, index) => (
              <motion.div
                key={index}
                initial={{ height: 0 }}
                whileInView={{ height }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="w-full rounded-full bg-gradient-to-t from-blue-600 to-cyan-400"
              />
            ))}
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center"
                >
                  <Icon className="mx-auto mb-3 text-blue-400" />

                  <h4 className="text-2xl font-bold text-white">
                    {item.value}
                  </h4>

                  <p className="mt-1 text-sm text-gray-400">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400">
            DASHBOARD
          </span>

          <h2 className="mt-8 text-4xl font-extrabold text-white md:text-6xl">
            Powerful Analytics
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {" "}
              In One Place
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-400">
            Monitor revenue, customer engagement, sales performance, and
            business growth from one beautiful dashboard powered by AI.
          </p>

          <div className="mt-10 space-y-5">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <CheckCircle2 className="text-blue-400" size={22} />
                <span className="text-lg text-gray-300">{feature}</span>
              </div>
            ))}
          </div>

          <button className="mt-10 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-8 py-4 font-semibold text-white transition hover:scale-105">
            Explore Dashboard
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default ProductShowcase;