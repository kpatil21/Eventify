import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.jpg";

export default function Navbar() {
  const navLinkClass = ({ isActive }) =>
    `relative font-medium transition-all duration-300 ${
      isActive
        ? "text-[#D4AF37] after:absolute after:left-0 after:-bottom-2 after:w-full after:h-[2px] after:bg-[#D4AF37]"
        : "text-white hover:text-[#D4AF37]"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-neutral-800 shadow-lg">
      <nav className="relative max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Left - Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Kaksha"
            className="h-12 w-auto"
          />

          <div className="hidden sm:block leading-tight">
            <h1 className="text-2xl font-bold text-white">
              Eventify
            </h1>

            <p className="text-[10px] uppercase tracking-[3px] text-[#D4AF37]">
              Powered by Kaksha
            </p>
          </div>
        </NavLink>

        {/* Center Navigation */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-10">
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
        <div className="flex items-center gap-6">

          <NavLink to="/login" className={navLinkClass}>
            Login
          </NavLink>

          <NavLink
            to="/register"
            className="bg-[#D4AF37] hover:bg-[#c79b22] text-black px-6 py-2 rounded-full font-semibold transition-all duration-300"
          >
            Register
          </NavLink>

        </div>

      </nav>
    </header>
  );
}