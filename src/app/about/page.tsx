'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Section from '@/components/Section';
import NewsletterSubscribe from '@/components/NewsletterSubscribe';
import Image from 'next/image';
import { shows, Show } from '@/data/shows';

const team = [
  {
    name: "Leadership",
    members: [
      {
        role: "Founder & CEO",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1"
      },
      {
        role: "Head of Content",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1"
      }
    ]
  },
  {
    name: "Content Team",
    members: [
      {
        role: "Senior Reporter",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1"
      },
      {
        role: "Community Manager",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1"
      }
    ]
  }
];

const values = [
  {
    title: "Truth",
    description: "We believe in delivering unfiltered, authentic stories that matter to our community."
  },
  {
    title: "Community",
    description: "Building bridges between different parts of our society through honest journalism."
  },
  {
    title: "Impact",
    description: "Creating meaningful change through investigative reporting and community engagement."
  }
];

export default function About() {
  const [selectedShow, setSelectedShow] = useState<Show | null>(null);

  return (
    <main className="min-h-screen bg-black pt-24">
      {/* Hero Section */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-6">Our Mission</h1>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-grape-400 mb-6">DGV Mission Statement</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Da Grape Vine exists to put that power back into the hands of the people. We amplify inner-city and minority voices, uncover the stories mainstream media ignores, provide these communities with relevant information to improve their quality of life, and create a platform where these communities can tell their own truths, on their own terms.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mt-4">
              What makes us stand out is we're not trying to whitewash reality. We're actually giving the whole story—the good, the bad and the ugly that comes out of these communities.
            </p>
          </div>
        </motion.div>
      </Section>

      {/* Views From Da Vine Section */}
      <Section gradient>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Views From Da Vine</h2>
          <p className="text-gray-400">Our signature shows that give voice to the community</p>
        </div>

        {/* Shows Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {shows.map((show, index) => (
            <motion.div
              key={show.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="cursor-pointer"
              onClick={() => setSelectedShow(show)}
            >
              <div className="p-6 rounded-lg bg-black/50 border border-grape-800/30 hover:border-grape-600/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-grape-400 mb-2">{show.title}</h3>
                <p className="text-sm text-gray-400 italic mb-3">{show.tagline}</p>
                <div className="text-xs text-gray-500">
                  Click to learn more
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Selected Show Details */}
        {selectedShow && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-black/70 border border-grape-800/50 rounded-lg p-8 mb-8"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-grape-400 mb-2">{selectedShow.title}</h3>
                <p className="text-lg text-gray-300 italic">{selectedShow.tagline}</p>
              </div>
              <button
                onClick={() => setSelectedShow(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="prose prose-invert max-w-none">
              {selectedShow.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-300 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </Section>

      {/* Values Section */}
      <Section>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-lg bg-black/50 border border-grape-800/30"
            >
              <h3 className="text-2xl font-bold text-grape-400 mb-4">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Team Section */}
      <Section gradient>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Our Team</h2>
          <p className="text-gray-400">Meet the faces behind Da GrapeVine</p>
        </div>

        {team.map((department) => (
          <div key={department.name} className="mb-12">
            <h3 className="text-xl font-semibold text-grape-400 mb-6">{department.name}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {department.members.map((member, index) => (
                <motion.div
                  key={member.role}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="relative"
                >
                  <div className="aspect-square relative rounded-lg overflow-hidden mb-4">
                    <Image
                      src={member.image}
                      alt={member.role}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-white font-medium">{member.role}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </Section>

      {/* Newsletter Section */}
      <Section className="rounded-2xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Join Our Movement</h2>
          <p className="text-gray-400">Subscribe to our newsletter and be part of the change.</p>
        </div>
        <NewsletterSubscribe />
      </Section>
    </main>
  );
} 