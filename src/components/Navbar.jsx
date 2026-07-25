import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `transition ${
      isActive
        ? "text-blue-400 font-semibold"
        : "text-gray-300 hover:text-white"
    }`;

  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 shadow-[0_8px_32px_rgba(0,0,0,.35)] backdrop-blur-2xl">
            {/* Logo */}
            <NavLink
              to="/"
              className="text-2xl font-black tracking-wide sm:text-3xl"
            >
              <span className="text-white">Cloud</span>
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Flow
              </span>
            </NavLink>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-10 md:flex">
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>

              <NavLink to="/product" className={navLinkClass}>
                Product
              </NavLink>

              <NavLink to="/pricing" className={navLinkClass}>
                Pricing
              </NavLink>

              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>
            </div>

            {/* Desktop Button */}
            <NavLink
              to="/signup"
              className="hidden rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white transition hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,.5)] md:block"
            >
              Get Started
            </NavLink>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(true)}
              className="text-white md:hidden"
            >
              <Menu size={30} />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl transition-all duration-300 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-6">
          <button
            onClick={closeMenu}
            className="text-white"
          >
            <X size={34} />
          </button>
        </div>

        {/* Mobile Links */}
        <div className="mt-20 flex flex-col items-center justify-center gap-10 text-2xl font-semibold">
          <NavLink
            to="/"
            onClick={closeMenu}
            className={navLinkClass}
          >
            Home
          </NavLink>

          <NavLink
            to="/product"
            onClick={closeMenu}
            className={navLinkClass}
          >
            Product
          </NavLink>

          <NavLink
            to="/pricing"
            onClick={closeMenu}
            className={navLinkClass}
          >
            Pricing
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={navLinkClass}
          >
            Contact
          </NavLink>

          {/* Mobile Get Started */}
          <NavLink
            to="/signup"
            onClick={closeMenu}
            className="mt-8 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-lg font-semibold text-white transition hover:scale-105"
          >
            Get Started
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;