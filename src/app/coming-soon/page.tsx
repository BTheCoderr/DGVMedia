'use client';

export const dynamic = "force-dynamic";

import { useState, useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';

function ComingSoonContent() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    // Check if form was submitted successfully
    if (searchParams.get('success') === 'true') {
      setIsSubmitted(true);
    }
  }, [searchParams]);

  const showOptions = [
    'Views From Da Vine',
    'Studio Live',
    'Purple Party Politics',
    'Ball of Fame',
    'Allegedly',
    'Tap In',
    'Wake n\' Bake',
    'Night Cap',
    'Shady Shields',
    'Blood on the Block',
    'Out N\' About'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formData = new FormData(e.target as HTMLFormElement);
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.error('Form submission failed');
        // Still show success for better UX
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Still show success for better UX
      setIsSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-black flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Logo */}
          <div className="mb-8">
            <div className="text-6xl mb-4">🍇</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Da GrapeVine
            </h1>
            <p className="text-xl text-gray-300">
              Where the truth and the juice gets told
            </p>
          </div>

          {/* Main Message */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-6">
              Something Big is Coming
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              We're building something revolutionary for our community. 
              A platform where real stories get told, where voices get heard, 
              and where the truth isn't filtered.
            </p>
            <div className="bg-purple-900/30 border border-purple-700/50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">
                What We're Building
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                <div>🎬 Raw, unfiltered community stories</div>
                <div>🎤 Live performances and artist spotlights</div>
                <div>🏛️ Political coverage that matters</div>
                <div>🏀 Local sports and athlete stories</div>
                <div>⚖️ Justice and accountability reporting</div>
                <div>🌃 Nightlife and community events</div>
              </div>
            </div>
          </div>

          {/* Email Collection Form */}
          {!isSubmitted ? (
            <>
              {/* Hidden form for Netlify build-time detection */}
              <form name="coming-soon-signup" data-netlify="true" hidden>
                <input type="email" name="email" />
                <input type="checkbox" name="interests" />
              </form>
              
              <motion.form
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                onSubmit={handleSubmit}
                data-netlify="true"
                name="coming-soon-signup"
                className="space-y-6"
              >
                {/* Netlify form fields */}
                <input type="hidden" name="form-name" value="coming-soon-signup" />
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Get notified when we launch
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-purple-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-4">
                    Which shows interest you most? (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {showOptions.map((show) => (
                      <label key={show} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          name="interests"
                          value={show}
                          className="w-4 h-4 text-purple-600 bg-black border-purple-700 rounded focus:ring-purple-500 focus:ring-2"
                        />
                        <span className="text-sm text-gray-300">{show}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Stay in the Loop
                </button>
              </motion.form>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-purple-900/30 border border-purple-700/50 rounded-lg p-8"
            >
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-purple-400 mb-4">
                You're on the List!
              </h3>
              <p className="text-gray-300">
                We'll notify you as soon as we launch. Get ready for something special.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default function ComingSoon() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-black flex items-center justify-center p-4">
        <div className="text-center">
          <div className="text-6xl mb-4">🍇</div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Da GrapeVine
          </h1>
          <p className="text-xl text-gray-300">Loading...</p>
        </div>
      </div>
    }>
      <ComingSoonContent />
    </Suspense>
  );
} 