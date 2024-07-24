import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const navLinks = [
  { title: "About", path: "about" },
  { title: "Projects", path: "projects" },
  { title: "Education", path: "education" },
  { title: "Contact", path: "contact" },
];

const socialLinks = [
  { title: "GitHub", path: "url", icon: <FaGithub className="text-3xl" /> },
  { title: "LinkedIn", path: "url", icon: <FaLinkedin className="text-3xl" /> },
  { title: "Instagram", path: "url", icon: <FaInstagram className="text-3xl" /> },
];

export default function Header() {
  const [headerOpen, setHeaderOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const toggleHeader = () => setHeaderOpen(!headerOpen);

  const handleSetActive = (to: string) => {
    setActiveLink(to);
  };

  const handleSetInactive = (to: string) => {
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
    <nav className="fixed top-0 left-0 right-0 z-10 bg-background flex items-center justify-between mx-auto px-8 py-4">
      <div className="hidden md:flex items-center space-x-4 text-white">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.path} className="hover:text-gray-400">
            {link.icon}
          </a>
        ))}
      </div>
      <div className="flex items-center space-x-8">
        <ul className="hidden md:flex space-x-4 text-white">
          {navLinks.map((link, index) => (
            <li key={index}>
              <ScrollLink
                to={link.path}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                className={`nav-link ${activeLink === link.path ? "nav-link-active" : ""} cursor-pointer`}
                onSetActive={handleSetActive}
                onSetInactive={handleSetInactive}
              >
                {link.title}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:hidden ml-4">
        <button
          onClick={toggleHeader}
          className="flex items-center px-3 py-2 border-white bg-[#121212] text-white hover:bg-opacity-80"
        >
          {headerOpen ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
        </button>
      </div>
      {headerOpen && (
        <div className="menu block md:hidden absolute top-16 left-0 right-0 bg-background px-4 py-2">
          <ul className="flex flex-col items-center space-y-4 text-white">
            {navLinks.map((link, index) => (
              <li key={index}>
                <ScrollLink
                  to={link.path}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  className={`nav-link ${activeLink === link.path ? "nav-link-active" : ""} cursor-pointer`}
                  onSetActive={handleSetActive}
                  onSetInactive={handleSetInactive}
                  onClick={toggleHeader}
                >
                  {link.title}
                </ScrollLink>
              </li>
            ))}
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.path} className="hover:text-gray-400">
                  {link.icon}
                </a>
              ))}
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}
