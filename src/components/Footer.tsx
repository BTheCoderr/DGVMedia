'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const socialLinks = [
    { name: 'Instagram', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'YouTube', href: '#' },
    { name: 'Facebook', href: '#' },
  ];

  const navLinks = [
    { name: 'Latest Stories', href: '/stories' },
    { name: 'Our Mission', href: '/about' },
    { name: 'Get Involved', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
  ];

  return (
    <footer className="bg-black border-t border-grape-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Mission Statement */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold text-logo-gray">
                Da <span className="text-grape-400">Grape</span>Vine
              </span>
            </Link>
            <div className="mb-4">
              <h4 className="text-grape-400 font-semibold mb-2">Our Mission</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Da Grape Vine exists to put that power back into the hands of the people. We amplify inner-city and minority voices, uncover the stories mainstream media ignores, and create a platform where these communities can tell their own truths, on their own terms.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-grape-400 text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href={link.href}
                    className="text-gray-400 hover:text-grape-400 text-sm transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-grape-800/30">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Da GrapeVine. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 