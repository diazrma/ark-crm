const { User } = require("../models");
const auth = require("../../services/auth-service");
const emailService = require("../../services/email-service");
const template = require("../../templates/register");
const md5 = require("md5");
const users = require("../models/users");

exports.register = async (req, res, next) => {
  jwt = await auth.generateToken(req.body.email);

  const user = User.create({
    email: req.body.email,
    name: req.body.name,
    password: md5(req.body.password),
    token: jwt,
  });

  user
    .then(() => {
      emailService.send(req.body.email, template.subject, template.body(jwt));
      res.send({
        status: 201,
        message:
          "Usuário cadastrado com sucesso enviamos um e-mail de confimação!",
      });
    })
    .catch((err) => {
      if (err.original.errno === 1062) {
        res.send({
          status: 403,
          message: "Usuário já cadastrado!",
        });
      }
    });
};

exports.confirmregister = async (req, res, next) => {
  User.update({ active: 1 }, { where: { token: req.body.token } })
    .then((result) => {
      if (result) {
        res.send({ status: 200, message: "Usuário ativo com sucesso" });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.login = async (req, res, next) => {
  User.count({
    where: {
      email: req.body.email,
      password: md5(req.body.password),
      active: 1,
    },
  }).then((count) => {
    if (count != 0) {
      User.findAll({
        attributes: ["token"],
        where: {
          email: req.body.email,
        },
      }).then((data) => {
        res.send({ status: 200, token: data[0]["token"] });
      });
    } else {
      res.send({ status: 403, message: "E-mail ou senha incorreta!" });
    }
  });
};
