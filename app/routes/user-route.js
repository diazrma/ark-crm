'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/user-controller');

router.post('/cadastrar', controller.register);

router.post('/confirma-cadastro', controller.confirmregister);

router.post('/login', controller.login);


module.exports = router;