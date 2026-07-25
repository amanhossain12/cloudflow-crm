import { motion } from "framer-motion";
import {
  FaGithub,
  FaGoogle,
  FaSlack,
  FaStripe,
  FaFigma,
} from "react-icons/fa";
import { SiNotion } from "react-icons/si";

const integrations = [
  {
    icon: FaGithub,
    name: "GitHub",
    desc: "Sync repositories & deployments",
  },
  {
    icon: FaGoogle,
    name: "Google Workspace",
    desc: "Connect Gmail & Calendar",
  },
  {
    icon: FaSlack,
    name: "Slack",
    desc: "Team collaboration",
  },
  {
    icon: FaStripe,
    name: "Stripe",
    desc: "Secure online payments",
  },
  {
    icon: SiNotion,
    name: "Notion",
    desc: "Knowledge management",
  },
  {
    icon: FaFigma,
    name: "Figma",
    desc: "Design collaboration",
  },
];

function Integrations() {
  return (
    <section className="relative overflow-hidden bg-black py-28">
      {/* Glow */}
      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-blue-600/10 blur-[170px]" />
      <div className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[170px]" />

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
            INTEGRATIONS
          </span>

          <h2 className="mt-8 text-4xl font-extrabold text-white md:text-6xl">
            Connect With Your
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {" "}
              Favorite Tools
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Integrate CloudFlow with the platforms your team already uses and
            automate your workflow effortlessly.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {integrations.map((item, index) => {
            const Icon = item.icon;

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
                  y: -8,
                  scale: 1.03,
                }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all hover:border-blue-500/40"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-400/20">
                  <Icon
                    size={30}
                    className="text-blue-400 transition group-hover:scale-110"
                  />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {item.name}
                </h3>

                <p className="mt-4 leading-8 text-gray-400">
                  {item.desc}
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

export default Integrations;