// src/app/components/Navbar.tsx
"use client";
import { useState } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="fixed w-full bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/">BrandName</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          <li>
            <Link href="/" className="hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-500">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-blue-500">
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-500">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden" onClick={toggleNav}>
          {!navOpen ? (
            <AiOutlineMenu className="text-3xl text-gray-700" />
          ) : (
            <AiOutlineClose className="text-3xl text-gray-700" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden flex flex-col items-center bg-white py-6 shadow-md transition-all duration-300 ease-in-out ${
          navOpen ? 'block' : 'hidden'
        }`}
      >
        <ul className="space-y-6 text-lg font-medium text-gray-700">
          <li>
            <Link href="/" onClick={() => setNavOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={() => setNavOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="/services" onClick={() => setNavOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={() => setNavOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

  
