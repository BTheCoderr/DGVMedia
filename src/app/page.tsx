'use client';

import Section from '@/components/Section';
import Link from 'next/link';
import Image from 'next/image';
import { stories } from '@/data/stories';
import NewsletterForm from '@/components/NewsletterForm';
import VideoCarousel from '@/components/VideoCarousel';
import { useState } from 'react';

const testimonials = [
  {
    name: "Marcus Rivera",
    role: "Local Artist",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    quote: "Da Grapevine gives voice to stories that matter. Their coverage of local arts and culture has helped bridge gaps in our community.",
    rating: 5
  },
  {
    name: "Lisa Chen",
    role: "Community Organizer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    quote: "Finally, a platform that tells our stories the way they should be told. Da Grapevine's coverage is raw, real, and relevant.",
    rating: 5
  },
  {
    name: "Sarah Martinez",
    role: "Youth Leader",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    quote: "The newsletter keeps me updated on what's happening in our community. It's become my go-to source for local news.",
    rating: 5
  }
];

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <Section className="pt-32 pb-16">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            WHERE <span className="text-grape-400">THE TRUTH</span> AND <span className="text-grape-400">THE JUICE</span>
            <span className="block text-white">GETS TOLD</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            The real, the raw, the unfiltered news and stories mainstream media ignores & hides.
          </p>
          <div>
            <Link
              href="/stories"
              className="inline-block bg-grape-600 hover:bg-grape-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Watch Our Latest Exclusive
            </Link>
          </div>
        </div>
      </Section>

      {/* Video Carousel Section */}
      <Section className="py-16">
        <VideoCarousel />
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
          {stories.slice(0, 3).map((story) => (
            <div
              key={story.id}
              className="bg-gradient-to-b from-grape-900/50 to-black rounded-lg overflow-hidden hover:transform hover:-translate-y-1 transition-transform"
            >
              <div className="relative h-48">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-grape-400 text-sm">{story.category}</span>
                  <span className="text-gray-500 text-sm">{story.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{story.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{story.excerpt}</p>
                <Link
                  href={`/stories/${story.slug}`}
                  className="text-grape-400 hover:text-grape-300 text-sm font-medium"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Newsletter Section */}
      <Section className="py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay In The Loop</h2>
          <p className="text-gray-400 mb-8">
            Get the latest stories and updates delivered straight to your inbox.
          </p>
          <NewsletterForm />
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section className="py-16 bg-gradient-to-r from-grape-900/20 to-grape-800/20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">What Our Community Says</h2>
          <p className="text-gray-400">Real voices from real people</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/50 rounded-2xl p-8">
            <div className="text-center">
              <div className="relative w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-grape-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-lg text-gray-300 mb-6 italic">
                "{testimonials[activeTestimonial].quote}"
              </blockquote>
              <div className="text-white font-semibold">{testimonials[activeTestimonial].name}</div>
              <div className="text-grape-400 text-sm">{testimonials[activeTestimonial].role}</div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeTestimonial ? 'bg-grape-400' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
} 