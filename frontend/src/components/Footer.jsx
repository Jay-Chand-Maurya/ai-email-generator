import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] text-gray-400 border-t border-gray-800 mt-auto overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 relative">
        
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#1f2937_1px,transparent_1px)] bg-[length:50px_50px] opacity-40"></div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12">
            
            {/* Brand & Developer Section */}
            <div className="lg:col-span-5 text-center md:text-left">
              <div className="flex justify-center md:justify-start items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400 rounded-3xl flex items-center justify-center shadow-2xl shadow-purple-500/40">
                  <span className="text-white text-3xl font-bold">AI</span>
                </div>
                <span className="text-4xl sm:text-5xl font-semibold tracking-tighter text-white">AIEmail</span>
              </div>

              <p className="text-base sm:text-lg text-gray-300 max-w-md mx-auto md:mx-0 leading-relaxed">
                Writing emails that don't just get read — they get results.
              </p>

              {/* Developer Credit - Eye Catching */}
              <div className="mt-10 md:mt-14 flex flex-col items-center md:items-start">
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Crafted with  by</p>
                <p className="text-2xl sm:text-3xl font-light italic text-white tracking-wide">Jay Chand Maurya</p>
                <p className="text-purple-400 text-sm font-medium">Java Developer</p>
              </div>
            </div>

            {/* Links - Stacked nicely on mobile */}
            <div className="lg:col-span-3 flex flex-col items-center md:items-start">
              <h4 className="text-white text-sm font-medium mb-6 tracking-widest">PRODUCT</h4>
              <div className="space-y-3 text-center md:text-left text-[15px]">
                <Link to="/" className="block hover:text-white transition">Home</Link>
                <Link to="/features" className="block hover:text-white transition">Features</Link>
                <Link to="/dashboard" className="block hover:text-white transition">Dashboard</Link>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center md:items-start">
              <h4 className="text-white text-sm font-medium mb-6 tracking-widest">EXPLORE</h4>
              <div className="space-y-3 text-center md:text-left text-[15px]">
                <a href="#" className="block hover:text-white transition">About Us</a>
                <a href="#" className="block hover:text-white transition">Blog</a>
                <a href="#" className="block hover:text-white transition">Support</a>
                <a href="#" className="block hover:text-white transition">Contact</a>
              </div>
            </div>
          </div>

          {/* Bottom Bar - Super Responsive */}
          <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left text-sm">
            <div>
              © {currentYear} AIEmail. All rights reserved.
            </div>
            
            <div className="flex items-center gap-5 md:gap-8">
              <span className="text-purple-500 text-lg">✦</span>
              <span>Made with passion in India</span>
            </div>

            {/* Social Icons - Bigger & Attractive */}
            <div className="flex justify-center gap-6 md:gap-8 text-2xl text-gray-500">
              <a href="#" className="hover:text-white hover:scale-125 transition-all">𝕏</a>
              <a href="#" className="hover:text-white hover:scale-125 transition-all">↳</a>
              <a href="#" className="hover:text-white hover:scale-125 transition-all">𝕃</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;