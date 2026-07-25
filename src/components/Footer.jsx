import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const links = {
  Product: [
    "Features",
    "Integrations",
    "Analytics",
    "Security",
  ],
  Company: [
    "About",
    "Careers",
    "Blog",
    "Contact",
  ],
  Resources: [
    "Documentation",
    "Help Center",
    "Community",
    "Privacy Policy",
  ],
};

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black">
      {/* Glow */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[170px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[170px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.h2
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-4xl font-bold text-transparent"
            >
              CloudFlow
            </motion.h2>

            <p className="mt-6 max-w-md leading-8 text-gray-400">
              CloudFlow helps modern businesses automate workflows, manage
              customers, and scale faster using AI-powered CRM solutions.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="text-blue-400" size={18} />
                hello@cloudflow.com
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="text-blue-400" size={18} />
                +1 (234) 567-890
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="text-blue-400" size={18} />
                New York, United States
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              {[FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram].map(
                (Icon, index) => (
                  <motion.a
                    key={index}
                    whileHover={{
                      y: -5,
                      scale: 1.1,
                    }}
                    href="#"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-blue-400 hover:border-blue-500"
                  >
                    <Icon size={18} />
                  </motion.a>
                )
              )}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h3 className="mb-6 text-xl font-semibold text-white">
                {title}
              </h3>

              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="flex items-center gap-2 text-gray-400 transition hover:text-blue-400"
                    >
                      {item}
                      <ArrowUpRight size={14} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-gray-500">
            © {new Date().getFullYear()} CloudFlow. All rights reserved.
          </p>

          <p className="text-center text-sm text-gray-500">
            Designed & Developed with ❤️ using React + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;