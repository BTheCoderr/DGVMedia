"use client";

import { useState } from 'react';

const EmailSignup = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    
    setLoading(true);
    setError('');
    
    // In a real application, you would send this to your backend or a service like Mailchimp
    // For now, we'll simulate a successful signup
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      
      // Store email in localStorage for demonstration purposes
      try {
        const emails = JSON.parse(localStorage.getItem('dgvSubscribers') || '[]');
        emails.push(email);
        localStorage.setItem('dgvSubscribers', JSON.stringify(emails));
      } catch (e) {
        console.error('Error storing email:', e);
      }
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 p-6 rounded-lg text-center">
        <h3 className="text-xl font-bold text-green-700 mb-2">Thanks for subscribing!</h3>
        <p className="text-green-600">
          We'll keep you updated on the latest juice from Da Grape Vine.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <h3 className="text-xl font-bold mb-4" style={{ color: '#9370DB' }}>Join Our Community</h3>
      <p className="text-gray-700 mb-4">
        Subscribe to get the latest news, stories, and updates from Da Grape Vine delivered right to your inbox.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label htmlFor="email" className="sr-only">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent transition"
            required
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-purple-700 transition ${loading ? 'opacity-70 cursor-not-allowed' : 'glow-purple'}`}
          style={{ backgroundColor: '#9370DB' }}
        >
          {loading ? 'Subscribing...' : 'Subscribe Now'}
        </button>
        
        <p className="text-xs text-gray-500 text-center">
          We respect your privacy and will never share your information with third parties.
        </p>
      </form>
    </div>
  );
};

export default EmailSignup; 