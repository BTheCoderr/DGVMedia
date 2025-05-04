"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="bg-white shadow-md z-50 w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="block h-12 w-auto">
                <img 
                  src="/favicon.svg" 
                  alt="Da Grape Vine" 
                  className="h-10 w-10"
                />
              </Link>
              <Link href="/" className="ml-2 text-xl font-bold text-gray-900">
                <span className="text-[#9370DB]">Da GRAPE</span>
                <span className="text-[#AAAAAA]">VINE</span>
              </Link>
            </div>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-800 hover:text-[#9370DB] px-3 py-2 text-sm font-medium transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-gray-800 hover:text-[#9370DB] px-3 py-2 text-sm font-medium transition-colors">
              About
            </Link>
            <Link href="#coverage" className="text-gray-800 hover:text-[#9370DB] px-3 py-2 text-sm font-medium transition-colors">
              Coverage
            </Link>
            <Link href="#signup" className="text-gray-800 hover:text-[#9370DB] px-3 py-2 text-sm font-medium transition-colors">
              Subscribe
            </Link>
            <Link href="#contact" className="text-gray-800 hover:text-[#9370DB] px-3 py-2 text-sm font-medium transition-colors">
              Contact
            </Link>
            <Link 
              href="mailto:info@dgvmedia.com" 
              className="bg-[#9370DB] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#8461c7] transition-colors"
            >
              Connect
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-[#9370DB] focus:outline-none"
              aria-expanded={isMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
          <Link href="/" className="block px-3 py-2 rounded-md text-gray-800 hover:text-[#9370DB] hover:bg-purple-50 font-medium transition-colors">
            Home
          </Link>
          <Link href="#about" className="block px-3 py-2 rounded-md text-gray-800 hover:text-[#9370DB] hover:bg-purple-50 font-medium transition-colors">
            About
          </Link>
          <Link href="#coverage" className="block px-3 py-2 rounded-md text-gray-800 hover:text-[#9370DB] hover:bg-purple-50 font-medium transition-colors">
            Coverage
          </Link>
          <Link href="#signup" className="block px-3 py-2 rounded-md text-gray-800 hover:text-[#9370DB] hover:bg-purple-50 font-medium transition-colors">
            Subscribe
          </Link>
          <Link href="#contact" className="block px-3 py-2 rounded-md text-gray-800 hover:text-[#9370DB] hover:bg-purple-50 font-medium transition-colors">
            Contact
          </Link>
          <Link 
            href="mailto:info@dgvmedia.com" 
            className="block px-3 py-2 rounded-md bg-[#9370DB] text-white font-medium hover:bg-[#8461c7] transition-colors mt-4"
          >
            Connect
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 