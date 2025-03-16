"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full py-4 bg-gradient-to-br from-blue-100 to-white shadow-sm fixed top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <img src="Logo (2).png" alt="Logo" className="h-12 w-auto" />
          </Link>
        </div>

        {/* Hamburger Menu Button - Visible on Mobile */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {/* Simple hamburger icon */}
          <svg
            className="h-6 w-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation - Hidden on Mobile */}
        <nav className="hidden md:block bg-[#4052B5] rounded-full px-8 py-3">
          <ul className="flex items-center gap-8">
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Our Services" },
              { href: "/coverage", label: "Coverage Area" },
              { href: "/faq", label: "FAQ" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-white/90 hover:text-white text-sm font-medium relative py-1 transition-colors
                    ${
                      pathname === href
                        ? "after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-white"
                        : ""
                    }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Avatar */}
        <div className="hidden md:block w-10 h-10 rounded-full overflow-hidden">
          <Image
            src="/avatar.jpg"
            alt="User Avatar"
            width={40}
            height={40}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#4052B5] rounded-lg mt-2 mx-4 p-4 shadow-lg">
          <ul className="flex flex-col gap-4">
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Our Services" },
              { href: "/coverage", label: "Coverage Area" },
              { href: "/faq", label: "FAQ" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)} // close menu on click
                  className={`block text-white/90 hover:text-white text-sm font-medium relative py-1 transition-colors
                    ${
                      pathname === href
                        ? "after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-white"
                        : ""
                    }`}
                >
                  {label}
                </Link>
              </li>
            ))}
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src="/avatar.jpg"
                alt="User Avatar"
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
            </div>
          </ul>
        </div>
      )}
    </header>
  );
}
