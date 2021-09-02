'use strict';

const express = require('express');
const router = express.Router();
const authService = require('../services/auth-service');

router.get("/dashboard", function (req, res) {
  const users =  [{name:'Rodrigo Cardoso'}];
  res.render(`../views/pages/dashboard`,{users:users});
});


module.exports = router;