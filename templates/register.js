"use strict";

exports.subject = "Confirmação de cadastro na ARK CRM";
exports.body = (token) => {
  return `<div id="block" style="font-family: 'Roboto', sans-serif; margin: auto; padding: 10px;">
<center>
<img width="200" src="cid:logo" />
<h2>Clique abaixo para confirmar seu cadastro na ARK CRM.</h1>
<p>
<a href="http://localhost:3000/?confirma-cadastro=${token}" id="confirmButton" style="background-color: #0d6efd;
border: none; color: #ffffff; width: 150px; padding:10px; border-radius: 2px; cursor: pointer; text-decoration:none;">
  Confirmar
</a></p>
</div>
</center>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
</style>
`;
};
