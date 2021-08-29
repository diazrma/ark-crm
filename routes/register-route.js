'use strict';

const express = require('express');
const router = express.Router();

router.get("/cadastro", function (req, res) {
  res.render(`../views/pages/register`);
});

module.exports = router;