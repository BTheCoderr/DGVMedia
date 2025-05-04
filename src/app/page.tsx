import Image from "next/image";
import EmailSignup from './components/EmailSignup';

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

        {/* Email Signup Section */}
        <div id="signup" className="bg-white p-6 md:p-10 rounded-xl mb-16 border-2" style={{ borderColor: primaryPurple }}>
          <EmailSignup />
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
              href="#signup" 
              className="px-6 py-3 rounded-lg font-bold transition border-2 border-white hover:bg-white hover:text-purple-600"
            >
              Join Our Community
            </a>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold mb-6" style={{ color: primaryPurple }}>Follow Da Grape Vine</h2>
          <div className="flex justify-center space-x-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 transition">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 transition">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 transition">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 transition">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Da Grape Vine Media. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4 text-sm">
            <p>dgvmedia.com</p>
            <span>•</span>
            <a href="/admin" className="hover:text-purple-600 transition">Admin</a>
          </div>
        </footer>
      </div>
    </main>
  );
} 