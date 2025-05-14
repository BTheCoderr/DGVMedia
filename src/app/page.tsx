'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { stories } from '@/data/stories';
import NewsletterForm from '@/components/NewsletterForm';
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

        {/* Featured Story */}
        <Section className="py-16">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src={stories[0].image}
                alt={stories[0].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-3 py-1 bg-grape-600 text-white text-sm rounded-full mb-3">
                  {stories[0].category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">{stories[0].title}</h3>
                <p className="text-gray-200 line-clamp-2">{stories[0].excerpt}</p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Featured Story</h2>
                <p className="text-gray-400">{stories[0].content.split('\n\n')[0]}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={stories[0].author.image}
                    alt={stories[0].author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-white font-medium">{stories[0].author.name}</div>
                  <div className="text-gray-400 text-sm">{stories[0].author.role}</div>
                </div>
              </div>
              <Link
                href={`/stories/${stories[0].slug}`}
                className="inline-flex items-center gap-2 text-grape-400 hover:text-grape-300 font-medium"
              >
                Read Full Story
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </motion.div>
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
              <motion.div
                key={story.id}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-b from-grape-900/50 to-black rounded-lg overflow-hidden"
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
                  <h3 className="text-white font-semibold mb-2">{story.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{story.excerpt}</p>
                  <Link 
                    href={`/stories/${story.slug}`} 
                    className="text-grape-400 hover:text-grape-300 text-sm font-medium inline-flex items-center"
                  >
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Statistics Section */}
        <Section gradient className="py-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-grape-400 mb-2">50+</div>
              <div className="text-gray-400">Stories Published</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-grape-400 mb-2">10K+</div>
              <div className="text-gray-400">Monthly Readers</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-grape-400 mb-2">4</div>
              <div className="text-gray-400">Categories</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-grape-400 mb-2">24/7</div>
              <div className="text-gray-400">Coverage</div>
            </motion.div>
          </div>
        </Section>

        {/* Featured In Section */}
        <Section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Featured In</h2>
            <p className="text-gray-400">Trusted by leading media outlets and organizations</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="text-2xl font-bold text-white">Providence Journal</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-2xl font-bold text-white">RI NPR</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-2xl font-bold text-white">Boston Globe</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-2xl font-bold text-white">The Bay</div>
            </motion.div>
          </div>
        </Section>

        {/* Benefits Section */}
        <Section gradient className="py-24 rounded-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Why Subscribe?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Join our community and get exclusive benefits delivered straight to your inbox
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-black/30 p-6 rounded-lg"
            >
              <div className="w-12 h-12 rounded-full bg-grape-600/20 flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Exclusive Stories</h3>
              <p className="text-gray-400">
                Get early access to our most impactful stories before they're published
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-black/30 p-6 rounded-lg"
            >
              <div className="w-12 h-12 rounded-full bg-grape-600/20 flex items-center justify-center mb-4">
                <span className="text-2xl">🎉</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Community Events</h3>
              <p className="text-gray-400">
                First invites to our community events and meetups
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-black/30 p-6 rounded-lg"
            >
              <div className="w-12 h-12 rounded-full bg-grape-600/20 flex items-center justify-center mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Behind the Stories</h3>
              <p className="text-gray-400">
                Get insights into our reporting process and community impact
              </p>
            </motion.div>
          </div>
          <div className="text-center">
            <NewsletterForm />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mt-6 text-sm text-gray-400"
            >
              No spam, unsubscribe at any time. Your email is safe with us.
            </motion.p>
          </div>
        </Section>

        {/* Categories Section */}
        <Section className="py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">What We Cover</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From community stories to political analysis, we bring you comprehensive coverage across multiple categories.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Community', 'Politics', 'Culture', 'Education'].map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-b from-grape-900/50 to-black p-6 rounded-lg text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-grape-600/20 flex items-center justify-center">
                  <span className="text-2xl text-grape-400">
                    {category === 'Community' && '👥'}
                    {category === 'Politics' && '⚖️'}
                    {category === 'Culture' && '🎭'}
                    {category === 'Education' && '📚'}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{category}</h3>
                <p className="text-gray-400 text-sm">
                  {category === 'Community' && 'Stories that matter from our neighborhoods'}
                  {category === 'Politics' && 'Local politics and policy analysis'}
                  {category === 'Culture' && 'Art, music, and cultural movements'}
                  {category === 'Education' && 'Schools, learning, and youth initiatives'}
                </p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Community Section */}
        <Section gradient className="py-24 rounded-3xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Join Our Community</h2>
              <p className="text-gray-300 mb-8">
                Be part of a growing movement of truth-seekers and storytellers. Share your stories, engage with others, and help us bridge the gap between streets and system.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-grape-600/20 flex items-center justify-center">
                    <span className="text-2xl">✍️</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Share Your Story</h3>
                    <p className="text-gray-400 text-sm">Submit your stories and perspectives</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-grape-600/20 flex items-center justify-center">
                    <span className="text-2xl">💬</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Join Discussions</h3>
                    <p className="text-gray-400 text-sm">Engage with our community</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-grape-600/20 flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Stay Connected</h3>
                    <p className="text-gray-400 text-sm">Follow us on social media</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-[500px] rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846"
                alt="Community"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-grape-600 hover:bg-grape-700 text-white px-8 py-3 rounded-full font-semibold transition-colors"
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* Call to Action */}
        <Section className="py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">What Our Community Says</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Join hundreds of community members who trust Da Grapevine for authentic, unfiltered stories.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-b from-grape-900/10 to-black p-6 rounded-lg cursor-pointer"
                onClick={() => setActiveTestimonial(index)}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-white font-medium">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300">{testimonial.quote}</p>
                {index === activeTestimonial && (
                  <motion.div
                    layoutId="highlight"
                    className="absolute inset-0 border-2 border-grape-400 rounded-lg"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30
                    }}
                  />
                )}
              </motion.div>
            ))}
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-r from-grape-900/50 via-grape-800/30 to-grape-900/50 p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Join Our Newsletter</h3>
              <p className="text-gray-300 mb-6">
                Get the latest stories and updates delivered straight to your inbox. No fluff, just real stories that matter.
              </p>
              <NewsletterForm />
              <div className="mt-6 text-sm text-gray-400">
                Join {Math.floor(Math.random() * 50) + 450}+ subscribers who trust Da Grapevine
              </div>
            </div>
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
