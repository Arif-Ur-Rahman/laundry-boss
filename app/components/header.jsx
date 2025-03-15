"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full py-4 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
        <Link href="/">
        <img src="logo.png" className="h-12 w-auto" />
      </Link>
        </div>

        {/* Navigation */}
        <nav className="bg-[#4052B5] rounded-full px-8 py-3">
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
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <Image
            src="/avatar.jpg"
            alt="User Avatar"
            width={40}
            height={40}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}
