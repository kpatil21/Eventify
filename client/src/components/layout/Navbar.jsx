import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../assets/logo/logo.jpg";

export default function Navbar({ openLogin, openRegister })  {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinkClass = ({ isActive }) =>
    `relative font-medium transition-all duration-300 ${
      isActive
        ? "text-[#D4AF37] after:absolute after:left-0 after:-bottom-2 after:w-full after:h-[2px] after:bg-[#D4AF37]"
        : "text-white hover:text-[#D4AF37]"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 border-b border-neutral-800 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md shadow-xl"
          : "bg-black shadow-lg"
      }`}
    >
      <nav
        className={`relative max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        {/* Left - Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Eventify"
            className={`w-auto transition-all duration-300 ${
              scrolled ? "h-10" : "h-12"
            }`}
          />

          <div className="hidden sm:block leading-tight">
            <h1
              className={`font-bold text-white transition-all duration-300 ${
                scrolled ? "text-xl" : "text-2xl"
              }`}
            >
              Eventify
            </h1>

            <p className="text-[10px] uppercase tracking-[3px] text-[#D4AF37]">
              Powered by Kaksha
            </p>
          </div>
        </NavLink>

        {/* Center Navigation */}
        <div
          className={`absolute left-1/2 -translate-x-1/2 hidden md:flex items-center transition-all duration-300 ${
            scrolled ? "gap-8 text-[15px]" : "gap-10 text-base"
          }`}
        >
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/events" className={navLinkClass}>
            Events
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </div>

        {/* Right */}
        <div className="flex items-center gap-5">
         <button
             onClick={() => {
    console.log("Login clicked");
    openLogin();
  }}
            className="relative font-medium text-white hover:text-[#D4AF37] transition-all duration-300"
          >Login
         </button>

         <button
            onClick={openRegister}
            className={`bg-[#D4AF37] hover:bg-[#c79b22] text-black rounded-full font-semibold transition-all duration-300 ${
            scrolled ? "px-5 py-2 text-sm" : "px-6 py-2.5"
            }`}>Register
         </button>
        </div>
      </nav>
    </header>
  );
}