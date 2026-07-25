import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Can I change my plan later?",
    answer:
      "Yes. You can upgrade or downgrade your subscription at any time without losing your data.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Absolutely! Every plan comes with a 14-day free trial. No credit card is required to get started.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Yes. If you're not satisfied, you can request a refund within the first 30 days of your subscription.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. There are no long-term contracts. You can cancel your subscription whenever you want.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Your data is protected using enterprise-grade encryption, regular backups, and industry-standard security practices.",
  },
  {
    question: "Do Enterprise plans include dedicated support?",
    answer:
      "Yes. Enterprise customers receive a dedicated account manager, priority support, onboarding assistance, and custom integrations.",
  },
];

function PricingFAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative overflow-hidden bg-black py-28">
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-blue-600/10 blur-[170px]" />
      <div className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[170px]" />

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400">
            FAQ
          </span>

          <h2 className="mt-8 text-4xl font-extrabold text-white md:text-6xl">
            Frequently Asked
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {" "}
              Questions
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Everything you need to know before choosing a CloudFlow plan.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <button
                onClick={() => setOpen(open === index ? -1 : index)}
                className="flex w-full items-center justify-between p-7 text-left"
              >
                <span className="text-lg font-semibold text-white">
                  {faq.question}
                </span>

                <motion.div
                  animate={{
                    rotate: open === index ? 180 : 0,
                  }}
                  transition={{ duration: 0.25 }}
                >
                  <ChevronDown className="text-blue-400" />
                </motion.div>
              </button>

              <AnimatePresence>
                {open === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="border-t border-white/10 px-7 py-6">
                      <p className="leading-8 text-gray-400">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingFAQ;