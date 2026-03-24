"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="w-full px-6 lg:px-12">
        <div className="flex justify-between items-center h-25">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logo.webp"
                alt="Ornexa Logo"
                width={160}
                height={50}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium"
            >
              About Us
            </Link>
            <Link
              href="/#contact"
              className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium"
            >
              Contact
            </Link>
            <Link
              href="/#terms"
              className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/partner"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
            >
              Become Partner
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-3">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 py-2 text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="/#about"
                className="text-gray-700 hover:text-blue-600 py-2 text-sm font-medium"
              >
                About Us
              </Link>
              <Link
                href="/#contact"
                className="text-gray-700 hover:text-blue-600 py-2 text-sm font-medium"
              >
                Contact
              </Link>
              <Link
                href="/#terms"
                className="text-gray-700 hover:text-blue-600 py-2 text-sm font-medium"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/partner"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-medium text-center transition-all duration-300"
              >
                Become Partner
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
