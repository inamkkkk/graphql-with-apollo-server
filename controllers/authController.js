const jwt = require('../utils/jwt');
const userModel = require('../models/userModel');

const signup = async (username, email, password) => {
  const user = userModel.createUser(username, email, password);
  const token = jwt.generateToken(user.id);
  return { token, user };
};

const login = async (username, password) => {
  const user = userModel.findUser(username, password);
  if (!user) {
    throw new Error('Invalid credentials');
  }
  const token = jwt.generateToken(user.id);
  return { token, user };
};

module.exports = {
  signup,
  login,
};
