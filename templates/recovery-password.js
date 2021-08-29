"use strict";

exports.subject = "Recuperação de senha na ARK CRM";
exports.body = (newPassword) => {
  return `<div id="block" style="font-family: 'Roboto', sans-serif; margin: auto; padding: 10px;">
<center>
<img width="200" src="cid:logo" />
<h2>Sua senha nova senha na ARK CRM.</h1>
<p>
<div style="background-color:#0d6efd; color:#000000; border-radius:5px; width:100px; padding:5px;">
${newPassword}
</div>
</p>
<small style="color:#FF0000;">Não esqueça de mudar sua senha para sua segurança.</small>
</div>
</center>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
</style>
`;
};
