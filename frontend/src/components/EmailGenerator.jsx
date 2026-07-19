import { useState } from 'react';
import { emailService } from '../services/emailService';

function EmailGenerator({ onEmailGenerated }) {
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    designation: '',
    emailType: 'welcome'
  });
  const [loading, setLoading] = useState(false);

  const emailTypes = [
    { value: 'welcome', label: '👋 Welcome Email' },
    { value: 'farewell', label: '👋 Farewell Email' },
    { value: 'promotion', label: '📈 Promotion Email' },
    { value: 'appreciation', label: '🙏 Appreciation Email' },
    { value: 'meeting', label: '📅 Meeting Request' },
    { value: 'followup', label: '📧 Follow-up Email' },
    { value: 'resignation', label: '📝 Resignation Email' },
    { value: 'holiday', label: '🎄 Holiday Email' },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim() || !formData.department.trim() || !formData.designation.trim()) {
      alert('Please fill all fields');
      return;
    }

    setLoading(true);
    try {
      const response = await emailService.generateEmail(formData);
      onEmailGenerated(response);
    } catch (error) {
      alert('Failed to generate email. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-3 rounded-xl">
          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">AI Email Generator</h2>
          <p className="text-sm text-gray-500">Powered by Google Gemini AI</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Employee Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter employee name"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition"
              disabled={loading}
            />
          </div>

          {/* Department */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Department
            </label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              placeholder="Enter department name"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition"
              disabled={loading}
            />
          </div>

          {/* Designation */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Designation
            </label>
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              placeholder="Enter job title"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition"
              disabled={loading}
            />
          </div>

          {/* Email Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Email Type
            </label>
            <select
              name="emailType"
              value={formData.emailType}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition"
              disabled={loading}
            >
              {emailTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-medium transition shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
              </svg>
              Generating with Gemini AI...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              Generate Email with AI
            </span>
          )}
        </button>
      </form>
    </div>
  );
}

export default EmailGenerator;