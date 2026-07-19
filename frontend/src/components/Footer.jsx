import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] text-gray-400 border-t border-gray-800 mt-auto overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 relative">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#1f2937_1px,transparent_1px)] bg-[length:40px_40px] opacity-30"></div>

        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Brand Section */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-11 h-11 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400 rounded-3xl flex items-center justify-center shadow-2xl shadow-purple-500/30">
                <span className="text-white text-3xl font-bold tracking-tighter">AI</span>
              </div>
              <div>
                <span className="text-4xl font-semibold tracking-tighter text-white">AIEmail</span>
              </div>
            </div>

            <p className="text-lg text-gray-300 max-w-md leading-relaxed">
              Writing emails that don't just get read — they get results.
            </p>

            {/* Developer Credit - Elegant */}
            <div className="mt-12">
              <div className="flex items-center gap-3">
                <div className="w-px h-6 bg-gradient-to-b from-transparent via-gray-600 to-transparent"></div>
                <div>
                  <p className="text-xs uppercase tracking-[2px] text-gray-500">Crafted by</p>
                  <p className="text-2xl font-light text-white tracking-wide italic">Jay Chand Maurya</p>
                  <p className="text-sm text-purple-400">Java Developer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links (Minimal & Empty) */}
          <div className="md:col-span-3">
            <h4 className="text-white text-sm font-medium mb-6 tracking-widest">PRODUCT</h4>
            <div className="space-y-4 text-[15px]">
              <Link to="/" className="block hover:text-white transition">Home</Link>
              <Link to="/features" className="block hover:text-white transition">Features</Link>
              <Link to="/dashboard" className="block hover:text-white transition">Dashboard</Link>
            </div>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-white text-sm font-medium mb-6 tracking-widest">MORE</h4>
            <div className="space-y-4 text-[15px]">
              <a href="#" className="block hover:text-white transition">About Us</a>
              <a href="#" className="block hover:text-white transition">Blog</a>
              <a href="#" className="block hover:text-white transition">Support</a>
              <a href="#" className="block hover:text-white transition">Contact</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Eye Catching */}
        <div className="mt-20 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <div className="flex items-center gap-6">
            <p>© {currentYear} AIEmail. All rights reserved.</p>
            <span className="text-purple-500">✦</span>
            <span>Made with passion in India</span>
          </div>

          <div className="flex items-center gap-8 text-xl text-gray-600">
            <a href="#" className="hover:text-white transition">𝕏</a>
            <a href="#" className="hover:text-white transition">↳</a>
            <a href="#" className="hover:text-white transition">𝕃</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;