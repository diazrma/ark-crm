
$("#formRecoveryPassword").submit(function (event) {
  event.preventDefault();
  $.ajax({
    url: "v1/user/recovery-password",
    type: "post",
    data: $(this).serialize(),
    success: function (response) {
      console.log(response)
      if (response.status == 200) {
        alertify.set("notifier", "position", "top-center");
        alertify.success(response.message);
      } else {
        alertify.set("notifier", "position", "top-center");
        alertify.error(response.message);
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log(textStatus, errorThrown);
    },
  });
});
