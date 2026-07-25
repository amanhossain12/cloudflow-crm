import { motion } from "framer-motion";
import SEO from "../components/SEO";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Contact() {
  return (
    <>
      <SEO
        title="Contact"
        description="Contact CloudFlow CRM for sales, support, partnerships, or product inquiries."
        keywords="CloudFlow Contact, CRM Support, Contact CloudFlow, Business CRM"
        url="https://cloudflow-crm.vercel.app/contact"
      />

      <section className="relative overflow-hidden bg-black py-28">
        {/* Background Glow */}
        <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[170px]" />
        <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[170px]" />

        <div className="relative mx-auto max-w-7xl px-6">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400">
              CONTACT US
            </span>

            <h2 className="mt-8 text-4xl font-extrabold text-white md:text-6xl">
              Let's Build Something
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                {" "}
                Amazing Together
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
              Have a question or want to see CloudFlow in action? We'd love to
              hear from you.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="mt-20 grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                <h3 className="text-3xl font-bold text-white">
                  Contact Information
                </h3>

                <p className="mt-4 leading-8 text-gray-400">
                  Reach out to us anytime. Our team is always ready to help.
                </p>

                <div className="mt-10 space-y-8">
                  <div className="flex items-center gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/20">
                      <Mail className="text-blue-400" />
                    </div>

                    <div>
                      <p className="text-gray-400">Email</p>
                      <h4 className="text-lg text-white">
                        hello@cloudflow.com
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-center gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/20">
                      <Phone className="text-blue-400" />
                    </div>

                    <div>
                      <p className="text-gray-400">Phone</p>
                      <h4 className="text-lg text-white">
                        +1 (234) 567-890
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-center gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/20">
                      <MapPin className="text-blue-400" />
                    </div>

                    <div>
                      <p className="text-gray-400">Office</p>
                      <h4 className="text-lg text-white">
                        New York, United States
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex gap-4">
                  {[
                    FaFacebookF,
                    FaXTwitter,
                    FaLinkedinIn,
                    FaInstagram,
                  ].map((Icon, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      whileHover={{ y: -5, scale: 1.1 }}
                      className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-blue-400 transition hover:border-blue-500"
                    >
                      <Icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <form className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                <h3 className="text-3xl font-bold text-white">
                  Send a Message
                </h3>

                <div className="mt-8 space-y-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none placeholder:text-gray-500 focus:border-blue-500"
                  />

                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none placeholder:text-gray-500 focus:border-blue-500"
                  />

                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none placeholder:text-gray-500 focus:border-blue-500"
                  />

                  <textarea
                    rows={6}
                    placeholder="Your Message"
                    className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none placeholder:text-gray-500 focus:border-blue-500"
                  />

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 py-4 font-semibold text-white transition hover:scale-[1.02]"
                  >
                    Send Message
                    <Send size={20} />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;