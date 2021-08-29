require("dotenv-safe").config();
const jwt = require("jsonwebtoken");

exports.generateToken = async (name, email) => {
  return jwt.sign({ name: name, email: email }, process.env.SECRET, {
    expiresIn: 86400,
  });
};
