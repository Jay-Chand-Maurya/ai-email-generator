import { useState } from 'react';

function EmailPreview({ email }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (email?.body) {
      navigator.clipboard.writeText(email.body);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!email) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-6 h-64 flex flex-col items-center justify-center text-center">
        <svg className="w-16 h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
        <p className="text-gray-500">Generated email will appear here</p>
        <p className="text-sm text-gray-400 mt-1">Fill the form and click generate</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 animate-fade-in">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900">Generated Email</h3>
          <p className="text-sm text-purple-600 font-medium">{email.subject}</p>
        </div>
        <button
          onClick={handleCopy}
          className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl text-sm font-medium transition shadow-md hover:shadow-lg"
        >
          {copied ? '✅ Copied!' : '📋 Copy'}
        </button>
      </div>

      <div className="bg-gray-50 rounded-xl p-4 whitespace-pre-wrap text-gray-800 leading-relaxed max-h-96 overflow-y-auto">
        {email.body}
      </div>
    </div>
  );
}

export default EmailPreview;