import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink, scroller } from "react-scroll";

const navLinks = [
  { title: "Home", path: "home" },
  { title: "Projects", path: "projects" },
  { title: "About", path: "about" },
  { title: "Contact", path: "contact" },
];

export default function Header() {
  const [headerOpen, setHeaderOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const toggleHeader = () => setHeaderOpen(!headerOpen);

  const handleSetActive = (to : string) => {
    setActiveLink(to);
  };

  const handleSetInactive = (to : string) => {
    setActiveLink("");
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 80;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY <= sectionTop + sectionHeight) {
          const id = section.getAttribute("id");
          if (id) {
            setActiveLink(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-background flex items-center justify-between mx-auto px-4 py-2">
      <div className="flex items-center">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="text-2xl md:text-5xl text-white font-semibold cursor-pointer"
          onClick={() => handleSetActive("home")}
          activeClass="nav-link-active"
        >
          <Image src="/images/logo_v4.png" alt="logo" width={50} height={50} />
        </ScrollLink>
      </div>
      <div className="md:hidden">
        <button
          onClick={toggleHeader}
          className="flex items-center px-3 py-2 rounded border-white bg-[#121212] text-white hover:bg-opacity-80"
        >
          {headerOpen ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
        </button>
      </div>
      <div className={`menu ${headerOpen ? "block" : "hidden"} md:flex md:items-center md:space-x-8`} id="navbar">
        <ul className="flex flex-col md:flex-row md:space-x-8 mt-0 text-white">
          {navLinks.map((link, index) => (
            <li key={index}>
              <ScrollLink
                to={link.path}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                className={`nav-link ${activeLink === link.path ? "nav-link-active" : ""}`}
                onSetActive={handleSetActive}
                onSetInactive={handleSetInactive}
              >
                {link.title}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
