import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Crown } from "lucide-react";

const monthlyPlans = [
  {
    name: "Starter",
    price: 19,
    description: "Perfect for individuals & startups.",
    button: "Get Started",
    popular: false,
    features: [
      "5 Team Members",
      "10GB Storage",
      "Basic Analytics",
      "Email Support",
      "Unlimited Projects",
    ],
  },
  {
    name: "Professional",
    price: 49,
    description: "Best for growing businesses.",
    button: "Start Free Trial",
    popular: true,
    features: [
      "25 Team Members",
      "100GB Storage",
      "Advanced Analytics",
      "Priority Support",
      "AI Automation",
      "Workflow Builder",
      "API Access",
    ],
  },
  {
    name: "Enterprise",
    price: 99,
    description: "For large organizations.",
    button: "Contact Sales",
    popular: false,
    features: [
      "Unlimited Members",
      "Unlimited Storage",
      "AI Insights",
      "24/7 Premium Support",
      "Dedicated Manager",
      "Custom Integrations",
      "Enterprise Security",
    ],
  },
];

const yearlyPlans = monthlyPlans.map((plan) => ({
  ...plan,
  price: Math.round(plan.price * 10),
}));

function PricingPlans() {
  const [yearly, setYearly] = useState(false);

  const plans = yearly ? yearlyPlans : monthlyPlans;

  return (
    <section className="relative overflow-hidden bg-black py-28">
      <div className="absolute left-0 top-10 h-80 w-80 rounded-full bg-blue-600/10 blur-[170px]" />
      <div className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[170px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Toggle */}
        <div className="mb-16 flex justify-center">
          <div className="flex items-center gap-4 rounded-full border border-white/10 bg-white/5 p-2 backdrop-blur-xl">
            <button
              onClick={() => setYearly(false)}
              className={`rounded-full px-6 py-2 transition ${
                !yearly
                  ? "bg-blue-500 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setYearly(true)}
              className={`rounded-full px-6 py-2 transition ${
                yearly
                  ? "bg-blue-500 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className={`relative rounded-3xl border p-8 backdrop-blur-xl ${
                plan.popular
                  ? "border-blue-500 bg-blue-500/10"
                  : "border-white/10 bg-white/5"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-2 text-sm font-semibold text-white">
                  <div className="flex items-center gap-2">
                    <Crown size={16} />
                    Most Popular
                  </div>
                </div>
              )}

              <h3 className="mt-4 text-3xl font-bold text-white">
                {plan.name}
              </h3>

              <p className="mt-4 text-gray-400">
                {plan.description}
              </p>

              <div className="mt-8">
                <span className="text-5xl font-extrabold text-white">
                  ${plan.price}
                </span>

                <span className="text-gray-400">
                  /{yearly ? "year" : "month"}
                </span>
              </div>

              <button
                className={`mt-8 w-full rounded-xl py-4 font-semibold transition ${
                  plan.popular
                    ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white"
                    : "border border-white/10 bg-white/5 text-white hover:border-blue-500"
                }`}
              >
                {plan.button}
              </button>

              <div className="mt-10 space-y-5">
                {plan.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3"
                  >
                    <Check
                      size={18}
                      className="text-blue-400"
                    />

                    <span className="text-gray-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingPlans;