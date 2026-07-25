import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechNova",
    image: "https://i.pravatar.cc/150?img=32",
    review:
      "CloudFlow completely transformed the way our sales team works. Productivity increased dramatically.",
  },
  {
    name: "David Miller",
    role: "Product Manager",
    image: "https://i.pravatar.cc/150?img=12",
    review:
      "The AI automation saves our team hours every week. The interface is beautiful and intuitive.",
  },
  {
    name: "Emma Wilson",
    role: "Startup Founder",
    image: "https://i.pravatar.cc/150?img=44",
    review:
      "One of the best CRM platforms we've ever used. Fast, modern and incredibly powerful.",
  },
  {
    name: "James Anderson",
    role: "Marketing Lead",
    image: "https://i.pravatar.cc/150?img=51",
    review:
      "Amazing dashboard, smooth workflow and fantastic analytics. Highly recommended.",
  },
  {
    name: "Sophia Brown",
    role: "Business Owner",
    image: "https://i.pravatar.cc/150?img=25",
    review:
      "Our customer management process became effortless after switching to CloudFlow.",
  },
  {
    name: "Michael Lee",
    role: "Operations Manager",
    image: "https://i.pravatar.cc/150?img=58",
    review:
      "Fast performance, premium design and reliable AI features. Absolutely worth it.",
  },
];

const cards = [...testimonials, ...testimonials];

function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-black py-28">

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
            TESTIMONIALS
          </span>

          <h2 className="mt-8 text-4xl font-extrabold text-white md:text-6xl">
            Loved By
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {" "}
              Thousands of Teams
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            See why businesses trust CloudFlow to automate workflows and
            accelerate growth.
          </p>
        </motion.div>

        <div className="relative mt-20 overflow-hidden">
            
                 <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            whileHover={{
              animationPlayState: "paused",
            }}
            className="flex w-max gap-8"
          >
            {cards.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                }}
                className="group w-[360px] flex-shrink-0 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-blue-500/40 hover:bg-white/10 hover:shadow-[0_0_45px_rgba(59,130,246,.25)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/5 to-cyan-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-16 w-16 rounded-full border-2 border-blue-500 object-cover"
                    />

                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {item.name}
                      </h3>

                      <p className="text-sm text-gray-400">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <p className="mt-6 leading-8 text-gray-400">
                    "{item.review}"
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Left Fade */}

          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-32 bg-gradient-to-r from-black to-transparent" />

          {/* Right Fade */}

          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-32 bg-gradient-to-l from-black to-transparent" />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;