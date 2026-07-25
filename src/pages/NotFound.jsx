import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[180px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[180px]" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-2xl rounded-[32px] border border-white/10 bg-white/5 p-10 text-center backdrop-blur-2xl"
      >
        <h1 className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-8xl font-extrabold text-transparent md:text-9xl">
          404
        </h1>

        <h2 className="mt-6 text-4xl font-bold text-white">
          Page Not Found
        </h2>

        <p className="mx-auto mt-6 max-w-xl leading-8 text-gray-400">
          The page you're looking for doesn't exist or may have been moved.
          Please return to the homepage and continue exploring CloudFlow.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-8 py-4 font-semibold text-white"
          >
            <Home size={18} />
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition hover:border-blue-500"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>
      </motion.div>
    </section>
  );
}

export default NotFound;