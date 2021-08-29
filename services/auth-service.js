require("dotenv-safe").config();
const jwt = require('jsonwebtoken');

exports.generateToken = async (email) => {
  return jwt.sign({ email: email}, process.env.SECRET, {
    expiresIn: 86400
  });
}