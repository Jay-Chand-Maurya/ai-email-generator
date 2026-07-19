import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-2 rounded-xl shadow-md">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900">AI<span className="text-purple-600">Email</span></span>
              <span className="hidden sm:inline text-xs text-gray-400 ml-1">Generator</span>
            </div>
          </Link>

          <div className="flex items-center gap-6">
            <Link 
              to="/" 
              className={`text-sm font-medium transition ${
                location.pathname === '/' ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/dashboard" 
              className={`text-sm font-medium transition ${
                location.pathname === '/dashboard' ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              Dashboard
            </Link>
            <Link to="/dashboard">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-5 py-2 rounded-xl text-sm font-medium transition shadow-md hover:shadow-lg">
                Generate
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;