import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Link } from "react-router-dom";


const navLinks = [
  { name: "Home", path: "/" },
  { name: "Properties", path: "/properties" },
  { name: "About", path: "/Aboutpage" },
];


export default function Navbar({ logoText = "YourBrand", phone = "+91 98765 43210" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // small helper to close menu on link click
  function handleNavClick(name) {
    setActive(name);
    setMenuOpen(false);
    // smooth-scroll to anchor if present
    const link = document.querySelector(`[href="#${name.toLowerCase()}"]`);
    if (link) link.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={() => handleNavClick("Home")}
            className="flex items-center gap-3 select-none"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            aria-label="Homepage"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-sky-400 flex items-center justify-center shadow-md">
              <motion.span
                className="font-semibold text-white uppercase text-sm"
                initial={{ rotate: -8 }}
                animate={{ rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
              >
                M
              </motion.span>
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-semibold leading-tight">{logoText}</div>
              <div className="text-xs text-slate-500">Real Estate • Modern UI</div>
            </div>
          </motion.a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path}>
                <motion.span
                  onClick={() => {
                    setActive(link.name);
                    setMenuOpen(false);
                  }}
                  className={`relative px-2 py-1 text-sm font-medium transition-colors ${active === link.name ? "text-indigo-600" : "text-slate-700"
                    }`}
                  whileHover={{ y: -3 }}
                >
                  {link.name}
                  {active === link.name && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 right-0 bottom-0 h-0.5 bg-indigo-600 rounded"
                      style={{ marginTop: 10 }}
                    />
                  )}
                </motion.span>
              </Link>
            ))}


            {/* CTA button */}
            <motion.a
              href="tel:9604795870"
              className="ml-2 inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold bg-gradient-to-r from-indigo-600 to-sky-500 text-white shadow-lg hover:scale-105 transform-gpu"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Phone className="w-4 h-4" />
              Contact
            </motion.a>

          </nav>

          {/* Mobile: Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen((s) => !s)}
              aria-label="Toggle menu"
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (animated) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.25 }}
            className="fixed inset-y-0 right-0 w-80 max-w-full bg-white shadow-lg z-50 md:hidden"
            role="dialog"
            aria-modal="true"
          >
            <div className="p-6 flex flex-col h-full">
              <div className="flex items-center justify-between">
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("Home");
                  }}
                  className="flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded-md bg-gradient-to-br from-indigo-500 to-sky-400 flex items-center justify-center text-white font-semibold">R</div>
                  <div>
                    <div className="font-semibold">{logoText}</div>
                    <div className="text-xs text-slate-500">Real Estate</div>
                  </div>
                </a>

                <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="p-2">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="mt-8 flex-1 overflow-y-auto">
                <ul className="flex flex-col gap-4">
  {navLinks.map((link) => (
    <li key={link.name}>
      <Link
        to={link.path}
        onClick={() => {
          setActive(link.name);
          setMenuOpen(false);
        }}
        className={`block text-lg font-medium p-2 rounded-md hover:bg-slate-50 transition-colors ${
          active === link.name ? "text-indigo-600" : "text-slate-800"
        }`}
      >
        {link.name}
      </Link>
    </li>
  ))}
</ul>

              </div>

              <div className="mt-6">
                <a
                  href="tel:9604789570"
                  onClick={() => setMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-semibold bg-gradient-to-r from-indigo-600 to-sky-500 text-white shadow"
                >
                  <Phone className="w-4 h-4" />
                  Call Us
                </a>


                <div className="mt-3 text-xs text-slate-500 text-center">Or send a message via contact form</div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  );
}
