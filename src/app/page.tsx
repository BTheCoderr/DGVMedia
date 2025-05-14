'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black">
        <Header />
        
        {/* Hero Section */}
        <Section className="pt-32 pb-16">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            >
              WHERE THE TRUTH AND THE JUICE
              <span className="block text-grape-400">GETS TOLD</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto mb-8"
            >
              Raw. Real. Unfiltered news and stories from the communities that mainstream media overlooks.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                href="/stories"
                className="inline-block bg-grape-600 hover:bg-grape-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Watch Our Latest Stories
              </Link>
            </motion.div>
          </div>
        </Section>

        {/* Mission Section */}
        <Section gradient>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                BRIDGING THE GAP BETWEEN THE STREETS AND THE SYSTEM
              </h2>
              <p className="text-gray-300 mb-6">
                Founded with a mission to make a difference, we cover local politics, public safety, community success, and cultural movements that matter.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-black/50 rounded-lg">
                  <h3 className="text-grape-400 font-semibold mb-2">Local Government</h3>
                  <p className="text-sm text-gray-400">Mayor's office, council, statehouse—no one is off limits.</p>
                </div>
                <div className="p-4 bg-black/50 rounded-lg">
                  <h3 className="text-grape-400 font-semibold mb-2">Culture & Community</h3>
                  <p className="text-sm text-gray-400">Music, art, fashion, and homegrown entrepreneurs.</p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden bg-gradient-to-br from-grape-900 to-grape-950">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-grape-400 text-lg font-semibold">Community Impact</span>
              </div>
            </div>
          </div>
        </Section>

        {/* Latest Stories Section */}
        <Section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Latest Stories</h2>
            <p className="text-gray-400">Stay informed with our latest coverage</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-b from-grape-900/50 to-black rounded-lg overflow-hidden"
              >
                <div className="h-48 bg-grape-800/20" />
                <div className="p-6">
                  <h3 className="text-white font-semibold mb-2">Story Title Here</h3>
                  <p className="text-gray-400 text-sm mb-4">Brief description of the story goes here...</p>
                  <Link href="/stories" className="text-grape-400 hover:text-grape-300 text-sm font-medium">
                    Read More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Call to Action */}
        <Section gradient className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Get Involved</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Want to collaborate, sponsor a segment, or share your story? Join us in making a difference.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-grape-600 hover:bg-grape-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Contact Us
          </Link>
        </Section>
      </main>
      <Footer />
    </>
  );
}
