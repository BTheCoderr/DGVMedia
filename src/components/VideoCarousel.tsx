'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { shows, Show } from '@/data/shows';

const showCategories = [
  { id: 'views', title: 'Views From Da Vine', description: 'Culture & Community Stories' },
  { id: 'studio', title: 'Studio Live', description: 'Music & Entertainment' },
  { id: 'politics', title: 'Purple Party Politics', description: 'Political Coverage' },
  { id: 'sports', title: 'Ball of Fame', description: 'Local Sports' },
  { id: 'firewood', title: 'Tap In', description: 'Community Discussions' },
  { id: 'walkball', title: 'Wake n\' Bake', description: 'Morning Quarters' },
  { id: 'nightcap', title: 'Night Cap', description: 'Evening Quarters' },
  { id: 'allegedly', title: 'Allegedly', description: 'Crime & Justice' },
  { id: 'police', title: 'Shady Shields', description: 'Police Accountability' },
  { id: 'murders', title: 'Blood on the Block', description: 'True Crime' },
  { id: 'pullup', title: 'Out N\' About', description: 'Events & Nightlife' }
];

// Map show slugs to category IDs for backward compatibility
const showSlugToCategory: Record<string, string> = {
  'views-from-da-vine': 'views',
  'studio-live': 'studio',
  'purple-party-politics': 'politics',
  'ball-of-fame': 'sports',
  'allegedly': 'allegedly',
  'tap-in': 'firewood',
  'wake-n-bake': 'walkball',
  'night-cap': 'nightcap',
  'shady-shields': 'police',
  'blood-on-the-block': 'murders',
  'out-n-about': 'pullup'
};

export default function VideoCarousel() {
  const [selectedCategory, setSelectedCategory] = useState('views');

  const currentShow = showCategories.find(show => show.id === selectedCategory) || showCategories[0];
  
  // Find the corresponding show from our shows data
  const selectedShow = shows.find(show => {
    const categoryId = showSlugToCategory[show.slug];
    return categoryId === selectedCategory;
  });

  return (
    <div className="relative">
      {/* Show Categories Navigation */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-grape-400 mb-6">Our Shows</h2>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {showCategories.map((show) => (
            <button
              key={show.id}
              onClick={() => setSelectedCategory(show.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === show.id
                  ? 'bg-grape-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {show.title}
            </button>
          ))}
        </div>
        
        {/* Current Show Title */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-grape-400 mb-2">{currentShow.title}</h3>
          <p className="text-gray-400">{currentShow.description}</p>
        </div>
      </div>
      
      <div className="relative max-w-4xl mx-auto">
        {selectedShow ? (
          /* Show Description and Picture Section */
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedShow.id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-grape-900/50 to-black border border-grape-800/30">
                {/* Placeholder for show image - will become clickable link */}
                <div className="w-full h-full flex items-center justify-center cursor-pointer hover:bg-grape-800/20 transition-colors">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📺</div>
                    <h4 className="text-2xl font-bold text-white mb-2">{selectedShow.title}</h4>
                    <p className="text-gray-400">Show Image Coming Soon</p>
                  </div>
                </div>
              </div>
              
              {/* Show Tagline Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h4 className="text-xl font-bold text-white text-center">
                  {selectedShow.tagline}
                </h4>
              </div>
            </motion.div>
          </AnimatePresence>
        ) : (
          /* Coming Soon Placeholder */
          <div className="aspect-video rounded-2xl bg-gradient-to-br from-grape-900/50 to-black border border-grape-800/30 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🎬</div>
              <h4 className="text-2xl font-bold text-white mb-2">Coming Soon</h4>
              <p className="text-gray-400">New episodes dropping soon!</p>
            </div>
          </div>
        )}
      </div>

      {/* Show Description for Selected Category */}
      <div className="max-w-4xl mx-auto mt-8">
        <div className="bg-black/50 rounded-lg p-8">
          <h4 className="text-grape-400 font-semibold mb-4 text-center">About {currentShow.title}</h4>
          {selectedShow ? (
            <div className="prose prose-invert max-w-none">
              {selectedShow.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-300 leading-relaxed mb-4 text-center">
                  {paragraph}
                </p>
              ))}
            </div>
          ) : (
            <p className="text-gray-400 text-sm text-center">
              {getShowDescription(selectedCategory)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function getShowDescription(categoryId: string): string {
  const descriptions: Record<string, string> = {
    views: "Deep dives into culture, community stories, and the voices that shape our neighborhoods.",
    studio: "Live music performances, artist interviews, and behind-the-scenes content from local talent.",
    politics: "Unfiltered political coverage, policy breakdowns, and holding officials accountable.",
    sports: "Local sports coverage, athlete spotlights, and community sports stories.",
    firewood: "Community discussions, debates, and conversations that matter.",
    walkball: "Morning news, community updates, and starting your day informed.",
    nightcap: "Evening wrap-up, analysis, and closing thoughts on the day's events.",
    allegedly: "Crime stories, justice issues, and investigations that demand attention.",
    police: "Police accountability, community safety, and law enforcement transparency.",
    murders: "True crime investigations, cold cases, and seeking justice for victims.",
    pullup: "Event coverage, nightlife, and the social scene in our community."
  };
  
  return descriptions[categoryId] || "Stay tuned for exciting content coming soon!";
} 