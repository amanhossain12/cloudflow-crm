import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const features = [
  {
    feature: "Team Members",
    starter: "5",
    pro: "25",
    enterprise: "Unlimited",
  },
  {
    feature: "Storage",
    starter: "10 GB",
    pro: "100 GB",
    enterprise: "Unlimited",
  },
  {
    feature: "AI Automation",
    starter: false,
    pro: true,
    enterprise: true,
  },
  {
    feature: "Workflow Builder",
    starter: false,
    pro: true,
    enterprise: true,
  },
  {
    feature: "Advanced Analytics",
    starter: false,
    pro: true,
    enterprise: true,
  },
  {
    feature: "API Access",
    starter: false,
    pro: true,
    enterprise: true,
  },
  {
    feature: "Priority Support",
    starter: false,
    pro: true,
    enterprise: true,
  },
  {
    feature: "Dedicated Manager",
    starter: false,
    pro: false,
    enterprise: true,
  },
];

const renderValue = (value) => {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="mx-auto text-green-400" size={22} />
    ) : (
      <X className="mx-auto text-red-400" size={22} />
    );
  }

  return <span className="text-gray-300">{value}</span>;
};

function PricingComparison() {
  return (
    <section className="relative overflow-hidden bg-black py-28">
      {/* Glow */}
      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-blue-600/10 blur-[170px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[170px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400">
            COMPARE PLANS
          </span>

          <h2 className="mt-8 text-4xl font-extrabold text-white md:text-6xl">
            Compare
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {" "}
              Features
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Compare every feature and choose the plan that fits your business.
          </p>
        </motion.div>

        {/* Table */}
        <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
          <table className="min-w-full">
            <thead className="border-b border-white/10">
              <tr>
                <th className="px-8 py-6 text-left text-white">
                  Features
                </th>

                <th className="px-8 py-6 text-center text-white">
                  Starter
                </th>

                <th className="px-8 py-6 text-center text-blue-400">
                  Professional
                </th>

                <th className="px-8 py-6 text-center text-white">
                  Enterprise
                </th>
              </tr>
            </thead>

            <tbody>
              {features.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-white/10 last:border-none"
                >
                  <td className="px-8 py-5 font-medium text-white">
                    {item.feature}
                  </td>

                  <td className="px-8 py-5 text-center">
                    {renderValue(item.starter)}
                  </td>

                  <td className="px-8 py-5 text-center">
                    {renderValue(item.pro)}
                  </td>

                  <td className="px-8 py-5 text-center">
                    {renderValue(item.enterprise)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default PricingComparison;