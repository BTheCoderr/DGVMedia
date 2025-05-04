"use client";

import { useState, useEffect } from 'react';

const SubscribersList = () => {
  const [subscribers, setSubscribers] = useState<string[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if already authenticated
    const adminAuth = localStorage.getItem('dgvAdminAuth');
    if (adminAuth === 'true') {
      setIsAdmin(true);
      loadSubscribers();
    }
  }, []);

  const loadSubscribers = () => {
    try {
      const storedEmails = localStorage.getItem('dgvSubscribers');
      if (storedEmails) {
        setSubscribers(JSON.parse(storedEmails));
      }
    } catch (e) {
      console.error('Error loading subscribers:', e);
    }
  };

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would be a secure authentication system
    // For demo purposes, using a simple password
    if (password === 'grapevine2023') {
      setIsAdmin(true);
      localStorage.setItem('dgvAdminAuth', 'true');
      loadSubscribers();
      setError('');
    } else {
      setError('Invalid password');
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
    localStorage.removeItem('dgvAdminAuth');
  };

  const handleExport = () => {
    const csvContent = "data:text/csv;charset=utf-8," + subscribers.join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "dgv_subscribers.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isAdmin) {
    return (
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4" style={{ color: '#9370DB' }}>Admin Access</h2>
        <form onSubmit={handleAdminLogin} className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              required
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-purple-700 transition"
            style={{ backgroundColor: '#9370DB' }}
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold" style={{ color: '#9370DB' }}>Email Subscribers</h2>
        <div className="space-x-2">
          <button
            onClick={handleExport}
            className="bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition"
          >
            Export CSV
          </button>
          <button
            onClick={handleLogout}
            className="bg-gray-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-600 transition"
          >
            Logout
          </button>
        </div>
      </div>

      {subscribers.length === 0 ? (
        <p className="text-gray-700">No subscribers yet.</p>
      ) : (
        <div>
          <p className="mb-4 text-gray-700">Total subscribers: {subscribers.length}</p>
          <div className="border rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Signup Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {subscribers.map((email, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                      {new Date().toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-medium text-gray-900 mb-2">Next Steps</h3>
        <p className="text-gray-700 mb-4">
          For a production website, consider integrating with one of these email marketing services:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Mailchimp</li>
          <li>ConvertKit</li>
          <li>SendGrid</li>
          <li>HubSpot</li>
        </ul>
      </div>
    </div>
  );
};

export default SubscribersList; 