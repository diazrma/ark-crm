'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/customer-controller');
const multer = require("multer");

const storage = multer.diskStorage({
   destination: function (req, file, cb) {
     cb(null, 'uploads')
   },
   filename: function (req, file, cb) {
     cb(null, 'customers' + '.csv')
   }
 })
  
 const upload = multer({ storage: storage })

router.post('/import',  upload.array('file',1), controller.import);
router.get('/',  controller.get);


module.exports = router;