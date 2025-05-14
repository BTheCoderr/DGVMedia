'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-64 bg-black border-l border-grape-800/30 z-50"
          >
            <div className="p-4">
              <button
                onClick={onClose}
                className="mb-8 text-gray-400 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/stories"
                  className="text-gray-300 hover:text-grape-400 transition-colors py-2 px-4 rounded-lg hover:bg-grape-950/50"
                  onClick={onClose}
                >
                  Latest Stories
                </Link>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-grape-400 transition-colors py-2 px-4 rounded-lg hover:bg-grape-950/50"
                  onClick={onClose}
                >
                  Our Mission
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-grape-400 transition-colors py-2 px-4 rounded-lg hover:bg-grape-950/50"
                  onClick={onClose}
                >
                  Get Involved
                </Link>
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 