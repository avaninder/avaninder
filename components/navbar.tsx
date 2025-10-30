"use client";

import Image from "next/image";
import Link from "next/link";
import logoImg from "../public/avaninder_logo_white.png";
import { useState } from "react";
import { Menu, X, Github, Linkedin } from "lucide-react";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/projects", label: "PROJECTS" },
    { href: "/photography", label: "PHOTOGRAPHY" },
    { href: "/about", label: "ABOUT ME" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 relative">
      <Link href="/" className="mr-6 w-10 h-10" prefetch={false}>
        <Image src={logoImg} alt="logo" />
      </Link>

      <nav className="ml-auto hidden lg:flex gap-6 items-center">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group inline-flex h-9 w-max font-bold items-center justify-center rounded-[7px] bg-transparent px-4 py-2 text-md transition-colors hover:bg-slate-900 focus:bg-gray-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            prefetch={false}
          >
            {link.label}
          </Link>
        ))}
        
        <div className="flex items-center gap-3 ml-2">
          <Link
            href="https://github.com/avaninder"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/avaninder-bhaghayath-04936a251/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </Link>
        </div>
      </nav>

      <button
        className="ml-auto lg:hidden text-white z-50"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {mobileMenuOpen && (
        <div className="fixed inset-0 top-20 bg-black/95 z-40 lg:hidden">
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white text-2xl font-bold hover:text-gray-300 transition-colors"
                prefetch={false}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            <div className="flex items-center gap-6 mt-4">
              <Link
                href="https://github.com/avaninder"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
                aria-label="GitHub"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Github size={32} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/avaninder-bhaghayath-04936a251/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
                aria-label="LinkedIn"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Linkedin size={32} />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
