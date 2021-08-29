'use strict'

exports.generatePassword = (maxLength)=>{
let chars =
  "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let passwordLength = maxLength;
let newPassword = "";

for (var i = 0; i <= passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * chars.length);
  newPassword += chars.substring(randomNumber, randomNumber + 1);
}
return newPassword;
}