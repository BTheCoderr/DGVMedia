import Image from "next/image";

export default function Home() {
  // Main purple color from the logo
  const primaryPurple = "#9370DB";
  const secondaryGray = "#AAAAAA";

  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-8 lg:p-24 bg-white">
      <div className="max-w-6xl w-full">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center mb-16 animate-fade-in-up">
          <div className="w-full max-w-md mb-6">
            <img 
              src="/logo.svg" 
              alt="Da Grape Vine Logo" 
              className="w-full"
            />
          </div>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl">
            Amplifying the voices, stories, and realities of inner-city, minority, and underrepresented communities.
          </p>
        </div>

        {/* About Section */}
        <div id="about" className="bg-purple-50 p-6 md:p-10 rounded-xl mb-16 grape-pattern" style={{ backgroundColor: `${primaryPurple}20` }}>
          <h2 className="text-3xl font-bold mb-6" style={{ color: primaryPurple }}>Our Mission</h2>
          <p className="text-lg text-gray-800 mb-6">
            Da Grape Vine is a start-up for-profit news media and entertainment company based in Providence, Rhode Island. 
            We provide raw, authentic, and culturally resonant content covering local news, politics, court systems, 
            education, music, nightlife, and community life across cities like Providence, Pawtucket, Central Falls, and Woonsocket.
          </p>
          <p className="text-lg text-gray-800">
            Founded by CEO Kendall Johnson, Da Grape Vine was built on the belief that our communities deserve more than mainstream 
            media narratives—we deserve the truth and the juice, told from our lens, in our voice.
          </p>
        </div>

        {/* Content Section */}
        <div id="coverage" className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-md border glow-purple" style={{ borderColor: primaryPurple }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: primaryPurple }}>What We Cover</h3>
            <ul className="list-disc list-inside text-gray-800 space-y-2">
              <li>Local News & Politics</li>
              <li>Court Systems & Education</li>
              <li>Music & Nightlife</li>
              <li>Community Events</li>
              <li>Social Commentary</li>
              <li>Original Video Production</li>
            </ul>
          </div>
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-md border glow-purple" style={{ borderColor: secondaryGray }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: primaryPurple }}>Our Approach</h3>
            <p className="text-gray-800">
              From city halls to housing projects, from underground music scenes to courtrooms, 
              Da Grape Vine is where the people get heard, seen, and respected. 
              We don't just report the culture—we are the culture.
            </p>
          </div>
        </div>

        {/* Contact/Join Section */}
        <div id="contact" className="p-6 md:p-10 rounded-xl text-center text-white" style={{ backgroundColor: primaryPurple }}>
          <h2 className="text-3xl font-bold mb-6">Connect With Us</h2>
          <p className="text-xl mb-8">
            Interested in collaborating, advertising, or joining our team? Reach out today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="mailto:info@dgvmedia.com" 
              className="bg-white px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition glow-purple"
              style={{ color: primaryPurple }}
            >
              Contact Us
            </a>
            <a 
              href="#" 
              className="px-6 py-3 rounded-lg font-bold transition border-2 border-white hover:bg-white hover:text-purple-600"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Da Grape Vine Media. All rights reserved.</p>
          <p>dgvmedia.com</p>
        </footer>
      </div>
    </main>
  );
} 