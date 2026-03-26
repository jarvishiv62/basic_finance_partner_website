"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <>
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="w-full px-6 lg:px-12">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3">
                <Image
                  src="/logo.png"
                  alt="Upay Bharat Logo"
                  width={160}
                  height={50}
                  className="h-12 w-auto max-w-[150px]"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 transition-colors text-xs sm:text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 transition-colors text-xs sm:text-sm font-medium"
              >
                About Us
              </Link>
              <Link
                href="/privacy"
                className="text-gray-700 hover:text-blue-600 transition-colors text-xs sm:text-sm font-medium"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-700 hover:text-blue-600 transition-colors text-xs sm:text-sm font-medium"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/partner"
                className="bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300"
              >
                Become Partner
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-gray-700 hover:text-blue-600 transition-colors p-1"
            >
              <Menu size={20} />
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div
              className="lg:hidden py-3 border-t border-gray-100 relative z-50"
              onClick={() => setIsOpen(false)}
            >
              <nav
                className="flex flex-col space-y-2"
                onClick={(e) => e.stopPropagation()}
              >
                <Link
                  href="/"
                  className="text-gray-700 hover:text-blue-600 py-1.5 text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-blue-600 py-1.5 text-sm font-medium"
                >
                  About Us
                </Link>

                <Link
                  href="/terms"
                  className="text-gray-700 hover:text-blue-600 py-1.5 text-sm font-medium"
                >
                  Terms & Conditions
                </Link>
                <Link
                  href="/privacy"
                  className="text-gray-700 hover:text-blue-600 py-1.5 text-sm font-medium"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/partner"
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-medium text-center transition-all duration-300"
                >
                  Become Partner
                </Link>
                <Link
                  href="/download"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium text-center transition-all duration-300"
                >
                  Download Now
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
