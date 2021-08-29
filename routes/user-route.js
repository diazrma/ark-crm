'use strict';

const express = require('express');
const router = express.Router();

router.get("/cadastro", function (req, res) {
  res.render(`../views/pages/register`);
});
router.get("/recuperacao/senha", function (req, res) {
  res.render(`../views/pages/recovery-password`);
});

module.exports = router;