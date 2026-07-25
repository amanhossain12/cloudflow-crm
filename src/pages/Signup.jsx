import { useState } from "react";
import { Link } from "react-router-dom";
import {
    User,
    Mail,
    Lock,
    Eye,
    EyeOff,
} from "lucide-react";

function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    return (
      <section className="relative flex min-h-[700px] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black px-4 py-30">

            {/* Background Glow */}
            <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl"></div>
            <div className="absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl"></div>

            <div className="relative w-full max-w-lg rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-3xl shadow-[0_25px_80px_rgba(0,0,0,.6)]">

                {/* Logo */}
                <div className="mb-10 text-center">
                    <h1 className="text-5xl font-black">
                        <span className="text-white">Cloud</span>
                        <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                            Flow
                        </span>
                    </h1>

                    <p className="mt-4 text-gray-400">
                        Create your account and start managing your business smarter.
                    </p>
                </div>

                {/* Google Button */}
                <button
                    type="button"
                    className="mb-6 flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 py-4 text-white transition hover:bg-white/10"
                >
                    <img
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        alt="Google"
                        className="h-5 w-5"
                    />
                    Continue with Google
                </button>

                {/* Divider */}
                <div className="mb-6 flex items-center gap-4">
                    <div className="h-px flex-1 bg-white/10"></div>

                    <span className="text-sm text-gray-500">
                        OR
                    </span>

                    <div className="h-px flex-1 bg-white/10"></div>
                </div>

                <form className="space-y-5">

                    {/* Name */}
                    <div>
                        <label className="mb-2 block text-sm text-gray-300">
                            Full Name
                        </label>

                        <div className="flex items-center rounded-xl border border-white/10 bg-white/5 px-4 transition focus-within:border-blue-500">
                            <User className="text-gray-400" size={20} />

                            <input
                                type="text"
                                placeholder="John Doe"
                                className="w-full bg-transparent px-3 py-4 text-white placeholder:text-gray-500 outline-none"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label className="mb-2 block text-sm text-gray-300">
                            Email Address
                        </label>

                        <div className="flex items-center rounded-xl border border-white/10 bg-white/5 px-4 transition focus-within:border-blue-500">
                            <Mail className="text-gray-400" size={20} />

                            <input
                                type="email"
                                placeholder="john@example.com"
                                className="w-full bg-transparent px-3 py-4 text-white placeholder:text-gray-500 outline-none"
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div>
                        <label className="mb-2 block text-sm text-gray-300">
                            Password
                        </label>

                        <div className="flex items-center rounded-xl border border-white/10 bg-white/5 px-4 transition focus-within:border-blue-500">
                            <Lock className="text-gray-400" size={20} />

                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Create password"
                                className="w-full bg-transparent px-3 py-4 text-white placeholder:text-gray-500 outline-none"
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowPassword(!showPassword)
                                }
                            >
                                {showPassword ? (
                                    <EyeOff
                                        size={20}
                                        className="text-gray-400"
                                    />
                                ) : (
                                    <Eye
                                        size={20}
                                        className="text-gray-400"
                                    />
                                )}
                            </button>
                        </div>

                        <p className="mt-2 text-xs text-gray-500">
                            Minimum 8 characters required.
                        </p>
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="mb-2 block text-sm text-gray-300">
                            Confirm Password
                        </label>

                        <div className="flex items-center rounded-xl border border-white/10 bg-white/5 px-4 transition focus-within:border-blue-500">
                            <Lock className="text-gray-400" size={20} />

                            <input
                                type={showConfirm ? "text" : "password"}
                                placeholder="Confirm password"
                                className="w-full bg-transparent px-3 py-4 text-white placeholder:text-gray-500 outline-none"
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowConfirm(!showConfirm)
                                }
                            >
                                {showConfirm ? (
                                    <EyeOff
                                        size={20}
                                        className="text-gray-400"
                                    />
                                ) : (
                                    <Eye
                                        size={20}
                                        className="text-gray-400"
                                    />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Terms */}
                    <div className="flex items-start gap-3">
                        <input
                            type="checkbox"
                            className="mt-1 accent-blue-500"
                        />

                        <p className="text-sm text-gray-400">
                            I agree to the{" "}
                            <Link
                                to="/terms"
                                className="text-cyan-400 hover:text-cyan-300"
                            >
                                Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link
                                to="/privacy"
                                className="text-cyan-400 hover:text-cyan-300"
                            >
                                Privacy Policy
                            </Link>
                        </p>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 py-4 font-semibold text-white transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(59,130,246,.5)]"
                    >
                        Create Account
                    </button>
                </form>

                {/* Login */}
                <p className="mt-8 text-center text-gray-400">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="font-semibold text-cyan-400 hover:text-cyan-300"
                    >
                        Sign In
                    </Link>
                </p>
            </div>
        </section>
    );
}

export default Signup;