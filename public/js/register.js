$("#formCadastro").submit(function (event) {
  event.preventDefault();
  $.ajax({
    url: "v1/user/cadastrar",
    type: "post",
    data: $(this).serialize(),
    success: function (response) {
      alertify.set("notifier", "position", "top-center");
      if (response.status !== 201) {
        alertify.error(response.message);
      } else {
        alertify.success(response.message);
        setTimeout(() => {
          window.location.href = "./";
        }, 3000);
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log(textStatus, errorThrown);
    },
  });
});
