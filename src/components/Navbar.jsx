import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (title) => {
    setActive(title);
    setToggle(false);
  };

  return (
    <nav
      className={`${styles.paddingX} fixed top-0 w-full flex items-center py-5 z-30 transition-all duration-300 ease-in-out backdrop-blur-md bg-primary/30 ${
        scrolled ? "shadow-lg border-b border-white/10" : "border-b border-transparent"
      }`}
      role="navigation"
      aria-label="Primary"
    >
      <div className="max-w-7xl w-full mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => {
            setActive("");
            setToggle(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2"
          aria-label="Go to homepage"
        >
          <img src={logo} alt="Logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-lg font-bold cursor-pointer select-none">
            Abhishek Kumar{" "}
            <span className="hidden sm:inline">| Java Full Stack Development</span>
          </p>
        </Link>

        {/* Desktop menu */}
        <ul className="hidden sm:flex space-x-10">
          {navLinks.map(({ id, title }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setActive(title)}
                className={`text-base font-medium cursor-pointer ${
                  active === title ? "text-white" : "text-gray-300"
                } hover:text-white transition-colors duration-200`}
                aria-current={active === title ? "page" : undefined}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setToggle((prev) => !prev)}
          className="sm:hidden focus:outline-none"
          aria-label={toggle ? "Close menu" : "Open menu"}
          aria-expanded={toggle}
        >
          <img
            src={toggle ? close : menu}
            alt="menu toggle icon"
            className="w-7 h-7 object-contain"
          />
        </button>

        {/* Mobile menu with animation */}
        <div
          className={`absolute top-20 right-4 w-44 rounded-xl p-6 flex flex-col space-y-4 shadow-lg sm:hidden backdrop-blur-md bg-primary/40 border border-white/10 transform transition-all duration-300 ease-in-out ${
            toggle
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
          }`}
          role="menu"
          aria-label="Mobile Navigation"
        >
          {navLinks.map(({ id, title }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => handleNavClick(title)}
              className={`block text-base font-medium cursor-pointer ${
                active === title ? "text-white" : "text-gray-300"
              } hover:text-white transition-colors duration-200`}
              role="menuitem"
            >
              {title}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
