import { Link } from "react-router-dom";
import { Mail, Lock } from "lucide-react";

function Login() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-black px-4 pt-24 pb-10">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8 shadow-[0_20px_60px_rgba(0,0,0,.5)]">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-black">
            <span className="text-white">Cloud</span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Flow
            </span>
          </h1>

          <p className="mt-3 text-gray-400">
            Welcome back! Sign in to your account.
          </p>
        </div>

        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Email Address
            </label>

            <div className="flex items-center rounded-xl border border-white/10 bg-white/5 px-4">
              <Mail className="text-gray-400" size={20} />

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent px-3 py-4 text-white placeholder:text-gray-500 outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Password
            </label>

            <div className="flex items-center rounded-xl border border-white/10 bg-white/5 px-4">
              <Lock className="text-gray-400" size={20} />

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full bg-transparent px-3 py-4 text-white placeholder:text-gray-500 outline-none"
              />
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-gray-400">
              <input type="checkbox" className="accent-blue-500" />
              Remember me
            </label>

            <Link
              to="/forgot-password"
              className="text-sm text-cyan-400 hover:text-cyan-300"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 font-semibold text-white transition hover:scale-[1.02]"
          >
            Login
          </button>
        </form>

        {/* Signup Link */}
        <p className="mt-8 text-center text-gray-400">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-semibold text-cyan-400 hover:text-cyan-300"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Login;