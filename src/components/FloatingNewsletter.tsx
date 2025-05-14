import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NewsletterForm from './NewsletterForm';

export default function FloatingNewsletter() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Show after 30 seconds or 50% scroll
    const timer = setTimeout(() => {
      if (!isDismissed) setIsVisible(true);
    }, 30000);

    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercentage > 50 && !isDismissed) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isDismissed]);

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 right-4 max-w-sm bg-black border border-grape-800 rounded-lg shadow-xl p-4 z-50"
        >
          <button
            onClick={() => setIsDismissed(true)}
            className="absolute top-2 right-2 text-gray-400 hover:text-white"
          >
            ×
          </button>
          <h3 className="text-lg font-semibold text-white mb-2">
            Don't Miss Out!
          </h3>
          <p className="text-gray-400 text-sm mb-4">
            Get exclusive stories and updates delivered to your inbox.
          </p>
          <NewsletterForm />
        </motion.div>
      )}
    </AnimatePresence>
  );
} 