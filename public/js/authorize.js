$.ajax({
  url: "/v1/user/authorize",
  type: "post",
  contentType: false,
  processData: false,
  cache: false,
  headers: { "x-access-token": localStorage.getItem("token") },
  success: function (res) {
    if (res.status !== 200) {
      alertify.set("notifier", "position", "top-center");
      alertify.error("Acesso restrito");
      setTimeout(() => {
        loading(1000);
        window.location.href = "./";
      }, 1000);
    }
  },
  error: function () {
    console.log("errou");
  },
});
