// pages/api/login.js
export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).end(); // Method Not Allowed
    }
  
    const { email, password } = req.body;
  
    // Simulazione di una chiamata API a un server Java
    const mockApiResponse = {
      email: 'user@example.com',
      role: 'student', // 'admin' per un amministratore
      token: 'fake-jwt-token'
    };
  
    if (email === mockApiResponse.email && password === 'password123') {
      return res.status(200).json(mockApiResponse);
    } else {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
  }
  