'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/user-controller');
const authService = require('../../services/auth-service');

router.post('/cadastrar', controller.register);

router.post('/confirma-cadastro', controller.confirmregister);

router.post('/login', controller.login);

router.post('/logout', controller.logout);

router.post('/recovery-password', controller.recoveryPassword);

router.post('/authorize',authService.authorize);

module.exports = router;