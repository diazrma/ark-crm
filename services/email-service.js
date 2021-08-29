"use strict";

const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "diazrma@gmail.com",
    pass: "rockero141514",
  },
});

exports.send = async (to, subject, body) => {
  let info = await transporter.sendMail({
    from: "crm@ark.com.br",
    to: to,
    subject: subject,
    html: body,
    attachments: [{
        filename: 'logo.png',
        path: './public/images/logo.png',
        cid: 'logo'
    }]
  });
  console.log("Message sent: %s", info.messageId);
  };
