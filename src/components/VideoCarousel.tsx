'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Video {
  id: string;
  title: string;
  embedUrl: string;
  subheader: string;
  category: string;
  showTitle: string;
}

const videos: Video[] = [
  {
    id: '1',
    title: 'The Duck Making All His Dreams Come True',
    embedUrl: 'https://www.youtube.com/embed/81tGeRX-An4?si=EuuN_r1mMCkRSEe5',
    subheader: 'The Duck Making All His Dreams Come True',
    category: 'culture',
    showTitle: 'Views From Da Vine'
  },
  // Add more videos here as needed for different shows
];

const showCategories = [
  { id: 'views', title: 'Views From Da Vine', description: 'Culture & Community Stories' },
  { id: 'studio', title: 'Studio Live', description: 'Music & Entertainment' },
  { id: 'politics', title: 'Purple Party Politics', description: 'Political Coverage' },
  { id: 'sports', title: 'Ball of Frame', description: 'Local Sports' },
  { id: 'firewood', title: 'Firewood', description: 'Community Discussions' },
  { id: 'walkball', title: 'Walk N Ball', description: 'Morning Quarters' },
  { id: 'nightcap', title: 'Night Cap', description: 'Evening Quarters' },
  { id: 'allegedly', title: 'Allegedly', description: 'Crime & Justice' },
  { id: 'police', title: 'Shady Shields', description: 'Police Accountability' },
  { id: 'murders', title: 'Dead on Arrival', description: 'True Crime' },
  { id: 'pullup', title: 'The Pull Up', description: 'Events & Nightlife' }
];

export default function VideoCarousel() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('views');

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const currentShow = showCategories.find(show => show.id === selectedCategory) || showCategories[0];

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
        {videos.length > 0 ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentVideo}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="aspect-video rounded-2xl overflow-hidden bg-black">
                <iframe
                  width="100%"
                  height="100%"
                  src={videos[currentVideo].embedUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              
              {/* Video Subheader */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h4 className="text-xl font-bold text-white text-center">
                  {videos[currentVideo].subheader}
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

        {/* Navigation Arrows - Only show if more than one video */}
        {videos.length > 1 && (
          <>
            <button
              onClick={prevVideo}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            
            <button
              onClick={nextVideo}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </>
        )}

        {/* Dots Indicator - Only show if more than one video */}
        {videos.length > 1 && (
          <div className="flex justify-center mt-6 space-x-2">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentVideo(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentVideo ? 'bg-grape-400' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Show Description for Selected Category */}
      <div className="max-w-2xl mx-auto mt-8 text-center">
        <div className="bg-black/50 rounded-lg p-6">
          <h4 className="text-grape-400 font-semibold mb-2">About {currentShow.title}</h4>
          <p className="text-gray-400 text-sm">
            {getShowDescription(selectedCategory)}
          </p>
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