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
      res.send({
          status:401,
          message: 'Acesso Restrito'
      });
  } else {
      jwt.verify(token, process.env.SECRET, function (error, decoded) {
          if (error) {
              res.send({ status:401,
                  message: 'Token Inválido'
              });
          } else {
            res.send({ status:200,
                message: 'Logado com sucesso'
            });
          }
      });
  }
};