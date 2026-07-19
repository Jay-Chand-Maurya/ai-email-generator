import axios from 'axios';

// Backend API URL (port 8082)
//const API_URL = 'http://localhost:8082/api/emails';
const API_URL = 'https://ai-email-generator-6.onrender.com/api/emails';

export const emailService = {
  // Generate email using Gemini AI
  generateEmail: async (emailData) => {
    try {
      const response = await axios.post(`${API_URL}/generate`, emailData);
      return response.data;
    } catch (error) {
      console.error('Error generating email:', error);
      throw error;
    }
  }
};