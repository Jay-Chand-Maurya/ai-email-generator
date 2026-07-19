import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Home() {
  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered',
      desc: 'Generate professional emails using advanced AI technology',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '⚡',
      title: 'Instant Results',
      desc: 'Get your email in seconds with just a simple prompt',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '🎨',
      title: 'Customizable',
      desc: 'Choose tone, length, and style for perfect emails',
      color: 'from-indigo-500 to-indigo-600'
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="flex-1 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
              AI Email Generator
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Write Professional Emails
              <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                With AI Power
              </span>
            </h1>
            
            <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Generate professional emails instantly using AI. Just describe what you want 
              and our AI will write it for you.
            </p>
            
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/dashboard">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition shadow-lg hover:shadow-xl flex items-center gap-2">
                  Start Generating
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                </button>
              </Link>
            </div>

            <div className="mt-16 flex flex-wrap justify-center gap-12">
              <div>
                <div className="text-3xl font-bold text-gray-900">10K+</div>
                <div className="text-sm text-gray-500">Emails Generated</div>
              </div>
              <div className="w-px h-12 bg-gray-200 hidden sm:block"></div>
              <div>
                <div className="text-3xl font-bold text-gray-900">99%</div>
                <div className="text-sm text-gray-500">Accuracy Rate</div>
              </div>
              <div className="w-px h-12 bg-gray-200 hidden sm:block"></div>
              <div>
                <div className="text-3xl font-bold text-gray-900">4.9⭐</div>
                <div className="text-sm text-gray-500">User Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Powerful Features</h2>
            <p className="mt-3 text-gray-500">AI-powered email generation made simple</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition`}>
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-500 leading-relaxed">{f.desc}</p>
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