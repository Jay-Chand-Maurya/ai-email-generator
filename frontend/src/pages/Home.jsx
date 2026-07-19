import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="min-h-screen bg-[#f8f9fc] text-gray-900 overflow-hidden">
      <Navbar />

      {/* HERO SECTION - Highly Responsive */}
      <section className="relative min-h-screen flex items-center pt-16 pb-12 lg:pb-0">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://picsum.photos/id/1015/2000/1200')",
            filter: "brightness(0.90) contrast(1.05)"
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8f9fc]/95 via-[#f8f9fc]/90 to-[#f8f9fc]/70"></div>

        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:60px_60px] opacity-40"></div>

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            
            <div className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full border border-blue-500/30 bg-white/80 text-blue-600 text-sm font-medium mb-8 backdrop-blur-xl shadow-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
              </span>
              ENTERPRISE-GRADE AI EMAIL
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none mb-6 sm:mb-8">
              Emails that<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600">
                actually perform
              </span>
            </h1>

            <p className="max-w-2xl text-lg sm:text-xl md:text-2xl text-gray-600 font-light leading-relaxed px-4">
              The most intelligent AI email composer used by founders, executives, and sales teams at the world's best companies.
            </p>

            <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0">
              <Link to="/dashboard" className="w-full sm:w-auto">
                <button className="group w-full sm:w-auto px-8 sm:px-10 py-5 sm:py-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-2xl text-lg sm:text-xl font-semibold hover:brightness-105 transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105 active:scale-95 shadow-xl shadow-blue-500/30">
                  Get Started Free
                  <span className="text-2xl group-hover:translate-x-2 transition">↗</span>
                </button>
              </Link>
              <button className="w-full sm:w-auto px-8 py-5 sm:py-6 border border-gray-300 hover:border-gray-400 bg-white/80 backdrop-blur-md rounded-2xl text-lg sm:text-xl font-medium transition-all">
                Watch Product Tour
              </button>
            </div>

            {/* Trust Signals */}
            <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>1,284 people writing right now</span>
              </div>
              <div className="hidden sm:block text-gray-300">•</div>
              <div>Trusted at 400+ companies</div>
            </div>
          </div>
        </div>

        {/* Preview Card - Hidden on mobile, visible on large screens */}
        <div className="hidden xl:block absolute right-8 top-1/2 -translate-y-1/2 w-[380px] 2xl:w-[420px]">
          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-2xl shadow-gray-200/80 backdrop-blur-3xl">
            <div className="flex justify-between mb-6">
              <div className="text-sm font-mono text-gray-500">To: investor@sequoia.com</div>
              <div className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-medium">Generating...</div>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <div className="h-4 bg-gray-100 rounded w-3/4"></div>
              <div className="h-4 bg-gray-100 rounded w-full"></div>
              <div className="h-4 bg-gray-100 rounded w-5/6"></div>
              <div className="h-4 bg-gray-100 rounded w-11/12"></div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-100 text-xs text-blue-600 flex items-center justify-between font-medium">
              <span>AI Confidence: 98%</span>
              <span className="text-emerald-600">• Ready to Send</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION - Responsive Grid */}
      <section className="py-16 sm:py-20 lg:py-28 border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">Industry-leading capabilities</h2>
            <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-md mx-auto">Built for professionals who send high-stakes emails daily.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Context Intelligence",
                desc: "Understands your previous emails, company, and recipient for hyper-personalized output",
                icon: "🧠"
              },
              {
                title: "Tone Engine",
                desc: "15+ professional tones. From authoritative to warm relationship-building",
                icon: "🎙️"
              },
              {
                title: "Smart Follow-ups",
                desc: "Automatically generates perfect follow-up sequences with optimal timing",
                icon: "🔄"
              }
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white border border-gray-200 hover:border-blue-300 rounded-3xl p-8 sm:p-10 transition-all duration-700 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="text-5xl sm:text-6xl mb-6 sm:mb-8 opacity-90 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold mb-4 tracking-tight text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-[15px] sm:text-[17px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;