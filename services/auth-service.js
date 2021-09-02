require("dotenv-safe").config();
const jwt = require("jsonwebtoken");

exports.generateToken = async (name, email) => {
  return jwt.sign({ name: name, email: email }, process.env.SECRET, {
 //   expiresIn: 86400,
  });
};

exports.decodeToken = async (token) => {
  var data = await jwt.verify(token, process.env.SECRET);
  return data;
}

exports.authorize = function (req, res, next) {
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  if (!token) {
      res.status(401).json({
          message: 'Acesso Restrito'
      });
  } else {
      jwt.verify(token, process.env.SECRET, function (error, decoded) {
          if (error) {
              res.status(401).json({
                  message: 'Token Inválido'
              });
          } else {
              next();
          }
      });
  }
};