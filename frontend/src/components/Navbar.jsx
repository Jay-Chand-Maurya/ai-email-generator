import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-white/95 backdrop-blur-lg border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo - Left */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 w-9 h-9 sm:w-10 sm:h-10 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-cyan-400 rounded-full border-2 border-white animate-pulse"></div>
            </div>
            <div className="font-bold tracking-tighter">
              <span className="text-2xl sm:text-3xl text-gray-900">AI</span>
              <span className="text-2xl sm:text-3xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Email</span>
            </div>
          </Link>

          {/* Middle - Live Users (Hidden on very small screens) */}
          <div className="hidden md:flex items-center gap-3 bg-gray-50 border border-gray-100 px-5 py-2 rounded-3xl">
            <div className="flex items-center gap-1.5 text-sm text-gray-500">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="font-medium">1,847</span>
            </div>
            <span className="text-gray-400">•</span>
            <span className="text-purple-600 font-medium text-sm tracking-wide">writing better emails</span>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link 
              to="/" 
              className={`hidden sm:block font-medium text-sm tracking-wide transition-all relative pb-1 ${
                location.pathname === '/' 
                  ? 'text-purple-600 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-purple-600' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Home
            </Link>

            <Link to="/dashboard">
              <button className="group relative px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-3xl text-sm font-semibold overflow-hidden transition-all hover:shadow-2xl active:scale-95">
                <span className="relative z-10 flex items-center gap-2 text-xs sm:text-sm">
                  Start Free
                  <span className="hidden sm:inline">Generating</span>
                  <span className="text-lg group-hover:rotate-45 transition-transform">↗</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700"></div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;