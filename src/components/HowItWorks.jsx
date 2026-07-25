import { motion } from "framer-motion";
import {
  Upload,
  BrainCircuit,
  MessageSquareText,
  BarChart4,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Upload Your Data",
    description:
      "Import your customers, leads and business information securely in seconds.",
  },
  {
    number: "02",
    icon: BrainCircuit,
    title: "AI Understands Your Business",
    description:
      "CloudFlow AI analyzes your workflow and recommends intelligent automation.",
  },
  {
    number: "03",
    icon: MessageSquareText,
    title: "Collaborate With Your Team",
    description:
      "Assign tasks, communicate instantly and manage everything from one place.",
  },
  {
    number: "04",
    icon: BarChart4,
    title: "Track Business Growth",
    description:
      "Monitor revenue, customers and team productivity using live analytics.",
  },
];

function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-black py-28">
      {/* Background */}

      <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[170px]" />

      <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[170px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center"
        >
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400">
            HOW IT WORKS
          </span>

          <h2 className="mt-8 text-4xl font-extrabold text-white md:text-6xl">
            Get Started in
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {" "}
              Four Simple Steps
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Everything you need to automate your business in just a few
            simple steps.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative mx-auto mt-24 max-w-5xl">

          {/* Center Line */}

          <div className="absolute left-8 top-0 hidden h-full w-[2px] bg-gradient-to-b from-blue-500 via-cyan-400 to-blue-600 md:block" />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{
                  opacity: 0,
                  y: 70,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: .7,
                  delay: index * .15,
                }}
                className="relative mb-16 flex flex-col gap-8 md:flex-row md:items-start"
              >                {/* Timeline Dot */}

                <div className="relative z-20 hidden md:flex">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-blue-500/30 bg-gradient-to-br from-blue-500 to-cyan-400 shadow-[0_0_35px_rgba(59,130,246,.45)]">
                    <Icon size={28} className="text-white" />
                  </div>

                  <div className="absolute inset-0 animate-ping rounded-full bg-blue-500/20" />
                </div>

                {/* Card */}

                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                  }}
                  className="group flex-1 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-blue-500/40 hover:bg-white/10 hover:shadow-[0_0_50px_rgba(59,130,246,.25)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/5 to-cyan-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="relative z-10">
                    {/* Mobile Icon */}

                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 md:hidden">
                      <Icon size={28} className="text-white" />
                    </div>

                    {/* Step Number */}

                    <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400">
                      STEP {step.number}
                    </span>

                    <h3 className="mt-6 text-3xl font-bold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-5 max-w-2xl leading-8 text-gray-400">
                      {step.description}
                    </p>

                    <button className="mt-8 flex items-center gap-2 font-medium text-blue-400 transition-all duration-300 hover:gap-3 hover:text-cyan-300">
                      Learn More

                      <ArrowRight size={18} />
                    </button>
                  </div>
                </motion.div>

              </motion.div>
            );
          })}        </div>
      </div>
    </section>
  );
}

export default HowItWorks;