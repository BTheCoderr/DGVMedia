'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Section from '@/components/Section';
import NewsletterSubscribe from '@/components/NewsletterSubscribe';
import { stories } from '@/data/stories';
import Image from 'next/image';
import Link from 'next/link';

export default function StoryPage() {
  const params = useParams();
  const story = stories.find(s => s.slug === params.slug);

  if (!story) {
    return (
      <main className="min-h-screen bg-black pt-24">
        <Section>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Story Not Found</h1>
            <Link href="/stories" className="text-grape-400 hover:text-grape-300">
              Return to Stories
            </Link>
          </div>
        </Section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black pt-24">
      <Section>
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Story Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
              <span>{story.category}</span>
              <span>•</span>
              <span>{story.date}</span>
            </div>
            <h1 className="text-4xl font-bold text-white mb-6">{story.title}</h1>
            <p className="text-xl text-gray-400">{story.excerpt}</p>
          </div>

          {/* Author Info */}
          <div className="flex items-center gap-4 mb-8">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={story.author.image}
                alt={story.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="text-white font-medium">{story.author.name}</div>
              <div className="text-gray-400 text-sm">{story.author.role}</div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-video rounded-lg overflow-hidden mb-8">
            <Image
              src={story.image}
              alt={story.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Story Content */}
          <div className="prose prose-invert prose-grape max-w-none">
            {story.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-300 mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Share and Navigation */}
          <div className="border-t border-grape-800/30 mt-12 pt-8">
            <div className="flex justify-between items-center">
              <Link
                href="/stories"
                className="text-grape-400 hover:text-grape-300 transition-colors"
              >
                ← Back to Stories
              </Link>
              <div className="flex gap-4">
                <button className="text-grape-400 hover:text-grape-300 transition-colors">
                  Share
                </button>
                <button className="text-grape-400 hover:text-grape-300 transition-colors">
                  Save
                </button>
              </div>
            </div>
          </div>
        </motion.article>

        {/* Newsletter Section */}
        <Section gradient className="mt-16 rounded-2xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-gray-400">
              Get more stories like this delivered to your inbox.
            </p>
          </div>
          <NewsletterSubscribe />
        </Section>
      </Section>
    </main>
  );
} 