import Section from '@/components/Section';
import NewsletterSubscribe from '@/components/NewsletterSubscribe';
import StoryContent from '@/components/StoryContent';
import { stories } from '@/data/stories';
import Link from 'next/link';

// Generate static params for all stories
export async function generateStaticParams() {
  return stories.map((story) => ({
    slug: story.slug,
  }));
}

interface StoryPageProps {
  params: Promise<{ slug: string }>;
}

export default async function StoryPage({ params }: StoryPageProps) {
  const { slug } = await params;
  const story = stories.find(s => s.slug === slug);

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
        <StoryContent story={story} />

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