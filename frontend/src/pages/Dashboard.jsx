import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EmailGenerator from '../components/EmailGenerator';
import EmailPreview from '../components/EmailPreview';

function Dashboard() {
  const [generatedEmail, setGeneratedEmail] = useState(null);

  const handleEmailGenerated = (email) => {
    setGeneratedEmail(email);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <div className="flex-1 max-w-7xl mx-auto px-4 py-8 w-full">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">AI Email Generator</h1>
          <p className="text-gray-500">Powered by Google Gemini AI</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3">
            <EmailGenerator onEmailGenerated={handleEmailGenerated} />
          </div>
          <div className="lg:col-span-2">
            <EmailPreview email={generatedEmail} />
          </div>
        </div>

        <div className="mt-8 bg-white rounded-2xl shadow-lg p-6 bg-gradient-to-br from-purple-50 to-blue-50 border-0">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">💡 Supported Email Types</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-purple-600">👋</span> Welcome Email
            </div>
            <div className="flex items-center gap-2">
              <span className="text-purple-600">👋</span> Farewell Email
            </div>
            <div className="flex items-center gap-2">
              <span className="text-purple-600">📈</span> Promotion Email
            </div>
            <div className="flex items-center gap-2">
              <span className="text-purple-600">🙏</span> Appreciation Email
            </div>
            <div className="flex items-center gap-2">
              <span className="text-purple-600">📅</span> Meeting Request
            </div>
            <div className="flex items-center gap-2">
              <span className="text-purple-600">📧</span> Follow-up Email
            </div>
            <div className="flex items-center gap-2">
              <span className="text-purple-600">📝</span> Resignation Email
            </div>
            <div className="flex items-center gap-2">
              <span className="text-purple-600">🎄</span> Holiday Email
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Dashboard;