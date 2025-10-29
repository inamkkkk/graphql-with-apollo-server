const jwt = require('../utils/jwt');
const userModel = require('../models/userModel');

const authMiddleware = async (req) => {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.split(' ')[1];

  if (token) {
    try {
      const userId = jwt.verifyToken(token);
      const user = users.find(u => u.id === userId); // Find user in memory since there's no proper database

      if (user) {
        return { user };
      }

    } catch (error) {
      console.error("Authentication error:", error.message);
    }
  }

  return { user: null };
};

const users = [
    {
        id: 1, username: "test", email: "test@example.com"
    }
];

module.exports = {
  authMiddleware,
};
