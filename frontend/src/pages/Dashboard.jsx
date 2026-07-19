import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EmailGenerator from '../components/EmailGenerator';
import EmailPreview from '../components/EmailPreview';

function Dashboard() {
  const [generatedEmail, setGeneratedEmail] = useState(null);
  const [animatedCount, setAnimatedCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const handleEmailGenerated = (email) => {
    setGeneratedEmail(email);
  };

  useEffect(() => {
    setIsVisible(true);
    const target = 15247;
    const interval = setInterval(() => {
      setAnimatedCount(prev => {
        const increment = Math.floor(Math.random() * 5) + 1;
        return Math.min(prev + increment, target);
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: '📧', label: 'Emails Generated', value: animatedCount.toLocaleString() + '+', trend: '+12%', color: 'from-purple-500 to-purple-600' },
    { icon: '⏱️', label: 'Time Saved', value: '127h', trend: '+5h', color: 'from-blue-500 to-blue-600' },
    { icon: '📊', label: 'Success Rate', value: '99%', trend: '+2%', color: 'from-green-500 to-green-600' },
    { icon: '⭐', label: 'Avg Rating', value: '4.9⭐', trend: 'Top Rated', color: 'from-yellow-500 to-yellow-600' },
  ];

  const emailTypes = [
    { icon: '👋', name: 'Welcome Email', desc: 'Onboard new employees', color: 'from-blue-400 to-blue-600' },
    { icon: '🚀', name: 'Farewell Email', desc: 'Goodbye messages', color: 'from-purple-400 to-purple-600' },
    { icon: '📈', name: 'Promotion Email', desc: 'Career advancement', color: 'from-green-400 to-green-600' },
    { icon: '🙏', name: 'Appreciation Email', desc: 'Thank you notes', color: 'from-pink-400 to-pink-600' },
    { icon: '📅', name: 'Meeting Request', desc: 'Schedule meetings', color: 'from-yellow-400 to-yellow-600' },
    { icon: '📧', name: 'Follow-up Email', desc: 'Follow-up communications', color: 'from-indigo-400 to-indigo-600' },
    { icon: '📝', name: 'Resignation Email', desc: 'Resignation letters', color: 'from-red-400 to-red-600' },
    { icon: '🎄', name: 'Holiday Email', desc: 'Holiday greetings', color: 'from-teal-400 to-teal-600' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-purple-50/30 relative overflow-x-hidden">
      
      {/* Animated Background Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-float-slower"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-300/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-40 right-40 w-48 h-48 bg-pink-300/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 left-40 w-48 h-48 bg-yellow-300/10 rounded-full blur-3xl animate-float-slower"></div>
      </div>

      <Navbar />

      {/* ===== HERO BANNER WITH ANIMATION ===== */}
      <div className={`relative overflow-hidden bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-64 h-64 bg-purple-300 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-300 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-medium mb-4 hover:scale-105 transition-transform duration-300">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-ping"></span>
                <span>⚡ Powered by Google Gemini AI</span>
                <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full animate-pulse">v2.0</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                AI Email Generator
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-pink-200 text-2xl md:text-3xl animate-gradient">
                  Professional emails in seconds
                </span>
              </h1>
              <p className="text-purple-100 mt-2 max-w-md animate-fade-in-up animation-delay-200">
                Generate professional, personalized emails instantly using advanced AI technology
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 animate-fade-in-up animation-delay-400">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="text-2xl font-bold text-white animate-pulse">
                  {animatedCount.toLocaleString()}+
                </div>
                <div className="text-xs text-purple-200">Emails Generated</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="flex items-center gap-1 text-white">
                  <span className="text-yellow-300 animate-bounce">👑</span>
                  <span className="font-bold">4.9</span>
                  <span className="text-yellow-300">⭐</span>
                </div>
                <div className="text-xs text-purple-200">User Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" className="w-full">
            <path fill="rgba(255,255,255,0.1)" d="M0,20 C360,40 720,0 1080,20 C1260,30 1380,20 1440,20 L1440,40 L0,40 Z" className="animate-wave"></path>
          </svg>
        </div>
      </div>

      <div className="flex-1 max-w-7xl mx-auto px-4 py-8 w-full relative z-10">
        
        {/* ===== STATS CARDS ===== */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`group bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-gray-100/80 shadow-lg hover:shadow-2xl hover:border-purple-200 transition-all duration-500 hover:-translate-y-2 animate-fade-in-up animation-delay-${index * 100}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/20`}>
                  {stat.icon}
                </div>
                {stat.trendUp && (
                  <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full animate-pulse">
                    ↑ {stat.trend}
                  </span>
                )}
              </div>
              <div className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
              <div className="mt-2 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-1000 group-hover:w-full`} style={{ width: '70%' }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* ===== MAIN CONTENT ===== */}
        <div className="grid lg:grid-cols-5 gap-6">
          
          {/* LEFT - GENERATOR */}
          <div className="lg:col-span-3 animate-fade-in-up animation-delay-300">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-100/80 shadow-xl hover:shadow-2xl transition-all duration-500 p-6 md:p-8 hover:border-purple-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-purple-600 to-blue-600 rounded-full animate-pulse"></div>
                <h2 className="text-xl font-bold text-gray-900">Generate Your Email</h2>
                <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full flex items-center gap-1 hover:scale-105 transition-transform duration-300">
                  <span className="text-purple-500 animate-spin-slow">✨</span> AI
                </span>
              </div>
              
              <EmailGenerator onEmailGenerated={handleEmailGenerated} />
            </div>
          </div>

          {/* RIGHT - PREVIEW */}
          <div className="lg:col-span-2 animate-fade-in-up animation-delay-500">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-100/80 shadow-xl hover:shadow-2xl transition-all duration-500 p-6 md:p-8 h-full hover:border-green-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full animate-pulse"></div>
                <h2 className="text-xl font-bold text-gray-900">Preview</h2>
                {generatedEmail && (
                  <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full flex items-center gap-1 animate-fade-in">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping"></span>
                    Ready
                  </span>
                )}
              </div>
              <EmailPreview email={generatedEmail} />
            </div>
          </div>

        </div>

        {/* ===== SUPPORTED EMAIL TYPES ===== */}
        <div className="mt-8 animate-fade-in-up animation-delay-600">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-100/80 shadow-xl hover:shadow-2xl transition-all duration-500 p-6 md:p-8 hover:border-purple-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="text-purple-500 text-2xl animate-bounce">💎</span>
                <h3 className="text-lg font-bold text-gray-900">Supported Email Types</h3>
                <span className="text-xs text-gray-400 font-normal">(8 Templates)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-purple-600 bg-purple-50 px-3 py-1 rounded-full hover:scale-105 transition-transform duration-300">
                  <span className="inline mr-1 text-purple-500 animate-pulse">⚡</span>
                  AI Ready
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {emailTypes.map((type, index) => (
                <div 
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl p-4 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer animate-fade-in-up`}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    background: `linear-gradient(135deg, ${type.color.split(' ')[1].replace('to-', '')}15, ${type.color.split(' ')[2]}15)` 
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ background: `linear-gradient(135deg, ${type.color.split(' ')[1].replace('to-', '')}, ${type.color.split(' ')[2]})` }}></div>
                  <div className="relative">
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-500 group-hover:rotate-12">{type.icon}</div>
                    <div className="text-sm font-semibold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                      {type.name}
                    </div>
                    <div className="text-xs text-gray-400 mt-0.5">{type.desc}</div>
                  </div>
                  <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs text-purple-500">→</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
              <span className="hover:text-purple-600 transition-colors duration-300">💡 Click any template to quickly generate</span>
              <span className="flex items-center gap-1">
                <span className="text-purple-400 animate-spin-slow">✨</span>
                AI-powered templates
              </span>
            </div>
          </div>
        </div>

        {/* ===== FEATURE HIGHLIGHTS ===== */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: '🚀', text: 'Instant Generation', color: 'from-purple-400 to-purple-600' },
            { icon: '🧠', text: 'AI Context Understanding', color: 'from-blue-400 to-blue-600' },
            { icon: '✨', text: '20+ Templates', color: 'from-pink-400 to-pink-600' },
            { icon: '👥', text: 'Team Ready', color: 'from-green-400 to-green-600' },
          ].map((feature, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 text-sm text-gray-600 bg-white/50 backdrop-blur-sm rounded-xl px-4 py-3 border border-gray-100/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className={`text-lg bg-gradient-to-br ${feature.color} bg-clip-text text-transparent`}>{feature.icon}</span>
              <span className="font-medium">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* ===== KEYBOARD SHORTCUTS ===== */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-gray-400 bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-gray-100/50 hover:border-purple-200 transition-all duration-300 hover:shadow-lg animate-fade-in-up animation-delay-800">
          <span className="font-medium text-gray-600">⌨️ Productivity Shortcuts:</span>
          {[
            { keys: ['Ctrl', 'Enter'], action: 'Generate' },
            { keys: ['Ctrl', 'C'], action: 'Copy' },
            { keys: ['Ctrl', 'S'], action: 'Save' },
          ].map((shortcut, index) => (
            <span key={index} className="flex items-center gap-1">
              <kbd className="px-2 py-1 bg-gradient-to-br from-gray-100 to-gray-200 rounded text-gray-700 font-mono text-xs border border-gray-300 shadow-sm hover:scale-105 transition-transform duration-200">
                {shortcut.keys.join(' + ')}
              </kbd>
              <span>{shortcut.action}</span>
              {index < 2 && <span className="text-gray-300">|</span>}
            </span>
          ))}
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default Dashboard;