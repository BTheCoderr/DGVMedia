'use client';

import { motion } from 'framer-motion';
import Section from '@/components/Section';
import NewsletterSubscribe from '@/components/NewsletterSubscribe';
import Link from 'next/link';

const stories = [
  {
    id: 1,
    title: "The Voice of the Streets",
    category: "Community",
    date: "March 15, 2024",
    excerpt: "Exploring the untold stories of local artists and their impact on community culture.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3"
  },
  {
    id: 2,
    title: "City Council Uncovered",
    category: "Politics",
    date: "March 14, 2024",
    excerpt: "An inside look at the latest city council decisions affecting our community.",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?ixlib=rb-4.0.3"
  },
  {
    id: 3,
    title: "Youth Movement Rising",
    category: "Education",
    date: "March 13, 2024",
    excerpt: "How local youth are taking charge and making changes in their neighborhoods.",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3"
  }
];

export default function Stories() {
  return (
    <main className="min-h-screen bg-black pt-24">
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Latest Stories</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Stay informed with our latest coverage of community news, culture, and politics.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['All', 'Community', 'Politics', 'Culture', 'Education'].map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-full border border-grape-600 text-grape-400 hover:bg-grape-600 hover:text-white transition-colors"
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stories.map((story, index) => (
            <motion.article
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-b from-grape-900/50 to-black rounded-lg overflow-hidden"
            >
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${story.image})` }}
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-grape-400 text-sm">{story.category}</span>
                  <span className="text-gray-500 text-sm">{story.date}</span>
                </div>
                <h3 className="text-white font-semibold text-xl mb-2">{story.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{story.excerpt}</p>
                <Link 
                  href={`/stories/${story.id}`}
                  className="text-grape-400 hover:text-grape-300 text-sm font-medium inline-flex items-center"
                >
                  Read Full Story
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Section */}
        <Section gradient className="rounded-2xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-gray-400">Subscribe to our newsletter for the latest stories and updates.</p>
          </div>
          <NewsletterSubscribe />
        </Section>
      </Section>
    </main>
  );
} 