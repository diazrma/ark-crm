const { User } = require("../models");
const auth = require("../../services/auth-service");
const emailService = require("../../services/email-service");
const templateRegister = require("../../templates/register");
const templateRecoveryPassword = require("../../templates/recovery-password");
const helperPassword = require("../helpers/password");
const md5 = require("md5");
const users = require("../models/users");

exports.register = async (req, res, next) => {
  jwt = await auth.generateToken(req.body.name,req.body.email);

  const user = User.create({
    email: req.body.email,
    name: req.body.name,
    password: md5(req.body.password),
    token: jwt,
  });

  user
    .then(() => {
      emailService.send(
        req.body.email,
        templateRegister.subject,
        templateRegister.body(jwt)
      );
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

exports.recoveryPassword = async (req, res, next) => {
  const newPassword = helperPassword.generatePassword(5);
  console.log(newPassword)
  User.count({
    where: {
      email: req.body.email,
    },
  }).then((count) => {
    if (count != 0) {
      User.update(
        { password: md5(newPassword)},
        { where: { email: req.body.email } }
      ).then((result) => {
        if (result == 1) {
          emailService.send(
            req.body.email,
            templateRecoveryPassword.subject,
            templateRecoveryPassword.body(newPassword)
          );
          res.send({
            status: 200,
            message:
              "Enviamos um e-mail com instruções para recuperar sua conta!",
          });
        }
      });
    } else {
      res.send({ status: 403, message: "E-mail não encontrado!" });
    }
  });
};
