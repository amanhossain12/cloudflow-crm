import { motion } from "framer-motion";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "Is there a free trial?",
    answer:
      "Yes. Every CloudFlow plan comes with a 14-day free trial. No credit card is required to get started.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Absolutely. You can cancel your subscription whenever you want with no hidden fees or long-term contracts.",
  },
  {
    question: "Is my business data secure?",
    answer:
      "Yes. We use enterprise-grade encryption, secure cloud infrastructure, and regular backups to keep your data protected.",
  },
  {
    question: "Does CloudFlow integrate with other tools?",
    answer:
      "Yes. CloudFlow integrates with popular tools including Slack, Google Workspace, Zoom, Zapier, and many more.",
  },
];

function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <section className="relative overflow-hidden bg-black py-28 text-white">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />

      <div className="relative mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm text-blue-400">
            FAQ
          </span>

          <h2 className="mt-8 text-5xl font-extrabold">
            Frequently Asked
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {" "}
              Questions
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-400">
            Everything you need to know before getting started with CloudFlow.
          </p>
        </motion.div>

        <div className="mt-16 space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold">
                  {faq.question}
                </span>

                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    active === index ? "rotate-180 text-blue-400" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  active === index
                    ? "max-h-40 px-6 pb-6"
                    : "max-h-0"
                }`}
              >
                <p className="leading-7 text-gray-400">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;