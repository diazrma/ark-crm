const url_string = window.location.href;
const url = new URL(url_string);
const token = url.searchParams.get("confirma-cadastro");

if (token != null) {
  $.ajax({
    url: "v1/user/confirma-cadastro",
    type: "post",
    data: { token: token },
    success: function (response) {
      alertify.set("notifier", "position", "top-center");
      if (response.status === 200) {
        alertify.success(response.message);
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log(textStatus, errorThrown);
    },
  });
}

$("#formLogin").submit(function (event) {
  event.preventDefault();
  $.ajax({
    url: "v1/user/login",
    type: "post",
    data: $(this).serialize(),
    success: function (response) {
      if (response.status == 200) {
        if ($("#remember").is(":checked")) {
          localStorage.setItem("token", response.token);
        }
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
